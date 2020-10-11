# Archetypes

There are several Archetypes provided to help you add new content for your site.

### Podcast
A podcast represents a single show. The theme provides list pages and single episode pages as well as rss feeds for your show.

Use this archetype to create a new podcast for your network. It generates a directory in content and index.md file for your new podcast. The archetype will also fill in the podcast title and description with the file name using Title Case and stripping hyphens.

command:`hugo new --kind podcast new-podcast-name`
output files: 
```
content/new-podcast-name/_index.md
```

index file content:
```
+++
title = "New Podcast Name"
description = "New Podcast Name Description"

...

+++
```

### Aggregated Podcast
An aggregated podcast represents a show that is composed of smaller shows. Example uses for aggregated shows would be things like a book club or tv show. In these examples, the books covered in the Book Club or the individual tv shows covered in the TV Show would each be a nested Podcast type directory. The theme provides master list pages and rss feeds of all the sub show episodes for the aggregate podcast combined, but also creates a list page of subshows, episode list pages and rss feed for each subshow and its episodes as well. This allows for the viewer/listener of your website borwse or subscribe to a master list of all episodes in the aggregated podcast or to sort and subscribe to your aggregated podcast by topic via whatever the sub shows are.

Use this archetype to create a new aggregated podcast for your network. It generates a directory in content and index.md file for your new aggregated podcast. The archetype will also fill in the podcast title and description with the file name using Title Case and stripping hyphens.

command:`hugo new --kind podcast aggregated-podcast-name`

output files: 
```
content/aggregated-podcast-name/_index.md
```

index file content:
```
+++
title = "Aggregated Podcast Name"
description = "Aggregated Podcast Name Description"

...

+++
```

To add a new subshow to the example above use this command:

`hugo new --kind podcast aggregated-podcast-name/subshow-name`

output files: 
```
content/aggregated-podcast-name/subshow-name/_index.md
```

index file content:
```
+++
title = "Subshow Name"
description = "Subshow Name Description"

...

+++
```

### Episode
Use this archetype to create a new episode posts. It generates an episode md post in the specified directory. The archetype will also fill in the post title and description with the file name using Title Case and stripping hyphens.

command:`hugo new --kind episode podcast-directory/episode-name.md`

output file: `content/podcast-directory/episode-name.md`

episode file content:
```
+++
title = "Episode Name"
description = "Episode Name Description"
date: 2020-10-11T10:45:05-04:00

...

+++
```