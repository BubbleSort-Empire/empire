+++
# These values should not be changed
type = "podcast"
# ----------------------------------

title = "Treasure Island"
description = "Join the Knights of Ren as they unwind fram a hard day of Kilo's whining to read the famed Robert Louis Stevenson classic."

# hosts are optional, but a nice touch as they will be displayed on the site anywhere a show is described or listed.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = []

# Images only need to be specified if you want a different episode for the episode from the podcast image.
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art.png" for an image located at static/images/weekly-wrap/show-art.png
imagePathPrefix = "shows/book-club/treasure-island/"
image = "show-art.svg"

# Feed images should be of size 3000px X 3000px
# You can leave this parameter blank if your regular image is already the appropriate size. 
# The theme will default back to that one when feedImage is blank.
# Place images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art-large.png" for an image located at static/images/weekly-wrap/show-art-large.png
feedImage = ""

# Audio prefixes are used to build audio urls for episodes. This allows episode front matter 
# to only have a need to specify the actual filename of the audio and also allows
# for easily prepending stats tracking URLS like BluBrry to audio files.
# URL prefixes at this level are optional. If omitted here the default prefix
# from the site configuration will be used.
audioURLPrefix = ""


# Subscription Options
# Uncomment the ones that you need and fill in the required Feed ID.
[listeningOptions]
#	Podcasts - EX: for this iTunes link https://podcasts.apple.com/podcast/id1448327383 the ID would be 1448327383.
#	This feed ID also provides subscription options for Overcast and Castro.
	itunesfeedid = "1448205156"

#	Google - EX: for this Google link https://podcasts.google.com/?feed=aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
#	The ID would be aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
#	googlefeedid = ""

#	Spotify - EX: for this Spotify link https://open.spotify.com/show/52Xo86cea1ZUg6BGv4azGN
#	The ID would be 52Xo86cea1ZUg6BGv4azGN
#	spotifyfeedid = ""

#	Breaker - EX: for this Breaker link https://www.breaker.audio/rabbit-hole-2
#	The ID would be rabbit-hole-2
#	breakerfeedid = ""

#	Casts - # EX: for this Pocket Casts link https://pca.st/7ilyfbc6
#	The ID would be 7ilyfbc6
#	pocketcastsfeedid = ""



+++