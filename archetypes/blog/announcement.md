+++
# These values should not be changed
type = "blog"
tags = ["announcement"]
# ----------------------------------

title = "{{ replace .Name "-" " " | title }}"
description = "{{ replace .Name "-" " " | title }} Description"
date = {{ .Date }}

# Announcements have an exipiration date so that they disappear from
# the site front page and the Current Announcements section after the
# expiration date.
# Change the numbers after .AddDate to set an expiration date for
# this announcement. Set 0 0 0 for no expiration. The three numbers
# represent years, months, days respectively.
dateExpire = {{ .Date.AddDate 0 0 14 }}

# Comment out draft status or change value to false for publishing
draft = true
+++