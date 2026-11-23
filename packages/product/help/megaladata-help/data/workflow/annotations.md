---
description: Annotate your workflow to add structure and visual readability. 
---

# Annotations

In the workflow area, you can add notes or comments using annotations. These remain in the background, so they do not interfere with your nodes and links. You can cut, copy, and paste them as usual. If you group your workflow into a supernode, the annotations will expand and collapse with it.

Right-click an annotation to access the style menu, where you can choose from preset colors and stroke types.

Text wraps automatically, but if the box is too small, a vertical scroll bar will appear. Also, keep in mind that multiple spaces will be shortened to a single space.

![An example annotation](annotation.png)

Annotations support [markdown](https://en.wikipedia.org/wiki/Markdown).

> **Note:** To use Markdown in annotations, enable the **Markdown syntax for comments and annotations** in [package properties](https://help.megaladata.com/userguide/interface/packages.html#package-properties) (enabled by default).

## Editing annotations

Double-click the annotation area to open the editor. The editor window contains two tabs: **Annotation (Markdown)** and **Preview**.

To format your text, use the following:
- toolbar commands (after selecting text)
- markup characters (enter directly in the text)

Toolbar buttons and corresponding markup characters:
- **Bold** (<kbd>Ctrl</kbd> + <kbd>B</kbd>): Enclose text with `**` or `__`.
- **Italics** (<kbd>Ctrl</kbd> + <kbd>I</kbd>): Enclose text with `*` or `_`.
- **Strikethrough**: Enclose text with `~~`.
- **Title 1** (<kbd>Ctrl</kbd> + <kbd>1</kbd>), **Title 2** (<kbd>Ctrl</kbd> + <kbd>2</kbd>), **Title 3** (<kbd>Ctrl</kbd> + <kbd>3</kbd>), etc.: Prefix text with `#`. The more `#` characters, the lower the title's hierarchical level, with the lowest one being `######`.
- **Unordered list**: prefix each bullet point with `*`.
- **Ordered list**: Prefix each item with a number followed by a dot.
- **Checkbox**: Use `[ ]` for an empty checkbox and `[x]` for a marked checkbox.
- **Table**: Separate columns with `|` and the header line from the body with `-`.
- **Link**: Format links as `[text](URL)`.
- **Image**: Insert images using `![]()` (e.g., `![](https://example.com/images/foldername/filename.jpg)`. Use the full path starting with the protocol. Note that only `http://` and `https://` are allowed).
- **Quote**: Prefix each line with `>`.
- **Separator**: To add a separator line, use `***`, `---`, or `___`.

The toolbar provides two additional commands:
- **Single-line code** (<kbd>Ctrl</kbd> + <kbd>K</kbd>): Use this for a line of code.  
- **Multi-line code** (<kbd>Ctrl</kbd> + <kbd>J</kbd>): Use this for a block of code. A horizontal scroll bar appears when necessary.

Use the **Save** and **Cancel** buttons at the bottom of the editor to save or discard your changes, respectively.

> **Important:** By default, loading images and links is disabled. To enable it, go to **Secutiry parameters** in the [Administration](https://help.megaladata.com/userguide/admin/) section and select the options **URL for loading images** and **URL for generating links**.
> If the Apache web server configuration includes `Content Security Policy` with the `img-src` directive restricting image-loading URLs, add the necessary host addresses to the directive settings.

**Read on:** [Keyboard Shortcuts](.shortcuts.md)