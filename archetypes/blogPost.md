+++
# These values should not be changed
type = "blog"
# ----------------------------------

title = "{{ replace .Name "-" " " | title }}"
description = "{{ replace .Name "-" " " | title }} Description"
date = {{ .Date }}

# Comment out draft status or change value to false for publishing
draft = true
+++