"""Lädt Immobilienfotos für Folie 5 (D-A-CH, je Land 3 Ansichten) und den Ersatz für Folie 7.
Unsplash-Lizenz (frei, auch gewerblich). Aufruf im Projektordner:
    python scripts/fetch-photos-dach-immobilien.py
"""
import io
import urllib.request
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps

OUT = Path(__file__).resolve().parent.parent / "src" / "assets" / "photos"
UA = {"User-Agent": "Mozilla/5.0"}

PHOTOS = {
    # Deutschland
    "dach-de-altbauvilla.jpg": "1786476483093-7be4643cf302",
    "dach-de-muenchen-altbau.jpg": "1683399141283-87cbe5b9d968",
    "dach-de-hamburg-wohnturm.jpg": "1750679540404-9d2b3425a9e3",
    # Österreich
    "dach-at-wien-altbau.jpg": "1647385581122-2231825cfb7f",
    "dach-at-alpenvilla.jpg": "1792159361468-85b8f9ffc1df",
    "dach-at-villa-berge.jpg": "1653396340794-c907beb90886",
    # Schweiz
    "dach-ch-zuerich-altbau.jpg": "1777661273041-300e4d767678",
    "dach-ch-modern.jpg": "1747372913868-f9e099a3b2ec",
    "dach-ch-villa-alpen.jpg": "1777669164460-0c0c991937ec",
    # Folie 7: Ersatz für das Moschee-Bild
    "nordzypern-kyrenia-hafen-baum.jpg": "1678798876508-3797d1124c1a",
}

for name, pid in PHOTOS.items():
    w = 2000 if name.startswith("nordzypern") else 1100
    url = f"https://images.unsplash.com/photo-{pid}?w={w}&q=85&fm=jpg"
    raw = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
    im = ImageOps.exif_transpose(Image.open(io.BytesIO(raw))).convert("RGB")
    if name.startswith("dach-"):
        im = ImageEnhance.Brightness(im).enhance(1.05)
    im.save(OUT / name, quality=84, optimize=True, progressive=True)
    print(name, im.size)
