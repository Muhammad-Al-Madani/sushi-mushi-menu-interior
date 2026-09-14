#!/bin/bash
# Публикация изменений меню на GitHub Pages: сохранить в Git и отправить на GitHub.
# Сайт обновится сам через 1–2 минуты.

set -euo pipefail
trap 'echo ""; echo "❌ Что-то пошло не так. Скопируй текст выше и отправь его Claude."' ERR

cd "$(dirname "$0")"
REPO="$(basename "$PWD")"
OWNER="$(gh api user --jq .login)"
BRANCH="$(git branch --show-current)"
SITE="https://$(echo "$OWNER" | tr '[:upper:]' '[:lower:]').github.io/$REPO/"

echo "1/2 Сохраняю изменения в Git…"
git add -A
if git diff --cached --quiet; then
	echo "    новых изменений нет"
else
	git commit -q -m "Update Sushi Mushi menu" -m "Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
fi

echo "2/2 Отправляю на GitHub…"
if git remote get-url origin >/dev/null 2>&1; then
	git push -q origin "$BRANCH"
else
	gh repo create "$OWNER/$REPO" --public --source . --remote origin --push >/dev/null
	gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=$BRANCH" -f "source[path]=/" >/dev/null
fi

echo ""
echo "✅ Готово! Через 1–2 минуты сайт обновится: $SITE"
