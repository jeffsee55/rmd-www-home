---
title: Cheatsheet
date: 2019-10-16T20:49:13-07:00
draft: true
description:
authors:
tags:
categories:
toc: true
menu:
  sidenav:
    parent: markdown
    weight: 1
---

## Overview
Markdown is designed to be a simple syntax to display common types of information, without needing to know HTML or web design. This site automatically renders Markdown formatted files into rich HTML content displayed here on this website.

## Headings
To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three, use three number signs (e.g., ### My Header).

| Markdown                          | Rendered Output          |
| --------------------------------- | ------------------------ |
| <pre># Heading Level 1</pre>      | <h1>Heading Level 1</h1> |
| <pre>## Heading Level 2</pre>     | <h2>Heading Level 2</h2> |
| <pre>### Heading Level 3</pre>    | <h3>Heading Level 3</h3> |
| <pre>#### Heading Level 4</pre>   | <h4>Heading Level 4</h4> |
| <pre>##### Heading Level 5</pre>  | <h5>Heading Level 5</h5> |
| <pre>###### Heading Level 6</pre> | <h6>Heading Level 6</h6> |

## Paragraphs
To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.

| Markdown                                                                                                       | Rendered Output                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <pre>I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on.</pre> | <p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p> |

## Line Breaks
To create a line break, end a line with two or more spaces, and then type return.

| Markdown                                                           | Rendered Output                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| <pre>This is the first line.<br>And this is the second line.</pre> | This is the first line.<br>And this is the second line. |

## Emphasis
You can add emphasis by making text bold or italic.

### Bold
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

| Markdown                                  | Rendered Output            |
| ----------------------------------------- | -------------------------- |
| <pre>I just love \*\*bold text\*\*.</pre> | I just love **bold text**. |
| <pre>I just love \_\_bold text\_\_.</pre> | I just love __bold text__. |
| <pre>Love\*\*is\*\*bold</pre>             | Love**is**bold.            |

### Italic
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

| Markdown                                          | Rendered Output                      |
| ------------------------------------------------- | ------------------------------------ |
| <pre>Italicized text is the \*cat's meow\*.</pre> | Italicized text is the *cat's meow*. |
| <pre>Italicized text is the \_cat's meow\_.</pre> | Italicized text is the _cat's meow_. |
| <pre>A\*cat\*meow</pre>                           | A<em>cat</em>meow                    |

### Bold and Italic
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase.

| Markdown                                              | Rendered Output                      |
| ----------------------------------------------------- | ------------------------------------ |
| <pre>This text is \*\*\*really important\*\*\*.</pre> | This text is ***really important***. |
| <pre>This text is \_\_\_really important\_\_\_.</pre> | This text is ___really important___. |
| <pre>This text is \_\_*really important\*\_\_.</pre>  | This text is __*really important*__. |
| <pre>This text is \*\*_really important\_\*\*.</pre>  | This text is **_really important_**. |

## Blockquotes
To create a blockquote, add a > in front of a paragraph.
```
> Dorothy followed her through many of the beautiful rooms in her castle.
```
The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

### Blockquotes with Multiple Paragraphs
Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Nested Blockquotes
Blockquotes can be nested. Add a `>>` in front of the paragraph you want to nest.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with Other Elements
Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you'll need to experiment to see which ones work.

```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

The rendered output looks like this:

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

## Lists
You can organize items into ordered and unordered lists.

### Ordered Lists
To create an ordered list, add line items with numbers followed by periods.

| Markdown                                                                      | Rendered Output                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <pre>1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item</pre> | 1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item |

### Unordered Lists
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

| Markdown                                                                  | Rendered Output                                                                |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <pre>- First item<br>- Second item<br>- Third item<br>- Fourth item</pre> | <li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li> |

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

## Horizontal Rules
To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

```
***

---

_________________
```

The rendered output of all three looks identical:

---

## Links
To create a link, enclose the link text in brackets (e.g., [Remediant SecureONE]) and then follow it immediately with the URL in parentheses (e.g., (https://www.remediant.com)).

<pre>My favorite security solution is [Remediant SecureONE](https://www.remediant.com).</pre>

The rendered output looks like this:

My favorite security solution is [Remediant SecureONE](https://www.remediant.com).

### URLs and Email Addresses
To quickly turn a URL or email address into a link, enclose it in angle brackets.

<pre>&lt;https://www.remediant.com&gt;</pre>
<pre>&lt;fake@example.com&gt;</pre>

The rendered output looks like this:

<https://www.remediant.com>

<fake@example.com>

## Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

<pre>![Remediant Logo!](https://res.cloudinary.com/remediant/image/upload/v1544975038/header-logo.png "This is our Remediant Logo")</pre>

The rendered output looks like this:

![Remediant Logo!](https://res.cloudinary.com/remediant/image/upload/v1544975038/header-logo.png "This is our Remediant Logo")

## Escaping Characters
To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.

<pre>\* Without the backslash, this would be a bullet in an unordered list.</pre>

The rendered output looks like this:

\* Without the backslash, this would be a bullet in an unordered list.
