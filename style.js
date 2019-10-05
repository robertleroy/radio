:root {
  --fontColor: #333333;
  --backgroundColor: #f7f7f7;
  --headingColor: #222222;
  --linkColor: #1E90FF;
  --activeColor: #ff8f1f;
  --dangerColor: #ff1e1e;
  --accentColor: #1effff;
  --muted-1: rgb( 51, 51, 51, 0.1);
  --muted-2: rgb( 51, 51, 51, 0.2);
  --muted-3: rgb( 51, 51, 51, 0.3);
  --muted-4: rgb( 51, 51, 51, 0.4);
  --muted-5: rgb( 51, 51, 51, 0.5);
  --muted-6: rgb( 51, 51, 51, 0.6);
  --muted-7: rgb( 51, 51, 51, 0.7);
  --muted-8: rgb( 51, 51, 51, 0.8);
  --muted-9: rgb( 51, 51, 51, 0.9);
}/*! largly based on normalize.css | 
github.com/necolas/normalize.css */html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  -moz-tab-size: 2;
  tab-size: 2;
  -webkit-tap-highlight-color: transparent;
}

*,::before,::after {
  box-sizing: inherit;
  text-decoration: inherit;
  vertical-align: inherit;
  margin: 0;
}

body {
  word-break: break-word;
  margin: 0;
}

article,aside,details,figcaption,figure,footer,header,main,menu,nav,section {
  display: block;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

a {
  background-color: transparent;
}

a:active,a:hover {
  outline-width: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,strong,.bold {
  font-weight: bolder;
}

dfn,em,i,.italic {
  font-style: italic;
}

code,kbd,samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small,caption {
  font-size: 80%;
  font-style: normal;
  font-weight: normal;
}

sub,sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

pre,code,kbd,samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,input,optgroup,select,textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  margin: 0;
}

button,input {
  overflow: visible;
}

button,select {
  text-transform: none;
}

button,[type="button"],[type="reset"],[type="submit"] {
  -webkit-appearance: button;
}

::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

textarea {
  overflow: auto;
}

[type="checkbox"],[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  display: inline-block;
  vertical-align: baseline;
}

details {
  display: block;
}

summary {
  display: list-item;
}

figure {
  margin: 1em 40px;
}

canvas {
  display: inline-block;
}

img {
  border-style: none;
}

svg:not([fill]) {
  fill: currentColor;
}

svg:not(:root) {
  overflow: hidden;
}

template {
  display: none;
}

[hidden][hidden],[hidden] {
  display: none;
}

:root {
  --hero: 40px;
  --h1: 32px;
  --h2: 27px;
  --h3: 24px;
  --h4: 20px;
  --h5: 18px;
  --h6: 16px;
  --h7: 14px;
  --h8: 13px;
  --h9: 12px;
  --lh: 24px;
  --lh2: 36px;
  --root: 12px;
}

@media (min-width: 800px) {
  :root {
    --hero: 43px;
    --h1: 34px;
    --h2: 28px;
    --h3: 26px;
    --h4: 21px;
    --h5: 19px;
    --h6: 17px;
    --h7: 15px;
    --h8: 14px;
    --h9: 13px;
    --lh: 26px;
    --lh2: 39px;
    --root: 13px;
  }
}

@media (min-width: 1600px) {
  :root {
    --hero: 45px;
    --h1: 36px;
    --h2: 30px;
    --h3: 27px;
    --h4: 23px;
    --h5: 20px;
    --h6: 18px;
    --h7: 16px;
    --h8: 15px;
    --h9: 14px;
    --lh: 28px;
    --lh2: 42px;
    --root: 14px;
  }
}

html {
  font-size: var(--root);
}

body {
  font-size: var(--h6);
  line-height: 2rem;
  background-color: #f7f7f7;
  color: #333;
  min-height: 100vh;
}

h1,h2,h3,h4,h5,h6 {
  color: #ffa91e;
  font-family: Helvetica,"Helvetica Neue",Arial,sans-serif;
  font-feature-settings: 'dlig', 'liga', 'lnum', 'kern';
  font-style: normal;
  font-weight: bolder;
  margin: 0;
}

h1,.h1 {
  font-size: var(--h1);
  line-height: 3rem;
}

h2,.h2 {
  font-size: var(--h2);
  line-height: 3rem;
}

h3,.h3 {
  font-size: var(--h3);
  line-height: 3rem;
}

h4,.h4 {
  font-size: var(--h4);
  line-height: 2rem;
}

h5,.h5 {
  font-size: var(--h5);
  line-height: 2rem;
}

h6,.h6 {
  font-size: var(--h6);
  line-height: 2rem;
}

.h7 {
  font-size: var(--h7);
  line-height: 2rem;
}

.h8,small,caption {
  font-size: var(--h8);
  line-height: 2rem;
}

.h9 {
  font-size: var(--h9);
  line-height: 1.5rem;
}

hr {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5));
  background-position: 0 50%;
  background-repeat: repeat-x;
  background-size: 100% 0.1rem;
  width: 100%;
  border: 0;
  margin: 0 auto;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

