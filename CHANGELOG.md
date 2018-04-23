# Changelog

## 2.4.0

  - conversion LESS code to SCSS;
  - migration to GULP from GRUNT;
  - update of BOWER and NPM modules to the last current versions;
  - integration of LIBSASS module for a fast PRE processor compiling;
  - update of file directory;
  - update to Bootstrap 4;
  - optimisation of images;
  - update of all FLAT UI components according to the Bootstrap 4 version;
  - javascript and jquery libraries updates;
  - responsive version for all components;
  - update of Component and Template pages;
  - update of Documentation;
  - update of Getting-Start page.

## 2.2.1

  * Fixed issue with dropdowns border-top-radius (https://github.com/designmodo/Flat-UI-Pro-Support/issues/460);
  * Fixed conflict issue of jquery-ui and bootstrap button.js (https://github.com/designmodo/Flat-UI-Pro-Support/issues/465);
  * Added holder.js library;
  * Added test case for typeahead component;
  * Typeahead: fixed form-control styling;
  * Various small bugfixes and improvements.

## 2.2.0

###Misc

  * Bootstrap upgraded to v3.2.0;
  * jQuery upgraded to v1.11.1;
  * Bower support added (all dependencies are set as packages using bower);
  * Grunt support added: now, you can use assembly and testing process automation tools for less/js files, launch a local server or watch process for less compilation on-the-fly (grunt modules: concat, uglify, jshint, jscs, csslint, autoprefixer, csscomb, cssmin, etc.);
  * Added 101 template, compiled and minimized js/less file versions are now located in `/dist` directory, you can use them for quick start;
  * Documentation is moved to `/docs` folder;
  * More examples added (`docs/examples`);

###CSS

####Misc:

  * Video player, pagination and tooltip modules remade and updated;
  * Helper classes for huge margin/padding .mha, .pha (https://github.com/designmodo/Flat-UI/issues/128);
  * Add a variable for `.dl-horizontal`'s offset;
  * Add variables for `.pager`;
  * Various small bugfixes and improvements.

####Mixins:

 * Modularized the mixins into separate files. We now have a mixins directory in our less folder that @imports all the mixins into mixins.less (https://github.com/twbs/bootstrap/pull/12998);
 * Refactor scale mixins to ensure both .scale(x) and .scale(x, y) work (https://github.com/twbs/bootstrap/pull/12459);
 * Add .animation-fill-mode() mixin (https://github.com/twbs/bootstrap/pull/12855);

####Glyphicons:
 * All glyphicons updated;
 * New 27 social and 50 other icons added;
 * Selection.json file added – now, you can again edit the font with icons using Icomoon service;

####Navbar:
 * Add .navbar-link support;
 * Correctly reset .btn-link colors in a navbars (https://github.com/twbs/bootstrap/pull/12813);

####Buttons:

 * Scope .open button state in .button-variant() mixin to immediate children (https://github.com/twbs/bootstrap/pull/13079);

####Forms:

  * Support added for `.feedback-icons` (added to Bootstrap 3.1.0. Note: `.input-icon` no longer supported);
  * Add .form-group-sm/-hg/-lg (https://github.com/twbs/bootstrap/pull/13856);

###JS

 * Checkbox and radio plugin improved: now, a single plugin is used for both types of elements, more methods and have been added, and the plugin no longer conflicts with AngularJS, css-only styling;
 * Fix `.noConflict()` mode for radiocheck plugin (https://github.com/twbs/bootstrap/pull/11966);
 * Select improved, now, `select2` library is used instead of `bootstrap-select`;
 * Switch redesigned, `bootstrap-switch` updated to v3.0.2;
 * Instead of `jquery-tags-input`, `bootstrap-tagsinput` v0.4.2 is now being used.

## 2.1.3
  * Bootstrap upgraded to v3.1.0;
  * Respond.js upgraded to v1.4.2;
  * Optimized file indentations, 2 spaces are now used instead of tabs, `.editorconfig` file is added;
  * Added variables font-path, font-name and font-id (https://github.com/twbs/bootstrap/issues/12164) for local fonts and glyphicons;
  * Added the ability to change the navbar height through the variables `@navbar-height-base` and `@navbar-height-large`;
  * Add `@grid-float-breakpoint-max` to better link navbar behavior across viewports and improve customization when setting `@grid-float-breakpoint` (https://github.com/twbs/bootstrap/issues/11610);
  * Add `.small` support to blockquote citations (https://github.com/twbs/bootstrap/pull/11414);
  * Reorder the headings with body text and text emphasis classes (https://github.com/twbs/bootstrap/issues/11515);
  * Remove color from outline reset for improved outlines on focus (https://github.com/twbs/bootstrap/pull/11551);
  * Remove unnecessary prefixes for gradient mixins given our stated browser support (https://github.com/twbs/bootstrap/pull/11694);
  * Add line-height to progress bar for proper text alignment within (https://github.com/twbs/bootstrap/issues/10407);
  * Use `@screen-xx-xx` variables instead of hardcoded pixel values in modules;
  * Enable use of form validation class on `.radio`, `.checkbox`, `.radio-inline`, and `.checkbox-inline` (https://github.com/twbs/bootstrap/issues/10522);
  * Add `<kbd>` element styles to indicate user input via keyboard (https://github.com/twbs/bootstrap/issues/11193);
  * Add `.animation()` mixins(https://github.com/twbs/bootstrap/issues/11244);
  * Prevent the double borders between multiple buttons in an input group (https://github.com/twbs/bootstrap/issues/11435);
  * Updated `.scale()` mixin so that it accepts optional vertical scale as second parameter (https://github.com/twbs/bootstrap/issues/11748);
  * Don't set `@headings-font-family` to the same font stack as the `<body>`; instead, just use inherit for same default CSS (https://github.com/twbs/bootstrap/issues/11741);
  * Add `.make-xs-column` mixins to complement the recently added extra small predefined grid classes (https://github.com/twbs/bootstrap/issues/11829);
  * Add and use `.text-emphasis-variant()` mixin for emphasis classes (https://github.com/twbs/bootstrap/issues/12247);
  * Add and use `.bg-variant()` mixin to generate background classes (https://github.com/twbs/bootstrap/issues/12248);
  * Reset height on `select[multiple]` in `.input-size()` mixin (https://github.com/twbs/bootstrap/issues/12422);
  * Account for badges within buttons by matching background to text color and text color to background (https://github.com/twbs/bootstrap/issues/11268);
  * Drop the abbr element from the `.initialism` selector (https://github.com/twbs/bootstrap/issues/11277);
  * Add `.small` support to blockquote citations (https://github.com/twbs/bootstrap/issues/11414);
  * Various small bugfixes and improvements.

## 2.1.2
  * Bootstrap upgraded to v3.0.3;
  * Navbar completely rewriten, added new states (default, inverse, embossed, large, fixed-top, fixed-bottom, static-top), now you can use basic navbar elements: `.navbar-form`, `.navbar-btn`, `.navbar-text`, `.navbar-link`;
  * Forms: added support for `legend`, `.help-block`, fixed rounded serch form on iOS, fixed desabled input background and opacity, added support for input-groups;
  * Slider: added vertical orientation;
  * Various small bugfixes and improvements.

## 2.1.1
  * Typography improved (new global variables, padding and margins changed for basic elements, global default font-size now is 18px, with a line-height of 1.722, added support for `<abbr>`, `<address>`, `<code>`, `<pre>`, right-aligned `<blockquote>`);
  * Buttons module completely rewritten (new global variables, buttons now require a .btn-default for the standard version, added support for .btn-link);
  * Fixed some bugs in `.navbar`;
  * Mixins updated (added standard mixins from Bootstrap 3);
  * Layout updated for stylized select and dropdown menu;
  * Various small bugfixes and improvements.

## 2.1
  * Bootstrap upgraded to v3.0;
  * Added support for better box model;
  * Update html5 video player to version 4.1;
  * Added components documentation and sturt-up template;
  * Various small bugfixes and improvements.

## 2.0
 * Compatibility with Flat UI Pro (Less instead of Sass), Bootstrap upgraded to 2.3.1, grids refinements, various Less compiler bugfixes, Video module bugfix, various small bugfixes.

## 1.1
 * New icons, Login screen implemented to a real HTML one. Small bug fixes and refinements.

## 1.0
 * Fixed several small IE bugs
