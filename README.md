# Kodo Custom Ghost Themes

This repository contains a collection of custom Ghost themes based on official Ghost foundation themes.

## Themes

### temo-koda-ease

A custom Ghost theme based on the official [Ease](https://github.com/TryGhost/Ease) theme. Suitable for documentation and content publishing with a clean, modern design.

**Location**: `temo-koda-ease/`

**Documentation**: See [temo-koda-ease/README.md](temo-koda-ease/README.md) for detailed setup and development instructions.

**Quick Start**:
```bash
cd temo-koda-ease
npm install
npm run dev
```

## Getting Started

Each theme is self-contained in its own directory with its own `package.json`, dependencies, and documentation.

### Prerequisites

- **Node.js**: Version 18 or higher (LTS recommended)
- **npm**: Comes with Node.js
- **Ghost**: Version 5.0.0 or higher for local testing

### General Workflow

1. Navigate to the theme directory
2. Install dependencies: `npm install`
3. Start development mode: `npm run dev`
4. Build for production: `npm run build`
5. Create distributable package: `npm run zip`
6. Test theme compatibility: `npm run test`

## Development

All themes in this repository use:
- **Rollup** for JavaScript bundling
- **PostCSS** for CSS processing
- **Handlebars** for templating
- **Livereload** for instant browser updates during development

## Installing Themes in Ghost

### Method 1: Upload via Ghost Admin (Recommended)

1. Navigate to the theme directory
2. Build and create a zip:
   ```bash
   npm run zip
   ```
3. In Ghost admin, go to **Settings → Design**
4. Click **Change theme → Upload theme**
5. Select the `.zip` file
6. Click **Activate**

### Method 2: Local Development

1. Symlink the theme to your Ghost installation:
   ```bash
   ln -s /path/to/theme-directory /path/to/ghost/content/themes/theme-name
   ```
2. Restart Ghost
3. Select the theme in **Settings → Design**
4. Run `npm run dev` in the theme directory for live reload

## Resources

- [Ghost Theme Documentation](https://ghost.org/docs/themes/)
- [Ghost Theme Tutorials](https://ghost.org/tutorials/)
- [Handlebars Documentation](http://handlebarsjs.com/)
- [Ghost VS Code Extension](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost)

## License

Each theme may have its own license. See the LICENSE file in each theme directory for details.

- Original Ghost themes: MIT License
- Custom modifications: AGPL 3.0 License

## Credits

Based on official Ghost themes by [Ghost Foundation](https://ghost.org/).

Customized and maintained by Rong ZHOU ([ron@ronzz.org](mailto:ron@ronzz.org))
