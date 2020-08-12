# MatchaCSS

## A Minimal CSS Framework

<img src="./docs/assets/matchalogo.png" style="display:block;float:none;margin-left:auto;margin-right:auto;width:30%" />

Matcha is a minimal CSS design system and framework to try and influence the use of the Cascade in CSS and promote the use of semantic HTML.

It provides a hard override of base CSS element styling (using normalize.css as a starting point), while also providing the user the ability to override any styles themselves using normal css (by only styling base elements any classes added to elements will default to highest specificity).

Matcha takes a style-first stance in a framework, while it does provide some basic utilities for layout (grid/flexbox) it mostly leaves top level layout to the user

Matcha is designed for quick prototyping and extendibility, either write your own classes to override styles or modify/add your own the design token to create your own themes. Dark modes are as simple as changing a class on the body!

## Install guide

1. via NPM / Yarn

```bash
    npm install matchacss
    yarn add matchacss
```

and then either link to the stylesheet in your html

```html
<link rel="stylesheet" href="node_modules/matchacss/matcha.css" />
<link rel="stylesheet" href="node_modules/matchacss/themes/dark.css" />
```

or in your JS file and let your bundler do the work

```javascript
// import main bundle
import 'matchacss';

// import a theme
import 'matchacss/themes/dark.css';
```

2. via cdn

```html
// base package
<link rel="stylesheet" href="https://unpkg.com/matchacss" />

// to include a specific theme include this below the base package link
<link
  rel="stylesheet"
  href="https://unpkg.com/matchacss/themes/<THEME_NAME>.css"
/>
```

## Base useage

MatchaCSS is easy to use as all you need to do is include the package to your project (as shown above), and write semantic hmtl, MatchaCSS overrides base elements stylings with an opinionated style and normalises defaults across browsers.

if you dont like a particular styling of an element, just add a class to that element and restyle, as all our styles are done purely on base element selectors any classes added to the elements will default to heighest specificity.

## CSS Custom Property Usage

Matcha makes heavy use of CSS custom properties under the hood, so themeing is really easy, create a class and override the internal custom properties in your class, add your class to the body element to add your theme the page.

here is an example of the default dark theme class.

```css
.dark {
  --background: var(--darkerBlue);
  --textColor: var(--white);
  --headerBackground: var(--black);
  --cardBackground: var(--darkBlue);
  --btnTextColor: var(--black);
  --inputHighlight: 0 0 1px 4px var(--red), 0 0 10px 1px var(--red);
}
```

## Redefining base values

you can also overide the default values of the custom properties with your own values inside the :root pseudo-element ,

```css
// default values for colors
:root {
  /* Shades */
  --pureBlack: #000;
  --black: #333;
  --darkerGray: #383838;
  --darkGray: #777777;
  --gray: #bfbfbf;
  --default: #d4d4d4;
  --lightGray: #eeeeee;
  --white: #f6f6f6;
  --pureWhite: #ffffff;

  /* Colors */
  --darkGreen: #335533;
  --green: #32a65a;
  --lightGreen: #5acca6;
  --teal: #60bbbf;
  --orange: #dab820;
  --yellow: #ecec75;
  --lightYellow: #f6f6b8;
  --lightRed: #df5e36;
  --red: #e84201;
  --darkRed: #992b2b;
  --lightBlue: #87ceeb;
  --blue: #909fcc;
  --darkBlue: #323b55;
  --darkerBlue: #23293a;
}

// in your stylesheet..

:root {
  --blue: red;
}
```

Or your can overide the color intension

```css
:root {
  --primary: var(--teal);
  --danger: var(--red);
  --cancel: var(--lightRed);
  --attention: var(--orange);
  --success: var(--green);
  --info: var(--blue);
}
```

## Alternative styles with data-\* attributes

elements that make use of color intensions (e.g buttons) will be able to define which color intention is used by giving the element a data-<COLOR_INTENTION> attribute, otherwise will revert to its default color.

```html
<button data-primary>Primary</button>
<button data-Danger>Danger</button>
<button data-cancel>Cancel</button>
<button data-attention>Attention</button>
<button data-success>Success</button>
<button data-info>Info</button>
```

## Forms are super easy!

form elements styles have been normalized, input["submit"] are styled the same as normal buttons and text inputs and textareas share similar styling by default. labels are now display block to conform with best practice of having labels above the input theyre a label for, and placeholders are given better padding and colouring. Wrap grouped elements in fieldsets for best results.

## ok well...its 95% Classless...

While MatchaCSS is mostly classless, it does provide some utility classes to create some components which aren't naturally comparable to basic HTML elements (e.g cards) or to provide some basic positioning using flexbox and grid, these are usually used with div's as they have no naturally styling of their own.

NB: basic grids are not resposive as of v0.0.7 (feel free to make a pull request!)

```html
// card components create an element with some padding child elements and a box
shadow, images will default to 100% width of the card and object-fit
<div class="card">Card Component</div>

// grid element (defaults to two column grid)
<div class="grid">Grid Component</div>

// use col-[NUMBER] to specify number of columns (max: 12)
<div class="grid col-4">
  <div>Four Column Grid Element</div>
  <div>Four Column Grid Element</div>
  <div>Four Column Grid Element</div>
  <div>Four Column Grid Element</div>
</div>

// or use auto grid to create a grid element that will naturally fill the
container with as many columns it can and will be responsive out of the box with
no media queries
<div class="auto-grid">Card Component</div>

// flex component (defaults to using space between and row as direction)
<div class="flex">Default Flex Component</div>
<div class="flex flex-around">Justify-Content: space-around</div>
<div class="flex flex-center">Justify-Content: center</div>
<div class="flex flex-even">Justify-Content: space-evently</div>
<div class="flex flex-start">Justify-Content: flex-start</div>
<div class="flex flex-end">Justify-Content: flex-end</div>
<div class="flex flex-column">flex-direction: column</div>
```

Check out our [examples page](https://phl3bas.github.io/MatchaCSS/) to see some of our base stylings.

## Contributing

We are open to contributors at any level, the framework is built using SASS so a basic understanding of sass is prefererable (but not neccessary!). its a bit wild west at the moment but if you have any ideas or queriers about design choices message me on twitter @phl3bas or make a issue and we can move forward from there.

### _cheers_

Sepp Wikramaratna-Clarke _(twitter: @Ph3lbas)_

_MatchaCSS Creator_
