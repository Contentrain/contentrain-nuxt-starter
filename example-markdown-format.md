---
ID: "57702e39a774"
createdAt: "2024-01-20T16:36:16.000Z"
updatedAt: "2024-01-22T07:26:45.493Z"
status: "publish"
slug: "example-markdown-format"
title: "Example Markdown format"
description: "You can copy any Markdown example from Milkdown and paste it into the Contentrain MD editor."
category: "use-case"
imagesrc: "public/images/1705761441432_mail.jpg"
imagealt: "use case mail"
authorfullname: "Contentrain"
authorjob: "Content Writer"
authorphotosrc: "public/images/1705765740106_beyaz zemin 1.png"
authorphotoalt: "logo image"
authordescription: "Headless CMS platform that combines Git Architecture and Serverless Platforms to optimize content management on various digital products for developers and content creators."

---
# Milkdown
 [↩](#user-content-fnref-1)![](public/images/1705908233011_Content.svg)
> Milkdown is a WYSIWYG markdown editor framework.
>
> 🍼 Here is the [repo](https://github.com/Milkdown/milkdown) (right click to open link).\
> We ~~only support commonmark~~. GFM is also supported!

You can check the output markdown text in **two columns editing**.

* Features

  * 📝 **WYSIWYG Markdown** - Write markdown in an elegant way

  * 🎨 **Themable** - Theme can be shared and used with npm packages

  * 🎮 **Hackable** - Support your awesome idea by plugin

  * 🦾 **Reliable** - Built on top of [prosemirror](https://prosemirror.net/) and [remark](https://github.com/remarkjs/remark)

  * ⚡ **Slash & Tooltip** - Write fast for everyone, driven by plugin

  * 🧮 **Math** - LaTeX math equations support, driven by plugin

  * 📊 **Table** - Table support with fluent ui, driven by plugin

  * 📰 **Diagram** - Diagram support with [mermaid](https://mermaid-js.github.io/mermaid/#/), driven by plugin

  * 🍻 **Collaborate** - Shared editing support with [yjs](https://docs.yjs.dev/), driven by plugin

  * 💾 **Clipboard** - Support copy and paste markdown, driven by plugin

  * 👍 **Emoji** - Support emoji shortcut and picker, driven by plugin

* Made by

  * Programmer: [Mirone](https://github.com/Milkdown)

  * Designer: [Mirone](https://github.com/Milkdown)

***

You can add `inline code` and code block:

```javascript
function main() {
  console.log('Hello milkdown!');
}
```

> Tips: use `<mod>+<enter>` to exit blocks such as code block.

***

You can type `|3x2|<space>` to create a table:

| First Header   | Second Header      |
| -------------- | ------------------ |
| Content Cell 1 | \`Content\` Cell 1 |
| Content Cell 2 | **Content** Cell 2 |

***

Math is supported by [TeX expression](https://en.wikipedia.org/wiki/TeX).

Now we have some inline math: $E = mc^2$. You can click to edit it.

Math block is also supported.

$$ \begin{aligned} T( (v\_1 + v\_2) \otimes w) &= T(v\_1 \otimes w) + T(v\_2 \otimes w) \ T( v \otimes (w\_1 + w\_2)) &= T(v \otimes w\_1) + T(v \otimes w\_2) \ T( (\alpha v) \otimes w ) &= T( \alpha ( v \otimes w) ) \ T( v \otimes (\alpha w) ) &= T( \alpha ( v \otimes w) ) \ \end{aligned} $$

You can type `$$<space>` to create a math block.

***

Use [emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) such as `:+1:` to add emoji[1](#user-content-fn-1).

You may notice the emoji filter while inputting values, try to type \`:baby\` to see the list.

***

Diagrams is powered by [mermaid](https://mermaid-js.github.io/mermaid/#/).

You can type ` ```mermaid ` to add diagrams.

```mermaid
graph TD;
EditorState-->EditorView;
EditorView-->DOMEvent;
DOMEvent-->Transaction;
Transaction-->EditorState;
```

***

Have fun!

## Footnotes

1. We use [tweet emoji](https://twemoji.twitter.com) to make emoji can be viewed cross platforms.
