@echo off

set "dir=CustomData"
set "subdirs=Archived Failed Uddata"

mkdir "%dir%"

for %%d in (%subdirs%) do (
  mkdir "%dir%\%%d"
)