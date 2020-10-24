### Episode
The episode type represents single episodes of your podcasts.

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