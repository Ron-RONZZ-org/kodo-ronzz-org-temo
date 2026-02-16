// JavaScript and CSS files are compiled and minified during the build process to the assets/built folder.
// See available scripts in the package.json file.

// Import CSS
import "../css/screen.css";

// Import vendor libraries from shared theme assets
import "@tryghost/shared-theme-assets/assets/js/v1/lib/vendor/imagesloaded.pkgd.min.js";
import "@tryghost/shared-theme-assets/assets/js/v1/lib/vendor/reframe.min.js";
import "@tryghost/shared-theme-assets/assets/js/v1/lib/vendor/photoswipe.min.js";
import "@tryghost/shared-theme-assets/assets/js/v1/lib/vendor/photoswipe-ui-default.min.js";

// Import shared theme lib files
import "@tryghost/shared-theme-assets/assets/js/v1/lib/lightbox.js";
import "@tryghost/shared-theme-assets/assets/js/v1/lib/dropdown.js";
import "@tryghost/shared-theme-assets/assets/js/v1/lib/pagination.js";

// Import shared theme main
import "@tryghost/shared-theme-assets/assets/js/v1/main.js";

// Import local lib files
import "./lib/jarallax.min.js";
import "./lib/owl.carousel.min.js";

// Import theme-specific JS
import "./main.js";
