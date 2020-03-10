---
title: Introduction
date: 2019-10-16T20:49:13.000-07:00
description: 
authors:
- Tim Keeler
tags: 
categories: 
toc: true
menu:
  sidenav:
    parent: Forestry
    weight: 2
draft: true

---
## How to use Forestry

### Adding New Folders to the Menu

#### Top Level Folder:

You'll need to manually create an entry in the `config.yaml` file stored on the GitHub repository. Look for the following section in `config.yaml` and add the entry like this:

    menu:
      sidenav:
      - name: Contribution Guide
        weight: 4
      - name: SecureONE
        weight: 2
      - name: Teams
        weight: 1

The `weight` field sets the display ordering from top to bottom on the menu.

You can drag/drop the order and change the name later in the Foresty Menus section.

#### Sub Folders:

After creating a folder, you'll need to manually add a an `_index.md` file inside of the folder on GitHub. After creating the file, add the following content, replacing `title` and `parent`:

```yaml
---
title: My Title
menu:
  sidenav:
    parent: Name of the parent folder
    weight: 3

---
```

The `weight` field sets the display ordering from top to bottom on the menu.

You can drag/drop the order and change the name later in the Foresty Menus section.