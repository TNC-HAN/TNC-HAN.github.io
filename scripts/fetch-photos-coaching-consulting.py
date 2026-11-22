"""Coaching & Consulting (Erklärbereich): 9 Unsplash-Fotos laden. Lizenz: Unsplash License."""
import io, shutil, sys, urllib.request
from pathlib import Path
from PIL import Image

PHOTOS = {
    'coaching-fuehrungskraft': '1758518730162-09a142505bfd',
    'coaching-reflexion': '1518644730709-0835105d9daa',
    'coaching-achtsamkeit': '1758874384683-0accd9fb26ee',
    'coaching-kompass': '1505778276668-26b3ff7af103',
    'consulting-teammeeting': '1542744173-8e7e53415bb0',
    'consulting-teamarbeit': '1758691736872-61a1f75fe2d5',
    'consulting-webinar': '1588196749597-9ff075ee6b5b',
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
