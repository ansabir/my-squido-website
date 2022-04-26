---
title: HTML Basic
permalink: html-basic
description: Learn Basic of HTML
date: 2021-10-05T00:00:00.000Z
author: Sabir Ansari
tags:
  - html
matter: "\r\ntitle: HTML Basic\r\npermalink: html-basic\r\ndescription: Learn Basic of HTML\r\ndate: '2021-10-05'\r\nauthor: Sabir Ansari\r\ntags:\r\n    - html\r\n"
file: >-
  C:/Users/Admin/Desktop/sabir/my-squido-website/source/posts/01-basic-html.markdown
lastupdated: 2022-04-26T17:16:59.571Z
hash: 7f89e2e343ea3784fc3b5b4dba512c6c
dateObject: 2021-10-05T00:00:00.000Z
dateISO: '2021-10-05T00:00:00.000Z'
error: null
empty: false
---

HTML stands for Hyper Text Markup Language. HTML is the first thing to learn if you want to be a web developer.

The three pillar of Web Development are HTML, CSS and Javascript.

HTML is the structure of the app, CSS is used for designing and Javascript is used to perform some dynamic function on the app.

HTML was invented by [Tim Berners Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) around 1990 at [CERN](https://en.wikipedia.org/wiki/CERN).

Enough Introduction Lets start to make something.

To build a website you will need an Code Editor. I recommend [Visual Studio Code](https://code.visualstudio.com/download) download it.

Create a folder name projects, in this folder we will create a file called index.html inside this folder write the code as below.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Welcome to my Web Page</h1>
    </body>
</html>
```

If you open the file in the browser it will display like,
![basi-html](/content/posts-images/01-basic-html/basic-html.png)


HTML consists of tag, there are various tag avaliable in html like <head> (head tag) <title> (title tag).

Each tag has it closing tag, just add forward-slash like for example </title>

If your output is same as above than you are following right.

```plaintext
<!DOCTYPE html>
```
This line spefies that we are using html version 5 (HTML5)

```plaintext
<html lang="en">
```
This line specifies that the language is english.

```plaintext
<head>...</head>
```
Inside this line we write title tag and other meta tag that we will learn later.

```plaintext
<title>..</title>
```
Here we wirte title of the page

```plaintext
<body>...</body>
```
Here we write what we have to show in the browser as we have written "Welcome to my web page".
Whatever we write in the body tag it will display on the browser.
