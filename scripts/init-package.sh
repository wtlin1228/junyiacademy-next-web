#!/bin/sh
#
# init-package initialize a package

if [ -z "$1" ]; then
    echo "Please provide the package name"
    exit 1
fi

if [ -d "src/packages/$1" ]; then
    echo "The $1 package exists already"
    exit 1
fi

echo "\033[32m[init-package] start\033[0m"
echo "\033[32m[init-package] creating folders ...\033[0m"

# create folders
mkdir -p src/packages/$1
mkdir src/packages/$1/__tests__
mkdir src/packages/$1/__mocks__
mkdir src/packages/$1/assets
mkdir src/packages/$1/components
mkdir src/packages/$1/containers
mkdir src/packages/$1/hoc
mkdir src/packages/$1/redux
mkdir src/packages/$1/utils

echo "\033[32m[init-package] creating files ...\033[0m"

# create files
touch src/packages/$1/index.js
touch src/packages/$1/components/index.js
touch src/packages/$1/containers/index.js
touch src/packages/$1/redux/epics.js
touch src/packages/$1/redux/slice.js
touch src/packages/$1/redux/index.js

echo "\033[32m[init-package] successfully\033[0m"