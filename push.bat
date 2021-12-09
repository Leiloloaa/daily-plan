@echo off
echo "-------Begin-------"

set  /p  msg=Please input msg:

git add .
git commit -m %msg%
git push

echo "--------Success End--------"