#!/usr/bin/env sh
# Gera favicon.ico (16/32/48), apple-touch-icon.png (180) e icon-512.png a partir de public/favicon.svg.
# Uso: sh design/favicon/render.sh   (requer ImageMagick)
set -e
ROOT=$(cd "$(dirname "$0")/../.." && pwd)
SVG="$ROOT/public/favicon.svg"
TMP=$(mktemp -d)
for s in 16 32 48 180 512; do
	magick -background none -density 1200 "$SVG" -resize "${s}x${s}" "$TMP/$s.png"
done
magick "$TMP/16.png" "$TMP/32.png" "$TMP/48.png" "$ROOT/public/favicon.ico"
cp "$TMP/180.png" "$ROOT/public/apple-touch-icon.png"
cp "$TMP/512.png" "$ROOT/public/icon-512.png"
rm -rf "$TMP"
echo "ok  favicon.ico, apple-touch-icon.png, icon-512.png"
