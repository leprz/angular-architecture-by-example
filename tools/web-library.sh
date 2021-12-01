#!/bin/bash
shopt -s globstar

DIR=$(ls -d -- ../libs/web/**/ | percol)
ABS_DIR=${DIR#"../libs/web/"}
TRIMMED_ABS_DIR=${ABS_DIR%/}
arr=('web' $TRIMMED_ABS_DIR)
a=${arr[*]}
DIRECTORY=${a// //}
nx g @nrwl/angular:library --directory=$DIRECTORY
