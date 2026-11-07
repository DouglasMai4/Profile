#!/usr/bin/env sh
# Gera linkedin-cover.png (1584x396) e linkedin-cover@2x.png a partir de cover.html.
# Uso: sh .private/linkedin-cover/render.sh
set -e
DIR=$(cd "$(dirname "$0")" && pwd)

BROWSER=""
for c in chromium chromium-browser google-chrome google-chrome-stable brave-browser microsoft-edge; do
	if command -v "$c" >/dev/null 2>&1; then BROWSER=$(command -v "$c"); break; fi
done
if [ -z "$BROWSER" ]; then
	BROWSER=$(ls -d "$HOME"/.cache/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell 2>/dev/null | tail -1)
fi
if [ -z "$BROWSER" ]; then
	echo "Nenhum Chrome/Chromium encontrado. Instale um ou rode: bunx playwright install chromium" >&2
	exit 1
fi

render() {
	"$BROWSER" --headless --disable-gpu --hide-scrollbars --allow-file-access-from-files \
		--virtual-time-budget=3000 --window-size=1584,396 --force-device-scale-factor="$1" \
		--screenshot="$DIR/$2" "file://$DIR/cover.html" >/dev/null 2>&1
	echo "ok  $DIR/$2"
}

render 1 linkedin-cover.png
render 2 linkedin-cover@2x.png
