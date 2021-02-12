+++
# These values should not be changed
type = "podcast"
# ----------------------------------

title = "A Tale of Two Cities"
description = "Join the Deathstar crew as they read the famed Dickens Classic."

# hosts are optional, but a nice touch as they will be displayed on the site anywhere a show is described or listed.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = []

# Place show artwork images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art.png" for an image located at static/images/weekly-wrap/show-art.png
image = ""

# Feed images should be of size 3000px X 3000px
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art-large.png" for an image located at static/images/weekly-wrap/show-art-large.png
feedImage = ""

# Numeric iTunes Feed ID 
# EX: for this iTunes link https://podcasts.apple.com/podcast/id1448327383
# The ID would be 1448327383
iTunesFeedID = "1483394883"

# Audio prefixes are used to build audio urls for episodes. This allows episode front matter 
# to only have a need to specify the actual filename of the audio and also allows
# for easily prepending stats tracking URLS like BluBrry to audio files.
# URL prefixes at this level are optional. If omitted here the default prefix
# from the site configuration will be used.
audioURLPrefix = ""



[connections]
	Twitter = "https://twitter.com/twocities"
+++