p,blockquote,blockquote {
  margin-bottom: 1rem;
}

p {
  font-feature-settings: 'kern', 'onum', 'liga';
}

small,caption {
  font-family: Helvetica,"Helvetica Neue",Arial,sans-serif;
  font-size: var(--h7);
  line-height: 1;
}

caption {
  color: var(--muted-5);
}

sub,sup {
  font-size: var(--h8);
}

blockquote {
  padding: 1.5rem;
  color: var(--muted-8);
  background-color: rgba(0,0,0,0.02);
  border-radius: 0.3rem;
  border: 1px solid rgba(0,0,0,0.1);
  border-left-width: 1rem;
}

blockquote>:first-child {
  margin-top: 0;
}

blockquote>:last-child {
  margin-bottom: 0;
}

.btn,.router-link-active,svg-icon,a,[btn] {
  cursor: pointer;
}

.btn:hover,.router-link-active:hover,svg-icon:hover,a:hover,[btn]:hover {
  opacity: 0.6;
}

.btn:active,.router-link-active:active,svg-icon:active,a:active,[btn]:active {
  opacity: 0.3;
}

.upper {
  font-kerning: normal;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.small-caps {
  font-feature-settings: 'smcp', 'kern';
  font-kerning: normal;
  letter-spacing: 0.1rem;
}

.noMargin {
  margin: 0;
}

.router-link-active {
  color: #ff8d1e;
}

.muted {
  opacity: 0.5;
}

svg-icon {
  font-size: var(--h3);
  color: #333;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
}

code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: var(--h8);
  background-color: rgba(0,0,0,0.03);
  border-radius: 0.3rem;
}

pre {
  font-size: var(--h7);
  line-height: 1.45;
  padding: 2rem;
  background-color: rgba(0,0,0,0.02);
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
  overflow-y: auto;
  border: 1px solid rgba(0,0,0,0.1);
  border-left-width: 1rem;
}

pre code {
  font-size: inherit;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  word-wrap: break-word;
  white-space: pre;
  word-break: normal;
}

a,area,button,input,label,select,summary,textarea,[tabindex] {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

button,input,select,textarea {
  background-color: transparent;
  background-color: rgba(255,255,255,0);
  border: 0 solid;
  outline: none;
  margin: 0;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.4);
  color: inherit;
  font-family: inherit;
  font-size: var(--h7);
  line-height: inherit;
  letter-spacing: inherit;
  padding: 0.25em 0.375em;
  transition: all 0.1s ease;
}

