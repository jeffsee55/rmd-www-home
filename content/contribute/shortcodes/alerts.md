---
title: Alerts
date: 2019-10-16T20:57:50.000-07:00
description: 
authors: 
tags: 
categories: 
toc: true
menu:
  sidenav:
    parent: Using Shortcodes
    weight: 4
draft: true

---
# Alerts

Alerts are a great way to add callout messages to your content.

Code: 
```
{{</* alert type="warning" title="Warning!" */>}}
    <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#warning" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
{{</* /alert */>}}
```
renders as:

{{< alert type="warning" title="Warning!">}}
    <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#warning" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
{{< /alert >}}

Insert your main content in the body of the shortcode. HTML content is allowed.

The follow options are optional:

- `type` - See examples below for options
- `title` - The title of the alert

Example:
```
{{</* alert */>}}
    <strong>Heads up!</strong> This <a href="#info" class="alert-link">alert needs your attention</a>, but it's not super important.
{{</* /alert */>}}
```
renders as:

{{< alert >}}
    <strong>Heads up!</strong> This <a href="#info" class="alert-link">alert needs your attention</a>, but it's not super important.
{{< /alert >}}


## Types of Alerts

#### Warning
{{< alert type="warning">}}
    <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#warning" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
{{< /alert >}}

#### Info
{{< alert type="info">}}
    <strong>Heads up!</strong> This <a href="#info" class="alert-link">alert needs your attention</a>, but it's not super important.
{{< /alert >}}

#### Success
{{< alert type="success" >}}
    <strong>Well done!</strong> You successfully read <a href="#success" class="alert-link">this important alert message</a>.
{{< /alert >}}

#### Primary
{{< alert type="primary" >}}
    <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
{{< /alert >}}

#### Secondary
{{< alert type="secondary" >}}
    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
{{< /alert >}}

#### Light
{{< alert type="light" >}}
    <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
{{< /alert >}}