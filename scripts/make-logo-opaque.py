"""Macht ein halbtransparentes Logo voll deckend (Farben bleiben, Kanten bleiben glatt).

Aufruf:  python scripts/make-logo-opaque.py <eingabe.png> <ausgabe.png>
Hintergrund: Die gelieferte nexxcon-Logodatei hat nur ca. 45–68 % Deckkraft und
wirkt auf dunklem Grund matt. Pixel ab ~40 % Deckkraft werden voll deckend,
schwächere Kantenpixel werden proportional angehoben (Kantenglättung bleibt).
"""
import sys
from PIL import Image

src, dest = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGBA")
r, g, b, a = im.split()
a = a.point(lambda v: min(255, round(v * 255 / 100)))
Image.merge("RGBA", (r, g, b, a)).save(dest, optimize=True)
print("gespeichert:", dest)
