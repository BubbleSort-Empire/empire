+++
# These values should not be changed
type = "blog"
tags = ["announcement"]
# ----------------------------------

title = "{{ replace .Name "-" " " | title }}"
description = "{{ replace .Name "-" " " | title }} Description"
date = {{ .Date }}

# Announcements have an expiration date so that they disappear from
# the site front page and the Current Announcements section after the
# expiration date.
# Change the numbers after .AddDate to set an expiration date for this 
# announcement. The three numbers represent years, months, days respectively.
# Remove or comment out the expirydate line for no expiration. 
expirydate = {{ ((.Date | time).AddDate 0 0 0).Format "2006-01-02T15:04:05Z07:00" }}

# Comment out draft status or change value to false for publishing
draft = true
+++