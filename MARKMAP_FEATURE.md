# Per-Post Markmap Button Feature

## Overview

This theme includes support for adding a Markmap button to individual posts. Authors can attach a Markmap URL to any post using Ghost's Code Injection feature, and the theme will automatically display a button at the top of the post content.

## How to Use

### 1. Create or Edit a Post

In your Ghost admin panel, create a new post or edit an existing one.

### 2. Add Code Injection

1. In the post editor, click the **Settings** gear icon (⚙️) in the top right
2. Scroll down to the **Code Injection** section
3. In the **Post Header** field, add the following code:

```html
<script>
  window.markmap_url = "https://example.com/your-markmap-file.mm";
</script>
```

Replace `https://example.com/your-markmap-file.mm` with your actual Markmap URL.

### 3. Publish the Post

Save and publish your post. The Markmap button will automatically appear at the top of the post content.

## Button Appearance

When a Markmap URL is provided, a button will appear with the following text in three languages:
- Esperanto: "Vidi ĉi tiun kiel markmapon"
- French: "Visualiser ce contenu en markmap"
- English: "View this content in markmap form"

The button opens the Markmap in a new tab when clicked.

## Security

The implementation includes:
- URL validation to ensure only HTTP/HTTPS protocols are allowed
- XSS protection by using `document.createTextNode()` instead of `innerHTML`
- The `rel="noopener noreferrer"` attribute for security and privacy

## Removing the Button

To remove the Markmap button from a post:
1. Go to the post settings
2. Navigate to Code Injection
3. Remove the `<script>` block from the Post Header
4. Save and update the post

The button will no longer appear.

## Technical Details

- The button is inserted dynamically via JavaScript
- It appears at the top of the `.gh-content` container
- CSS class: `.markmap-button`
- The feature requires no template modifications or global settings

## Example

Here's a complete example of the code to add in Post Header Code Injection:

```html
<script>
  window.markmap_url = "https://markmap.example.com/my-article.mm";
</script>
```

This will create a button that links to `https://markmap.example.com/my-article.mm`.
