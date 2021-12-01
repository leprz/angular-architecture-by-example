#!/bin/bash

DIR=$(ls -d -- ../libs/**/ | percol)
ABS_DIR=${DIR#"../libs/"}

nx g @nrwl/angular:library --prefix=todo --directory=web/$ABS_DIR --dryRun
