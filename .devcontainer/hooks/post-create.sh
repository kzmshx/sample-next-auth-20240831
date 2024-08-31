#!/bin/bash
# --------------------------------------------------
# Post-create script
#
# Expected to be run from the root of the repository in main container.
# --------------------------------------------------
set -e

pnpm install
