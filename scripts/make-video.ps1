# Erzeugt den Imagefilm public/media/nexxcon-imagefilm.mp4 (+ Vorschaubild) aus den Fotos.
# Sanfte Kamerafahrten (Ken-Burns) mit Überblendungen, unterlegt mit Business-Musik
# (scripts/media/imagefilm-musik.mp3 – „Inspiring Corporate“ von Paul Yudin, Pixabay Content License).
# Ohne Text (Texte stehen mehrsprachig auf der Website). Benötigt ffmpeg.
# Aufruf:  powershell -File scripts/make-video.ps1
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
# 20 Motive (alle Geschäftsbereiche), davon 3 mit dem Inhaber (KI-Bilder auf Basis eigener Fotos)
$photos = 'strategie-meeting', 'villa-pool-modern', 'consulting-uemit-workshop', 'frankfurt-skyline',
  'coaching-uemit-einzelgespraech', 'handschlag-nachfolge', 'offmarket-penthouse-meerblick', 'dach-ch-villa-alpen',
  'tr-istanbul-bosporus-nacht', 'coaching-unternehmer', 'nordzypern-kyrenia-hafen-berge', 'noyanlar-ocean-life',
  'dd-haus-lupe', 'consulting-uemit-seminar', 'datenanalyse-laptop', 'rechenzentrum',
  'tr-bodrum-sonnenuntergang', 'ki-roboter', 'offmarket-villa-pool-modern', 'mittelmeer-kueste'
# Gesamtlänge 72 s: Standzeit je Motiv aus Ziellänge berechnet
$target = 72; $fade = 1.0; $fps = 25; $w = 1280; $h = 720
$dur = ($target - $fade) / $photos.Count + $fade
$outDir = Join-Path $root 'public\media'
New-Item -ItemType Directory -Force $outDir | Out-Null

$inputs = @(); $filters = @()
for ($i = 0; $i -lt $photos.Count; $i++) {
  $inputs += @('-i', (Join-Path $root "src\assets\photos\$($photos[$i]).jpg"))
  $frames = [int]($dur * $fps)
  # abwechselnd hinein- und herauszoomen
  $zoom = if ($i % 2 -eq 0) { "min(zoom+0.0008,1.12)" } else { "if(eq(on,0),1.12,max(zoom-0.0008,1.0))" }
  $filters += "[$i]scale=2560:1440:force_original_aspect_ratio=increase,crop=2560:1440,zoompan=z='$zoom':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${w}x${h}:fps=$fps,format=yuv420p,setsar=1[v$i]"
}
$prev = 'v0'; $offset = $dur - $fade
for ($i = 1; $i -lt $photos.Count; $i++) {
  $out = "x$i"
  $filters += "[$prev][v$i]xfade=transition=fade:duration=${fade}:offset=$([math]::Round($offset,2))[$out]"
  $prev = $out; $offset += $dur - $fade
}
$total = [math]::Round($photos.Count * ($dur - $fade) + $fade, 2)
# Musik: auf Filmlänge kürzen, sanft ein- und ausblenden
$music = Join-Path $root 'scripts\media\imagefilm-musik.mp3'
$a = $photos.Count
$filters += "[$a]atrim=0:$total,asetpts=PTS-STARTPTS,afade=t=in:st=0:d=1.5,afade=t=out:st=$($total - 3.5):d=3.5,volume=0.9[aud]"
$filter = ($filters -join ';')
$mp4 = Join-Path $outDir 'nexxcon-imagefilm.mp4'
& ffmpeg -y -hide_banner -loglevel error @inputs -i $music -filter_complex $filter -map "[$prev]" -map '[aud]' -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -c:a aac -b:a 128k -shortest -movflags +faststart $mp4
& ffmpeg -y -hide_banner -loglevel error -i (Join-Path $root 'src\assets\photos\strategie-meeting.jpg') -vf "scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h}" -q:v 4 (Join-Path $outDir 'nexxcon-imagefilm-poster.jpg')
Get-Item $mp4 | Select-Object Name, @{ n = 'MB'; e = { [math]::Round($_.Length / 1MB, 2) } }, @{ n = 'Sekunden'; e = { $total } }
