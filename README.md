# LandingPage secureCodeBox

This repository sources the [secureCodeBox landing page][prod-website].

## Build and Run

For development: 
```bash
gatsby develop
```
For production locally:
```bash
gatsby build
gatsby serve
```
And then visit [this](http://localhost:8000/) in your browser.


## Style Guide

The overall design-idea is a clean and professional look. And since securecodebox.io serves mostly an informational purpose, it should stay more simplistic than extraordinary, meaning include only information and elements which either are necessary or helpful and very few basic elements for a good look (e.g. fitting background picture). 

### Colors

The color scheme is aimed to be basically white with a soft blue coloring as the main color and gentle highlighting. This website should not be monochrome or monotonous, so feel free to include colored elements and icons but use different colors only ever so slightly and avoid strong contrasts.

Included colors:

```
$white: #ffffff; 
$black: #000000;
$primary: #1c3ed3; // Strong blue tone
$iteragenta: #a9218e; // iteratec's main color (avoid using it ;) )
$highlight: #7c00ce57; // Gentle, half transparent violet-ish for highlighting
$secureCodeBlue: #3296dc; // Main, soft blue tone 
$secondary: #414156; // Grey, used for non-header text
```

If new colors will be used standardized, make sure to include them as a variable and list it here with it's purpose.

### Fonts

Fonts should be simple and readable. Nothing fancy or special and not be web loaded.

Used Fonts:

```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol';
```

### Icons & Images 

Icons should be license free and as close too the other icons' style as possible. They should be outlined and monochrome. Color should only be used to fill, never as line color, and only if color does provide a more pleasing look than monochrome. Images should be fitting and mainly used as background (partially). They should fit the color scheme if possible or do __not__ stand out through a high contrast to the website. Recommended Websites for free icons or images: 

-   [iconmonstr](https://iconmonstr.com/) 
-   [pixabay](https://pixabay.com/)

