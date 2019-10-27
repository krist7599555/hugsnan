yarn build
rsync -r -v ./dist/* root@128.199.216.159:/var/www/hugsnan
printf "\e[32mBUILD SUCCESS\e[0m\n"
