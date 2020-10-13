+++
title = "{{ replace .Name "-" " " | title }}"
description = "{{ replace .Name "-" " " | title }} Description"

# hosts are optional, but a nice touch as they will be displayed on the site anywhere a show is described or listed.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = []

# Images only need to be specified if you want a different episode for the episode from the podcast image.
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art.png" for an image located at static/images/weekly-wrap/show-art.png
image = ""

# Feed images should be of size 3000px X 3000px
# You can leave this parameter blank if your regular image is already the appropriate size. 
# The theme will default back to that one when feedImage is blank.
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art-large.png" for an image located at static/images/weekly-wrap/show-art-large.png
feedImage = ""

# These values should not be changed
type = "aggregatedPodcast"
+++