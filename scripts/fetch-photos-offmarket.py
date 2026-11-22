"""Off-Market-Slideshow (Immobilien, Unterbereich 01): 9 Unsplash-Fotos laden. Lizenz: Unsplash License."""
import io, shutil, sys, urllib.request
from pathlib import Path
from PIL import Image

PHOTOS = {
    'offmarket-villa-pool-modern': '1580587771525-78b9dba3b914',
    'offmarket-anwesen-abend': '1505843513577-22bb7d21e455',
    'offmarket-architektenhaus-daemmerung': '1757524492552-d47a66a2b63e',
    'offmarket-penthouse-meerblick': '1613643043796-a370ee99ecbe',
    'offmarket-herrenhaus-klassisch': '1566908829550-e6551b00979b',
    'offmarket-altbau-fassade': '1501525776-246410718e63',
    'offmarket-buerogebaeude-glas': '1621831337128-35676ca30868',
    'offmarket-penthouse-nacht': '1565623833408-d77e39b88af6',
    'offmarket-villen-wasserlage': '1578439297699-eb414262c2de',
}
out = Path(__file__).resolve().parent.parent / 'src/assets/photos'
media = Path(sys.argv[1]) if len(sys.argv) > 1 else None
for name, pid in PHOTOS.items():
    url = f'https://images.unsplash.com/photo-{pid}?w=1800&q=82&fm=jpg'
    img = Image.open(io.BytesIO(urllib.request.urlopen(url, timeout=60).read())).convert('RGB')
    target = out / f'{name}.jpg'
    img.save(target, quality=84, optimize=True, progressive=True)
    if media:
        shutil.copy2(target, media / target.name)
    print(name, img.size)
