#!/bin/sh

echo 'running grunt, git add, git commit, git push and heroku open'

grunt -f 
git add .
git commit -a
git push origin master
git push heroku master
heroku open