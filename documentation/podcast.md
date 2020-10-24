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
