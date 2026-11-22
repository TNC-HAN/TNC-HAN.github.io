"""Slideshows Türkei/Nordzypern und Due Diligence (Startseite): 9 Unsplash-Fotos laden. Lizenz: Unsplash License."""
import io, shutil, sys, urllib.request
from pathlib import Path
from PIL import Image

PHOTOS = {
    'tr-istanbul-bosporus-nacht': '1696711551721-458511adcd86',
    'tr-bodrum-sonnenuntergang': '1684858504602-677ac40eadfd',
    'tr-antalya-kaleici-hafen': '1648325129746-abcc1b872380',
    'tr-kaputas-strand': '1593238739364-18cfde30e522',
    'tr-oeluedeniz-lagune': '1641630649458-13135455aaf7',
    'tr-istanbul-ortakoey': '1763965368246-5e89755e4455',
    'tr-bodrum-bucht': '1583062482795-d2bef78e9bc1',
    'dd-haus-lupe': '1769776400238-cd24612240ea',
    'dd-bauplan-bleistift': '1542621334-a254cf47733d',
    'dd-architekt-plaene': '1503387762-592deb58ef4e',
    'dd-baustelle-begehung': '1591588582259-e675bd2e6088',
    'dd-technische-pruefung': '1748027869634-fc2e545cfb0c',
    'dd-finanzanalyse': '1628348068343-c6a848d2b6dd',
    'dd-kennzahlen-dashboard': '1551288049-bebda4e38f71',
    'dd-dokumente-lupe': '1554696468-19f8c7a71ad5',
    'dd-vertrag-unterschrift': '1564846824194-346b7871b855',
    'dd-notar-siegel': '1614605844432-731c32334c49',
}
out = Path(__file__).resolve().parent.parent / 'src/assets/photos'
media = Path(sys.argv[1]) if len(sys.argv) > 1 else None
for name, pid in PHOTOS.items():
    url = f'https://images.unsplash.com/photo-{pid}?w=1400&q=82&fm=jpg'
    img = Image.open(io.BytesIO(urllib.request.urlopen(url, timeout=60).read())).convert('RGB')
    target = out / f'{name}.jpg'
    img.save(target, quality=84, optimize=True, progressive=True)
    if media:
        shutil.copy2(target, media / target.name)
    print(name, img.size)
