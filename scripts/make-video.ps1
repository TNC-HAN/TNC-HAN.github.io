# Erzeugt den Imagefilm public/media/nexxcon-imagefilm.mp4 (+ Vorschaubild) aus den Fotos.
# Sanfte Kamerafahrten (Ken-Burns) mit Überblendungen, ohne Ton und ohne Text
# (Texte stehen mehrsprachig auf der Website). Benötigt ffmpeg.
# Aufruf:  powershell -File scripts/make-video.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$photos = 'villa-pool-modern', 'frankfurt-skyline', 'strategie-meeting', 'istanbul-bosporus', 'zypern-kueste', 'vertrag-unterschrift', 'rechenzentrum', 'mittelmeer-kueste'
$dur = 4.0; $fade = 1.0; $fps = 25; $w = 1280; $h = 720
$outDir = Join-Path $root 'public\media'
New-Item -ItemType Directory -Force $outDir | Out-Null

$inputs = @(); $filters = @()
for ($i = 0; $i -lt $photos.Count; $i++) {
  # Einzelbild als Eingabe – zoompan erzeugt daraus $frames Bilder (= $dur Sekunden)
  $inputs += @('-i', (Join-Path $root "src\assets\photos\$($photos[$i]).jpg"))
  $frames = [int]($dur * $fps)
  # abwechselnd hinein- und herauszoomen
  $zoom = if ($i % 2 -eq 0) { "min(zoom+0.0009,1.12)" } else { "if(eq(on,0),1.12,max(zoom-0.0009,1.0))" }
  $filters += "[$i]scale=2560:-2,crop=2560:1440,zoompan=z='$zoom':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${w}x${h}:fps=$fps,format=yuv420p,setsar=1[v$i]"
}
$prev = 'v0'; $offset = $dur - $fade
for ($i = 1; $i -lt $photos.Count; $i++) {
  $out = "x$i"
  $filters += "[$prev][v$i]xfade=transition=fade:duration=${fade}:offset=$([math]::Round($offset,2))[$out]"
  $prev = $out; $offset += $dur - $fade
}
$filter = ($filters -join ';')
$mp4 = Join-Path $outDir 'nexxcon-imagefilm.mp4'
& ffmpeg -y -hide_banner -loglevel error @inputs -filter_complex $filter -map "[$prev]" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart -an $mp4
& ffmpeg -y -hide_banner -loglevel error -i (Join-Path $root 'src\assets\photos\villa-pool-modern.jpg') -vf "scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}" -q:v 4 (Join-Path $outDir 'nexxcon-imagefilm-poster.jpg')
Get-Item $mp4 | Select-Object Name, @{ n = 'MB'; e = { [math]::Round($_.Length / 1MB, 2) } }
