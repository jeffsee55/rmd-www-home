---
title: Social Content
date: 2019-10-17T15:39:41.000+00:00
description: 
authors: 
tags: 
categories: 
toc: true
menu:
  sidenav:
    parent: shortcodes
    weight: 12
draft: true

---
### Rich Content using Shortcodes
Using rich content shortcodes, you can embed useful external content directly into your page. Below are types of external content you can embed.

#### Instagram
If you’d like to embed a photo from Instagram, you only need the photo’s ID. You can discern an Instagram photo ID from the URL:

```
https://www.instagram.com/p/BzmCxLfn9XD/
```
Example Instagram:
```
{{</* instagram BzmCxLfn9XD */>}}
```
renders:
{{< instagram BzmCxLfn9XD >}}

You also have the option to hide the caption:
```
{{</* instagram BgC8OWkHd-M hidecaption */>}}
```
{{< instagram BgC8OWkHd-M hidecaption >}}

---
#### Twitter
You want to include a single tweet into your blog post? Everything you need is the URL of the tweet:
```
https://twitter.com/spf13/status/1158777832132231173
```
Example tweet:
```
{{</* tweet 1158777832132231173 */>}}
```
renders:
{{< tweet 1158777832132231173 >}}

---
#### YouTube
The YouTube shortcode embeds a responsive video player for YouTube videos. Only the ID of the video is required, e.g.:
```
https://www.youtube.com/watch?v=ZL4yYHdDSWs
```
Example YouTube:
```
{{</* youtube ZL4yYHdDSWs */>}}
```
renders:
{{< youtube ZL4yYHdDSWs >}}

Furthermore, you can automatically start playback of the embedded video by setting the `autoplay` parameter to `true`. You'll need to explicitly set the `id` parameter when adding `autoplay`:
```
{{</* youtube id="ZL4yYHdDSWs" autoplay="true" */>}}
```

---
#### Vimeo
Adding a video from Vimeo is equivalent to the YouTube shortcode above.
```
https://vimeo.com/channels/staffpicks/146022717
```
Example Vimeo:
```
{{</* vimeo 146022717 */>}}
```
renders:
{{< vimeo 146022717 >}}

---
#### GitHub Gist
GitHub gists are snippets of text or code that are useful for sharing with others. Let’s suppose we want to use the gist at the following url:
```
https://gist.github.com/spf13/7896402
```
We can embed the gist in our content via username and gist ID pulled from the URL:
```
{{</* gist spf13 7896402 */>}}
```
If the gist contains several files and you want to quote just one of them, you can pass the filename (quoted) as an optional third argument:
```
{{</* gist spf13 7896402 "img.html" */>}}
```
renders:
{{< gist spf13 7896402 "img.html" >}}