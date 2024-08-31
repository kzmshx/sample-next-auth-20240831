# --------------------------------------------------
# Post-create script
#
# Expected to be run from the root of the repository in main container.
# --------------------------------------------------
set -e

corepack pnpm install
