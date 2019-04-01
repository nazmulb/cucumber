#!/usr/bin/env bash

set -e

VERSION="0.11.1"

OS_NAME="linux64"
if [[ $(uname) == "Darwin" ]]; then
  OS_NAME="macos"
fi

mkdir -p build/install_libraries
cd build/install_libraries

echo ">>> Installing geckodriver for ${OS_NAME}"
echo ">>> Downloading..."
wget https://github.com/mozilla/geckodriver/releases/download/v${VERSION}/geckodriver-v${VERSION}-${OS_NAME}.tar.gz

echo ">>> Installing..."
tar -xvzf geckodriver-v${VERSION}-${OS_NAME}.tar.gz
chmod +x geckodriver

mkdir -p bin
mv geckodriver bin

echo ">>> Cleaning up..."
rm geckodriver-v${VERSION}-${OS_NAME}.tar.gz

echo ">>> Done"
