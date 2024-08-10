+++
# These values should not be changed
type = "aggregatedPodcast"
# ----------------------------------

# Use these parameters to customize the "Sort By" button,
# and page header of the list of sorted shows that make up your aggregated podcast. 
# Ex: TV Room Podcast can have a button to "Sort By TV Shows" linking to a list of 
# child podcasts with a header displaying "TV Room Podcast Sorted By TV Show"
episodeFilterButtonText = "Sort By Topic"
filteredEpisodeText = "Sorted By Topic" 

{{ partial "archetypes/podcastBaseFrontMatter" . }}

{{ partial "archetypes/subscribeOptions" . }}

{{ partial "archetypes/feedParameters" . }}

{{ partial "archetypes/socialsFrontMatter" . }}
+++