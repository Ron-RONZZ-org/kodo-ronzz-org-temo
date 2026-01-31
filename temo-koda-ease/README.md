# Koda-Ease

A custom [Ghost](https://github.com/TryGhost/Ghost) theme based on the official Ghost foundation theme [Ease](https://github.com/TryGhost/Ease). This theme is suitable for documentation and publishing posts with a clean, modern design.

**Original Demo: https://ease.ghost.io**

&nbsp;

## First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme is documented to help you understand how it works. We also recommend these resources:

- The official [theme documentation](https://ghost.org/docs/themes) is the complete resource for everything you need to know about Ghost theme development
- [Tutorials](https://ghost.org/tutorials/) offer a step-by-step guide to building the most common features in Ghost themes
- The [Ghost VS Code extension](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost) speeds up theme development and provides quick access to helpful info
- All of Ghost's official themes are [open source](https://github.com/tryghost) and are a great reference for learning how to create a theme

&nbsp;

## Theme features

🔁&nbsp;Livereload by default. See changes instantly in the browser whenever you save a file.

🗃️&nbsp;Write modern JavaScript. Use ESM out of the box to write more manageable JavaScript.

🗜️&nbsp;Assets optimized automatically. JavaScript and CSS are minified and transpiled by default.

👟&nbsp;Fast compile times, powered by [Rollup](https://rollupjs.org).

🦋&nbsp;Write next-gen CSS for today's browsers with [PostCSS](https://postcss.org/). Add CSS tools via [`rollup.config.js`](rollup.config.js).

➕&nbsp;Extensible by design. Rollup's configuration structure makes it easy to add [any number of plugins](https://github.com/rollup/plugins).

&nbsp;

## Theme structure

The main files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

&nbsp;

## Development guide

This theme provides a first-class development experience out of the box using Rollup for building and bundling assets.

&nbsp;

### Setup

To see realtime changes during development, symlink the theme folder to the `content/themes` folder in your local Ghost install:

```bash
ln -s /path/to/temo-koda-ease /ghost/content/themes/koda-ease
```

Restart Ghost and select the **koda-ease** theme from **Settings → Design**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If Node isn't installed, follow the [official Node installation guide](https://nodejs.org/).

&nbsp;

### Start development mode

From the theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and JavaScript will be compiled and output to the `assets/built/` folder.

Press `ctrl + c` in the terminal to exit development mode.

&nbsp;

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;

## Installing the theme in Ghost

### Method 1: Upload via Ghost Admin (Recommended)

1. Build and create a zip file:
   ```bash
   npm run zip
   ```
2. Log into your Ghost admin panel
3. Navigate to **Settings → Design**
4. Click **Change theme** → **Upload theme**
5. Select the `koda-ease.zip` file
6. Click **Activate** to enable the theme

### Method 2: Local development with live preview

1. Symlink the theme to your local Ghost installation:
   ```bash
   ln -s /path/to/temo-koda-ease /path/to/ghost/content/themes/koda-ease
   ```
2. Restart Ghost
3. Navigate to **Settings → Design** in Ghost admin
4. Select **koda-ease** from the list of themes
5. In the theme directory, run:
   ```bash
   npm run dev
   ```
6. Make changes to files in `assets/css/` or `assets/js/`
7. Your changes will automatically compile and refresh in the browser

&nbsp;

## Customization

This theme supports several customization options that can be configured in Ghost admin:

- **Navigation Layout**: Choose between "Logo on the left", "Logo in the middle", or "Stacked"
- **Title Font**: Select between "Modern sans-serif" or "Elegant serif"
- **Body Font**: Select between "Modern sans-serif" or "Elegant serif"
- **Featured Posts**: Toggle featured posts display on the homepage

These settings are available in **Settings → Design → Site-wide** after installing the theme.

&nbsp;

## Copyright & License

Based on the [Ease](https://github.com/TryGhost/Ease) theme.

Copyright (c) 2013-2026 Ghost Foundation (original Ease theme) - Released under the [MIT license](LICENSE).

Modifications by Rong ZHOU - Released under the [AGPL 3.0 license](LICENSE).
