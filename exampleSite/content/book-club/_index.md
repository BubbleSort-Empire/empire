+++
# These values should not be changed
type = "aggregatedPodcast"
# ----------------------------------

# Use these parameters to customize the "Sort By" button,
# and page header of the list of sorted shows that make up your aggregated podcast. 
# Ex: TV Room Podcast can have a button to "Sort By TV Shows" linking to a list of 
# child podcasts with a header displaying "TV Room Podcast Sorted By TV Show"
episodeFilterButtonText = "Browse by Book"
filteredEpisodeText = "Sorted By Book"

title = "The Empire Book Club"
description = "Running the Empire is hard work. Sometimes you just need to unwind with a good book."

# hosts are optional, but a nice touch as they will be displayed on the site anywhere a show is described or listed.
# they should be a list of base filenames of hosts in your /content/hosts section
# Ex: ["vader", "palpatine"]
hosts = []

# Place show artwork images into the static/images directory of your site's files. You may nest them in sub-directories if you wish.
# Define the parameter as filename and path for anything after static/images/
# Ex: image = "weekly-wrap/show-art.png" for an image located at static/images/weekly-wrap/show-art.png
imagePathPrefix = "shows/book-club/"
image = "show-art.svg"

# Feed images should be of size 3000px X 3000px
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
	itunesfeedid = "1430709351"

#	Google - EX: for this Google link https://podcasts.google.com/?feed=aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
#	The ID would be aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA==
	googlefeedid = "aHR0cHM6Ly90aGVsaW5lcnByb2plY3QuY29tL2luZGV4LnhtbA=="

#	Spotify - EX: for this Spotify link https://open.spotify.com/show/52Xo86cea1ZUg6BGv4azGN
#	The ID would be 52Xo86cea1ZUg6BGv4azGN
	spotifyfeedid = "52Xo86cea1ZUg6BGv4azGN"

#	Breaker - EX: for this Breaker link https://www.breaker.audio/rabbit-hole-2
#	The ID would be rabbit-hole-2
	breakerfeedid = "rabbit-hole-2"

#	Casts - # EX: for this Pocket Casts link https://pca.st/7ilyfbc6
#	The ID would be 7ilyfbc6
	pocketcastsfeedid = "7ilyfbc6"



[connections]
	Slack = "https://bookclub.slack.com"
	Twitter = "https://twitter.com/bookclub"
	Email = "bookclub@bookclub.com"
+++

