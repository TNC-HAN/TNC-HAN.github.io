"""Lädt die neuen Banner-Fotos (Unsplash-Lizenz: frei, auch gewerblich, ohne Namensnennung),
baut die DACH-Collage und hellt das Istanbul-Nachtbild auf.
Aufruf (im Projektordner):  python scripts/fetch-photos-2026-11-19.py
"""
import io
import urllib.request
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps

OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "photos"
UA = {"User-Agent": "Mozilla/5.0"}
W = 2000

SINGLE = {
    # Folie 1 + 2 (Übergang, bis eigene Fotos mit Ümit Törün vorliegen)
    "strategie-meeting.jpg": "1758691736451-6937303cc06f",
    "coaching-unternehmer.jpg": "1758599543147-97eda140ca82",
    # Folie 7: Nordzypern-Diashow
    "nordzypern-kyrenia-hafen-berge.jpg": "1678798876237-ed9da98af522",
    "nordzypern-strandpromenade.jpg": "1710106830391-6679e22a68f9",
    "nordzypern-kyrenia-burg.jpg": "1678798876280-0b746013b646",
    "nordzypern-strand.jpg": "1710106793368-82f483165c7f",
    "nordzypern-huegel-meer.jpg": "1710106931323-fbe515ad1efb",
    "nordzypern-famagusta.jpg": "1689477602442-8c8a3e785143",
    "nordzypern-kyrenia-meerblick.jpg": "1678798876264-9a7808be39b5",
    "nordzypern-tuerkis.jpg": "1710106830410-04e2d76f8ac8",
}
DACH = [  # München · Wien · Zürich
    "1692726781437-bd6e202894b9",
    "1785245579601-a932c8d6b055",
    "1620563316910-f242d1bad656",
]


def fetch(pid: str, w: int = W) -> Image.Image:
    url = f"https://images.unsplash.com/photo-{pid}?w={w}&q=85&fm=jpg"
    raw = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
    return ImageOps.exif_transpose(Image.open(io.BytesIO(raw))).convert("RGB")


def save(im: Image.Image, name: str) -> None:
    im.save(OUT / name, quality=84, optimize=True, progressive=True)
    print(name, im.size)


for name, pid in SINGLE.items():
    save(fetch(pid), name)

# DACH-Collage: drei helle Bilder nebeneinander mit feinen Goldlinien
H, PW, GAP = 1080, 640, 6
canvas = Image.new("RGB", (PW * 3 + GAP * 2, H), (201, 169, 110))
for i, pid in enumerate(DACH):
    im = ImageOps.fit(fetch(pid, 1400), (PW, H), centering=(0.5, 0.45))
    im = ImageEnhance.Brightness(im).enhance(1.06)
    canvas.paste(im, (i * (PW + GAP), 0))
save(canvas, "dach-collage.jpg")

# Istanbul: Bosporusbrücke sichtbarer machen (Schatten anheben, etwas mehr Farbe)
ist = OUT / "istanbul-bosporusbruecke-nacht.jpg"
src = Path(__file__).resolve().parent / "originals" / "istanbul-bosporusbruecke-nacht.jpg"
src.parent.mkdir(exist_ok=True)
if not src.exists():
    src.write_bytes(ist.read_bytes())
im = Image.open(src).convert("RGB")
lut = [round(255 * ((v / 255) ** 0.62)) for v in range(256)]
im = im.point(lut * 3)
im = ImageEnhance.Color(im).enhance(1.18)
im = ImageEnhance.Contrast(im).enhance(1.05)
save(im, "istanbul-bosporusbruecke-nacht.jpg")
