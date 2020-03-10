---
title: Code Highlighting
date: 2019-10-17T03:49:13.000+00:00
description: 
authors:
- Tim Keeler
tags: 
categories: 
toc: true
menu:
  sidenav:
    parent: markdown
    weight: 14
draft: true

---
## Code
You can format blocks of code or commands in your content for greater visibility.

### Inline Code
Inline code/commands are enclosed using backticks \` around the particular text:

<pre>Run the command `echo Hello!` to say `Hello!`</pre>

The rendered output looks like this:

Run the command `echo Hello!` to say `Hello!`


### Code Blocks
Code blocks are enclosed using \`\`\` in the lines above and below the block:

    ```
    <html>
      <head>
        <title>Test</title>
      </head>
    <html>
    ```
The rendered output looks like this:
```
<html>
  <head>
    <title>Test</title>
  </head>
<html>
```
#### Code Highlighting

You can also include a specific language to highlight the code syntax:

    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

    ```python
    s = "Python syntax highlighting"
    print s
    ```

The rendered output looks like this:
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```