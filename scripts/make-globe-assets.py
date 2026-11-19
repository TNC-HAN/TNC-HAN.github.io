"""Erzeugt die Bilder für den Netzwerk-Globus (Seite „Über uns“).

1. Luftbilder Laatzen aus dem amtlichen Open-Data-Dienst des LGLN (DOP20, WMS):
   public/globe/laatzen-nah.jpg (ca. 1,2 km) und laatzen-weit.jpg (ca. 12 km)
   Quelle: LGLN, Digitale Orthophotos Niedersachsen – Lizenzhinweis siehe PHOTOS.md.
2. Erdtextur NASA Blue Marble Next Generation (gemeinfrei, NASA Visible Earth):
   public/globe/earth-blue-marble.jpg (4096 × 2048)

Aufruf:  python scripts/make-globe-assets.py
"""
import io
import math
import pathlib
import urllib.parse
import urllib.request

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "globe"
OUT.mkdir(parents=True, exist_ok=True)
UA = {"User-Agent": "nx24-website-builder/1.0"}

# Laatzen (Zentrale) – Stadtmitte
LAT, LON = 52.3125, 9.8040


def wms(half_km: float, px: int, name: str) -> None:
    dlat = half_km / 111.32
    dlon = half_km / (111.32 * math.cos(math.radians(LAT)))
    params = {
        "SERVICE": "WMS", "VERSION": "1.3.0", "REQUEST": "GetMap", "LAYERS": "ni_dop20", "STYLES": "",
        "CRS": "EPSG:4326", "BBOX": f"{LAT - dlat},{LON - dlon},{LAT + dlat},{LON + dlon}",
        "WIDTH": px, "HEIGHT": px, "FORMAT": "image/jpeg",
    }
    url = "https://opendata.lgln.niedersachsen.de/doorman/noauth/dop_wms?" + urllib.parse.urlencode(params)
    raw = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120).read()
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    im.save(OUT / name, quality=80, optimize=True, progressive=True)
    print(name, im.size, round(len(raw) / 1024), "KB")


wms(0.6, 1600, "laatzen-nah.jpg")
wms(6.0, 1600, "laatzen-weit.jpg")

BLUE_MARBLE = (
    "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.jpg"
)
raw = urllib.request.urlopen(urllib.request.Request(BLUE_MARBLE, headers=UA), timeout=300).read()
earth = Image.open(io.BytesIO(raw)).convert("RGB").resize((4096, 2048), Image.LANCZOS)
earth.save(OUT / "earth-blue-marble.jpg", quality=82, optimize=True, progressive=True)
print("earth-blue-marble.jpg", earth.size)
