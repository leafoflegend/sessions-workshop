#!/bin/bash
cd "${0%/*}"

createdb sessions-workshop > /dev/null 2>&1
psql -lqt | cut -d \| -f 1 | grep -qw sessions-workshop

DB_CREATE_RESULT=$?

if [ $DB_CREATE_RESULT == 0 ]; then
  echo 'Successfully created database for workshop, or it already exists.'
else
  echo 'Unable to create database for workshop. Please create a db named "sessions-workshop".'
  exit 1
fi

exit 0
