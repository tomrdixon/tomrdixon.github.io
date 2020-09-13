#!/bin/bash
echo "'contname': '$cont_name'" 
if [[ "$cont_name" == "vue-prod" ]]; then
  echo "view prod!" 
  npx serve -l 8080 
else 
  echo "vue-dev!" 
  yarn serve
fi
