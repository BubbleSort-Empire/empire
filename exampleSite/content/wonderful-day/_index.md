+++
# These values should not be changed
type = "podcast"
# ----------------------------------

title = "Wonderful Day"
description = "Wonderful Day is a motivational podcast with your host, Darth Maul. Darth teaches you to love yourself and to never question the value of you. You CAN defeat your opponents, be they weird green enforcers who say things like 'Maclunky' or highly trained jedi masters."

# hosts are optional, but a nice touch as they will be displayed on the site anywhere a show is described or listed.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = ["maul"]

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

# Numeric iTunes Feed ID 
# EX: for this iTunes link https://podcasts.apple.com/podcast/id1448327383
# The ID would be 1448327383
iTunesFeedID = "1448327383"

# Pocket Casts Feed ID 
# EX: for this Pocket Casts link https://pca.st/7ilyfbc6
# The ID would be 7ilyfbc6
pocketCastsFeedID = ""

# Spotify Feed ID 
# EX: for this Spotify link https://open.spotify.com/show/52Xo86cea1ZUg6BGv4azGN
# The ID would be 52Xo86cea1ZUg6BGv4azGN
spotifyFeedID = ""

# Google Feed ID 
# EX: for this Google link https://podcasts.google.com/?feed=aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
# The ID would be aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
googleFeedID = ""

# Breaker Feed ID 
# EX: for this Breaker link https://www.breaker.audio/rabbit-hole-2
# The ID would be rabbit-hole-2
breakerFeedID = ""

# Audio prefixes are used to build audio urls for episodes. This allows episode front matter 
# to only have a need to specify the actual filename of the audio and also allows
# for easily prepending stats tracking URLS like BluBrry to audio files.
# URL prefixes at this level are optional. If omitted here the default prefix
# from the site configuration will be used.
audioURLPrefix = ""

# Social connections
# Uncomment the ones that you need and put in the URL of your social media account
[connections]
#	Discord  = ""
#	Email  = ""
#	Facebook  = ""
#	GitHub  = ""
#	Instagram  = ""
	LinkedIn  = "https://linkedin.com/wonderfulday"
#	Mastodon  = ""
#	Micro.blog  = ""
#	Pinterest  = ""
#	Quora  = ""
	Reddit  = "https://reddit.com/r/wonderfulday"
#	Slack  = ""
#	Snapchat  = ""
#	Telegram  = ""
	TikTok = "https://tiktok.com/wonderfuldaypodcast"
#	Twitch  = ""
	Twitter  = "https://twitter.com/wonderfuldaypodcast"
#	Vimeo  = ""
#	WhatsApp  = ""
#	YouTube  = ""

+++