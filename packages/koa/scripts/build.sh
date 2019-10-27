if [ -d "./dist" ]; then rm -Rf ./dist; fi
mkdir ./dist
cp -r ./src ./dist
cp package.json ./dist
cp ecosystem.config.js ./dist
printf "\e[32mBUILD SUCCESS\e[0m\n"
