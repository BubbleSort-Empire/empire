+++
# All people should have either a first name or 
# short display name. The rest are optional except Title.
# Title is used to generate a search result link in search.
title = "{{ replace .Name "-" " " }}"
firstName = ""
middleName = ""
lastName = ""
preferredDisplayNameShort = ""
image = ""
description = "{{ replace .Name "-" " " | title }} Description"

{{ partial "archetypes/socialsFrontMatter" . }}
+++