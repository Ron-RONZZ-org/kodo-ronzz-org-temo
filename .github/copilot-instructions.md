# Repository Overview

This repository contains a custom Ghost theme collection. The main theme is located in `temo-koda-ease/`, which is based on the official Ghost foundation theme `ease`.

## Repository Structure

- **Root Directory**: Contains repository-level documentation and licensing
- **temo-koda-ease/**: The main Ghost theme directory
  - Theme templates: `*.hbs` files (default.hbs, index.hbs, post.hbs, page.hbs, tag.hbs, author.hbs)
  - Assets: `assets/` directory containing CSS and JavaScript source files
  - Compiled assets: `assets/built/` (generated, not committed)
  - Configuration: `package.json`, `rollup.config.js`
  - Partials: `partials/` directory for reusable template components
  - Node modules: `node_modules/` (generated, not committed)

## Tech Stack

- **Ghost**: Static site generator/CMS (requires Ghost >=5.0.0)
- **Handlebars**: Template engine for Ghost themes
- **Rollup**: JavaScript bundler and build tool
- **PostCSS**: CSS processor with modern CSS features
- **Babel**: JavaScript transpiler
- **Node.js**: Runtime (use latest LTS version)

## Build System

### Prerequisites

All commands must be run from within the `temo-koda-ease/` directory:

```bash
cd /home/runner/work/kodo-ronzz-org-temo/kodo-ronzz-org-temo/temo-koda-ease
```

### Installation

**ALWAYS** run `npm install` from the `temo-koda-ease/` directory before any build operations:

```bash
npm install
```

This installs all required devDependencies including:
- Rollup and its plugins
- PostCSS and its plugins
- Babel
- gscan (Ghost theme validator)
- bestzip (for packaging)

### Available Commands

All npm scripts are defined in `temo-koda-ease/package.json`:

1. **Development mode** (with live reload):
   ```bash
   npm run dev
   ```
   - Watches for changes in assets/css/ and assets/js/
   - Automatically compiles to assets/built/
   - Enables livereload for instant browser updates
   - Must be run before testing theme changes in a local Ghost installation

2. **Production build**:
   ```bash
   npm run build
   ```
   - Compiles and minifies CSS and JavaScript
   - Outputs to assets/built/ directory
   - Required before creating a distributable zip

3. **Create distributable package**:
   ```bash
   npm run zip
   ```
   - Runs build automatically (via npm run build)
   - Creates a .zip file in the current directory
   - Zip can be uploaded to Ghost admin panel

4. **Test/Validate theme**:
   ```bash
   npm run test
   ```
   - Runs npm run build first (via pretest hook)
   - Uses gscan to validate Ghost theme compatibility
   - Checks for errors and compatibility issues

## Development Workflow

### For theme changes:

1. Navigate to theme directory: `cd temo-koda-ease/`
2. Install dependencies if not already done: `npm install`
3. Start development mode: `npm run dev`
4. Edit source files in `assets/css/` or `assets/js/`
5. Changes automatically compile to `assets/built/`
6. Test with `npm run test` before committing
7. Build production assets: `npm run build`

### For testing in local Ghost:

1. Symlink theme to Ghost's content/themes directory:
   ```bash
   ln -s /home/runner/work/kodo-ronzz-org-temo/kodo-ronzz-org-temo/temo-koda-ease /path/to/ghost/content/themes/koda-ease
   ```
2. Run `npm run dev` in the theme directory for live reload
3. Restart Ghost and select the theme in Settings > Design

## Important Notes

- **Never** commit `node_modules/` or `assets/built/` directories
- **Always** test theme with `npm run test` before creating pull requests
- Build commands may take 30-60 seconds to complete
- If build fails, ensure you're in the `temo-koda-ease/` directory
- Rollup config uses ES modules (note `"type": "module"` in package.json)
- The theme uses modern JavaScript and CSS features that are transpiled/polyfilled during build

## Common Issues

1. **"rollup: not found"**: Run `npm install` in the `temo-koda-ease/` directory
2. **Build timeout**: Increase initial_wait to 60+ seconds for build commands
3. **Module not found errors**: Ensure all dependencies in package.json are installed
4. **Test failures**: Run `npm run build` first, as pretest hook should handle this automatically

## Validation

Before finalizing any changes:
1. Run `npm run test` to validate theme compatibility
2. Run `npm run build` to ensure production build works
3. Verify no errors in the output
4. Check that `assets/built/` contains the compiled files
