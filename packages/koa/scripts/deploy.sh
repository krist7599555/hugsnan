yarn build
rsync -r -v ./dist/* root@128.199.216.159:/root/hugsnan
printf "\e[32mDEPLOY SUCCESS\e[0m\n"
