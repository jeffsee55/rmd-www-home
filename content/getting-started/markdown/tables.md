---
title: Tables
date: 2019-10-16T20:49:13-07:00
draft: true
description:
authors:
    - Tim Keeler
tags:
categories:
toc: true
---

## Tables
To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.

<pre>
Column 1 | Column 2 | Column 3 | Column 4
---------|----------|----------|----------|
| Line 1 | Data 1 | Data 2 | Data 3 |
| Line 2 | Data 1 | Data 2 | Data 3 |
| Line 3 | Data 1 | Data 2 | Data 3 |
</pre>

The rendered output looks like this:

Column 1 | Column 2 | Column 3 | Column 4
---------|----------|----------|----------|
| Line 1 | Data 1 | Data 2 | Data 3 |
| Line 2 | Data 1 | Data 2 | Data 3 |
| Line 3 | Data 1 | Data 2 | Data 3 |

### Alignment
You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

<pre>
Left  | Center | Right | 4th Column |
:-----|:------:|------:|------------|
| Line 1 | Data 1 | Data 2 | Data 3 | Data 4 |
| Line 2 | Data 1 | Data 2 | Data 3 | Data 4 |
| Line 3 | Data 1 | Data 2 | Data 3 | Data 4 |
</pre>

The rendered output looks like this:

Left  | Center | Right | 4th Column |
:-----|:------:|------:|------------|
| Line 1 | Data 1 | Data 2 | Data 3 | Data 4 |
| Line 2 | Data 1 | Data 2 | Data 3 | Data 4 |
| Line 3 | Data 1 | Data 2 | Data 3 | Data 4 |