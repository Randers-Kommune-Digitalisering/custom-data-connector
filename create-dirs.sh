#!/bin/sh

dir="CustomData"
subdirs="Archived Failed Uddata"

mkdir "$dir"

for d in $subdirs
do
  mkdir "$dir/$d"
done