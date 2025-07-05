#!/usr/bin/env bash
set -euo pipefail

# 1. Vérifier qu'on est bien dans un dépôt Git
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  echo "Erreur : ce script doit être lancé à la racine d'un dépôt Git."
  exit 1
fi

# 2. Demander l'URL du nouveau repo
read -p "URL du nouveau repository (ex: https://github.com/user/repo.git) : " NEW_REMOTE

# 3. Définir le nom et le chemin du nouveau dossier
REPO_NAME=$(basename -s .git "$NEW_REMOTE")
PARENT_DIR=$(dirname "$PWD")
NEW_DIR="${PARENT_DIR}/${REPO_NAME}"

if [ -e "$NEW_DIR" ]; then
  echo "Erreur : le dossier cible '$NEW_DIR' existe déjà."
  exit 1
fi

# 4. Cloner le dépôt courant dans le nouveau dossier
echo "➡️  Clonage de $(pwd) → $NEW_DIR"
git clone "$(pwd)" "$NEW_DIR"

# 5. Configurer le remote et pousser
cd "$NEW_DIR"
git remote remove origin    # on supprime l'ancien remote
git remote add origin "$NEW_REMOTE"
echo "✅  Remote 'origin' pointé vers : $NEW_REMOTE"

echo "⏫  Poussée de toutes les branches…"
git push --all origin

echo "⏫  Poussée de tous les tags…"
git push --tags origin

echo
echo "🎉  Terminé ! Nouveau dépôt prêt dans : $NEW_DIR"
