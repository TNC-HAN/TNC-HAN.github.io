"""Schneidet das Porträt kreisrund am Goldrahmen aus (Rahmen bleibt erhalten, Ecken transparent).

Aufruf:  python scripts/make-portrait.py "<pfad-zum-foto>"
Ergebnis: src/assets/team/portrait.png
"""
import pathlib
import sys
from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = Image.open(sys.argv[1]).convert("RGB")
W, H = src.size
px = src.load()


def is_gold(p):
    r, g, b = p
    return r > 150 and g > 90 and r - b > 70 and r > g


def first(points):
    for x, y in points:
        if is_gold(px[x, y]):
            return x, y
    raise SystemExit("Goldrahmen nicht gefunden")


# Äußere Kante des Goldrahmens in vier Richtungen suchen
cx, cy = W // 2, H // 2
left = first((x, cy) for x in range(W))[0]
right = first((x, cy) for x in range(W - 1, -1, -1))[0]
top = first((cx, y) for y in range(H))[1]
bottom = first((cx, y) for y in range(H - 1, -1, -1))[1]
PAD = 3  # Rahmen samt Kantenglanz vollständig mitnehmen
box = (left - PAD, top - PAD, right + PAD + 1, bottom + PAD + 1)
print("Rahmen:", box)

# Ausschnitt auf Quadrat bringen (Rahmen ist leicht oval) → exakter Kreis
size = 1200
out = src.crop(box).resize((size, size), Image.LANCZOS).convert("RGBA")

# Kreismaske mit Kantenglättung (4-fach zeichnen, dann verkleinern)
S = 4
mask = Image.new("L", (size * S, size * S), 0)
ImageDraw.Draw(mask).ellipse([0, 0, size * S - 1, size * S - 1], fill=255)
out.putalpha(mask.resize((size, size), Image.LANCZOS))
dest = ROOT / "src/assets/team/portrait.png"
dest.parent.mkdir(parents=True, exist_ok=True)
out.save(dest, optimize=True)
print("gespeichert:", dest, out.size)