button,[type="button"],[type="reset"],[type="submit"] {
  text-transform: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

button:hover,[type="button"]:hover,[type="reset"]:hover,[type="submit"]:hover {
  opacity: 0.6;
}

button:active,[type="button"]:active,[type="reset"]:active,[type="submit"]:active {
  opacity: 0.3;
}

button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {
  border-style: none;
}

[type="text"],[type="email"],[type="search"],[type="tel"],[type="url"],[type="password"],textarea {
  min-width: 3rem;
}

[type="text"]:focus,[type="email"]:focus,[type="search"]:focus,[type="tel"]:focus,[type="url"]:focus,[type="password"]:focus,textarea:focus {
  box-shadow: inset 0 0 0 1px dodgerblue;
}

select {
  height: 2.583334rem;
  display: inline-block;
  text-transform: none;
  -webkit-appearance: menulist-button;
}

@media (min-width: 640px) {
  select {
    height: 2.576923rem;
  }
}

@media (min-width: 800px) {
  select {
    height: 2.571429rem;
  }
}

@media (min-width: 1600px) {
  select {
    height: 2.566667rem;
  }
}

optgroup {
  font-size: var(--h7);
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

:-moz-focusring {
  outline: 1px dotted #333;
}

a {
  color: #1e90ff;
  text-decoration: none;
  transition: color .1s, background-color .1s;
  background-color: transparent;
  outline-width: 0;
}

p a,li a {
  text-decoration: none;
}

ul,ol {
  padding-left: 1rem;
  margin-bottom: 1rem;
  list-style: none;
}

dl {
  margin-bottom: 1rem;
}

dl dt {
  font-weight: bolder;
}

dl dd {
  font-size: var(--h7);
  padding-left: 1rem;
}

dl dd+dt,dl li ul,dl li ol {
  padding-top: 1rem;
}

.unlist {
  list-style: none;
}

.unlist ul,.unlist ol {
  list-style: none;
}

@font-face {
  font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2");
}

@font-face {
  font-family:'Material Icons Outlined';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialiconsoutlined/v13/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format("woff2");
}

.material-icons,.icon,[icon] {
  font-family: 'Material Icons';
}

.material-icons-outlined,.icon-outlined,[icon-outlined] {
  font-family: 'Material Icons Outlined';
}

.material-icons-outlined,.icon-outlined,[icon-outlined],.material-icons,.icon,[icon] {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.checkbox {
  display: inline-block;
  cursor: pointer;
  line-height: 1;
  user-select: none;
  vertical-align: middle;
  color: var(--muted-8);
}

.checkbox:hover {
  opacity: 0.6;
}

.checkbox:active {
  opacity: 0.3;
}

.checkbox input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  height: 0;
  width: 0;
}

[type=range] {
  -webkit-appearance: none;
  appearance: none;
  height: 1rem;
  background: #121212;
  overflow: visible;
  box-shadow: none;
  border-radius: 0.5rem;
  border: none;
}

[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: #ffa91e;
  cursor: pointer;
}

[type=range]::-moz-range-thumb {
  appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 0.75rem;
  background: #ffa91e;
  cursor: pointer;
}

progress {
  position: relative;
  width: 100%;
  display: inline-block;
  cursor: pointer;
  height: 1rem;
  background: #121212;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
}

progress::-webkit-progress-bar {
  border-radius: 0.5rem;
  background: #121212;
  border: none;
}

progress::-moz-progress-bar {
  border-radius: 0.5rem;
  background: #121212;
  border: none;
}

progress::-webkit-progress-value {
  background: currentColor;
  border: none;
}

progress::-ms-fill {
  background: currentColor;
  border: none;
}

body {
  background: #121212;
  color: #ffa91e;
}

#app {
  position: relative;
  height: 100vh;
  max-width: 960px;
  margin: auto;
}

aside {
  padding: 1rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.3s;
  width: 100vw;
  transform: translateX(-100vw);
  z-index: 10;
}

@media (min-width: 800px) {
  aside {
    width: 250px;
    transform: translateX(0) !important;
    padding-right: 0;
  }
}

aside .menu {
  border-radius: 0.5rem;
  padding: 2rem 0 2rem 2rem;
  background: #292929;
  height: 100%;
}

aside .menuItem {
  font-size: var(--h5);
  margin-bottom: 0.2rem;
}

aside .closeMenu {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 20;
  font-size: 3rem;
}

@media (min-width: 800px) {
  aside .closeMenu {
    display: none;
  }
}

main {
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1rem 0;
  transition: 0.3s;
}

@media (min-width: 800px) {
  main {
    margin-left: 250px !important;
    width: auto;
  }
}

@media (min-width: 800px) {
  main .menu {
    display: none;
  }
}

header {
  padding: 1rem;
  background: #292929;
  border-radius: 0.5rem 0.5rem 0 0;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1rem;
}

@media (max-height: 350px) {
  header {
    padding: 0.5rem;
  }
}

header .icon {
  font-size: 3rem;
  transition: 2s ease-out;
}

header .hamburger {
  padding: 0.5rem;
}

header .hamburger div {
  width: 2.5rem;
  height: 3px;
  background-color: #ffa91e;
  margin: 5px 0;
}

@media (min-width: 800px) {
  header .hamburger {
    display: none;
  }
}

.lists {
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 1rem;
  background: #292929;
  overflow-y: auto;
}

.lists .autoplay {
  justify-self: end;
  margin-right: 1rem;
}

.listItem {
  display: grid;
  justify-content: space-between;
  align-items: baseline;
  grid-auto-flow: column;
  grid-gap: 1rem;
  padding: 0.2rem 1rem;
  cursor: pointer;
}

.listItem:hover {
  background: rgba(255,255,255,0.2);
}

.listItem:active {
  opacity: 0.5;
}

.listItem .description {
  display: none;
}

@media (min-width: 300px) {
  .listItem .description {
    display: initial;
  }
}

footer {
  padding: 1rem;
  background: #292929;
  border-radius: 0 0 0.5rem 0.5rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
}

@media (max-height: 350px) {
  footer {
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }
}

footer .buttons {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 0 1rem;
}

footer .buttons .play {
  font-size: 6rem;
  width: 6rem;
}

@media (max-height: 350px) {
  footer .buttons .play {
    font-size: 4rem;
  }
}

footer .buttons .btnGroup {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
}

footer .buttons .btnGroup .icon {
  font-size: 4rem;
}

footer .progressGroup {
  position: relative;
  padding: 0 0.5rem;
}

footer .progressGroup .meta {
  position: absolute;
  top: -1.5rem;
  right: 0.8rem;
}

@media (max-height: 350px) {
  footer .progressGroup .meta {
    display: none;
  }
}

footer .volumeGroup {
  display: none;
  justify-content: space-between;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin-right: 0.5rem;
}

@media (min-width: 550px) {
  footer .volumeGroup {
    display: grid;
  }
}

footer .volumeGroup .icon {
  font-size: 3rem;
}

.selectedItem {
  background: rgba(255,255,255,0.2);
}

.selectedMenu {
  text-decoration: underline;
}
