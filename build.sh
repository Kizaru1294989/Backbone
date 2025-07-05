#!/usr/bin/env bash
set -euo pipefail

# 1) on est à la racine de backbone/
# 2) si pas de .git, on ré-initialise et on ajoute le remote original
if [ ! -d .git ]; then
  echo "⚠️  Pas de dépôt Git détecté dans $(pwd)."
  read -p "Entrez l'URL du dépôt original pour l'initialiser (ex: git@github.com:Kizaru1294989/Backbone.git) : " ORIG_REMOTE
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin "$ORIG_REMOTE"
  echo "✅  Dépôt initialisé, remote 'origin' → $ORIG_REMOTE"
else
  echo "✅  .git existe, on conserve le dépôt en l'état."
fi

# 3) on demande l'URL du nouveau repo
read -p "Entrez l'URL du NOUVEAU repository (ex: git@github.com:User/NewRepo.git) : " NEW_REMOTE

# 4) on prépare le clone dans ../<nom-du-nouveau-repo> 
REPO_NAME=$(basename -s .git "$NEW_REMOTE")
PARENT_DIR=$(dirname "$PWD")
NEW_DIR="${PARENT_DIR}/${REPO_NAME}"

if [ -e "$NEW_DIR" ]; then
  echo "❌  Le dossier cible '$NEW_DIR' existe déjà. Abandon."
  exit 1
fi

# 5) clonage et push
echo "➡️  Clonage de $(pwd) vers $NEW_DIR"
git clone "$(pwd)" "$NEW_DIR"

cd "$NEW_DIR"
git remote remove origin
git remote add origin "$NEW_REMOTE"
echo "✅  Dans $NEW_DIR, remote 'origin' pointé vers $NEW_REMOTE"

echo "⏫  Poussée de TOUTES les branches…"
git push --all origin

echo "⏫  Poussée de TOUS les tags…"
git push --tags origin

echo
echo "🎉  Terminé !"
echo " • Votre dossier backbone/ original contient toujours son .git et son remote origin."
echo " • Le clone dans $NEW_DIR est configuré pour pousser vers $NEW_REMOTE."
