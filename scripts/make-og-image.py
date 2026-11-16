"""Erzeugt public/og-image.png (Vorschaubild für Social Media, 1200x630) und public/logo-nexxcon.png.

Aufruf (Python mit Pillow):  python scripts/make-og-image.py
Nur nötig, wenn sich Logo oder Claim ändern.
"""
import math
import pathlib
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
LOGO = ROOT / "src/assets/brand/nexxcon-logo.png"
W, H = 1200, 630
CLAIM = "Unternehmensberatung  ·  Off-Market-Immobilien  ·  KI-Automation"

bg = Image.new("RGB", (W, H), (4, 6, 10))
px = bg.load()
for y in range(H):
    for x in range(W):
        # vertikaler Verlauf + blaue Lichtfläche oben rechts + Anthrazit links
        t = y / H
        r, g, b = 4 + 7 * t, 6 + 11 * t, 10 + 16 * t
        d1 = math.hypot(x - 1000, y + 80) / 700
        glow = max(0.0, 1 - d1) ** 2
        r, g, b = r + 47 * glow * 0.6, g + 116 * glow * 0.6, b + 192 * glow * 0.6
        d2 = math.hypot(x + 50, y - 380) / 650
        g2 = max(0.0, 1 - d2) ** 2
        r, g, b = r + 30 * g2, g + 40 * g2, b + 55 * g2
        px[x, y] = (int(r), int(g), int(b))

draw = ImageDraw.Draw(bg, "RGBA")
# feines Raster
for x in range(0, W, 60):
    draw.line([(x, 0), (x, H)], fill=(139, 184, 234, 14))
for y in range(0, H, 60):
    draw.line([(0, y), (W, y)], fill=(139, 184, 234, 14))

logo = Image.open(LOGO).convert("RGBA")
lw = 760
logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
lx, ly = (W - lw) // 2, 150
bg.paste(logo, (lx, ly), logo)

# goldene Linie + Claim
gold = (201, 164, 92, 255)
draw.line([(W // 2 - 220, 440), (W // 2 + 220, 440)], fill=gold, width=2)
try:
    font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 30)
except OSError:
    font = ImageFont.load_default()
tw = draw.textlength(CLAIM, font=font)
draw.text(((W - tw) / 2, 468), CLAIM, font=font, fill=(230, 211, 168, 255))
small = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 22) if font != ImageFont.load_default() else font
sub = "NEXXCON-24  ·  D-A-CH  ·  Europa  ·  Türkei  ·  Nordzypern"
sw = draw.textlength(sub, font=small)
draw.text(((W - sw) / 2, 520), sub, font=small, fill=(163, 173, 189, 255))

bg.save(ROOT / "public/og-image.png", optimize=True)

# Logo für strukturierte Daten (Suchmaschinen) – auf dunklem Grund
pad = 40
canvas = Image.new("RGBA", (logo.width + 2 * pad, logo.height + 2 * pad), (4, 6, 10, 255))
canvas.alpha_composite(logo, (pad, pad))
canvas.convert("RGB").save(ROOT / "public/logo-nexxcon.png", optimize=True)
print("og-image.png und logo-nexxcon.png erzeugt")
