+++
# These values should not be changed
type = "episode"
# ----------------------------------

title = "{{ replace .Name "-" " " | title }}"
description = "{{ replace .Name "-" " " | title }} Description"
date = {{ .Date }}

# Season and Episode Numbers are optional.
seasonNumber = ""
episodeNumber = ""

# Comment out draft status or change value to false for publishing
draft = true

# GUID - Only fill this in if porting an existing podcast.
# GUID = ""

# hosts are optional, but a nice touch as they will be displayed on the site anywhere an episode is described.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = []

# guests are optional, but a nice touch as they will be displayed on the site anywhere an episode is described.
# they should be a list of base filenames of guests in your /content/guests section
# Ex: ["vader", "palpatine"]
guests = []

# Images only need to be specified if you want a different episode for the episode from the podcast image.
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/episodes/001.png" for an image located at static/images/weekly-wrap/episodes/001.png
image = ""

# Audio File Details
# If you haven't configured any audio url prefixes at any level,
# you should include the full url to your audio file in the audioFile parameter.
# If you are using url prefixes, only use the actual audio file name.
[audio]
	duration = "##:##"
	file = ""
	bytes = "#########" # No Commas

# eplicit tag is a cascaded tag set in config.toml and section index.md files. Override per episode or show if necessary
[cascade]
	explicit = "false"
+++