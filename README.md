# MotorCortex Typewriting

## Installation
```bash
$ npm install @donkeyclip/motorcortex-typewriting
# OR
$ yarn add @donkeyclip/motorcortex-typewriting
```

```javascript
import TypeWriting from "@donkeyclip/motorcortex-typewriting";
```


## Key Concepts / Features
MotorCortex TypeWriting add the type writing effect to your clips.


## Documentation
### Import and load the plugin to MotorCortex
```javascript
import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex/";
import TypeWritingDefinition from "@donkeyclip/motorcortex-typewriting";
const TypeWriting = loadPlugin(TypeWritingDefinition);

const clip = new HTMLClip({
  html: `
    <div class="container"></div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    background:#151515;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "720px",
    height: "640px",
  },
});

const typewrite = new TypeWriting.TypeWriting(
  {
    css: `color:#37ff00;font-size:20px;font-weight:bold`,
    showCursor: true,
    cursorCss: "color:#37ff00;font-size:20px;font-weight:bold;",
    blinkDelay: 3000,
    blinkhiatus: 2000,
    text: `Wake up, Neo...`,
  },
  { selector: ".container" }
);

const typewriteOne = new TypeWriting.TypeWriting(
  {
    css: `color:#37ff00;font-size:20px;font-weight:bold`,
    showCursor: true,
    cursorCss: "color:#37ff00;font-size:20px;font-weight:bold;",
    blinkDelay: 3000,
    blinkhiatus: 2000,
    text: `The Matrix has you...`,
  },
  { selector: ".container" }
);

clip.addIncident(typewrite, 0);
clip.addIncident(typewriteOne, 6000);
clip.play();

```
### Attributes
| Name | Description | Default | Type |
| --------- |:-----------| :----| ------: |
| css | The CSS for the text | "" | string |
| cursorCss | The CSS for the cursor | "" | string |
| showCursor | Show or hide cursor | false | boolean |
| blinkDelay | Blink cursor duration in milliseconds before start typing | 0 | number |
| blinkhiatus | Blink cursor duration in milliseconds after end of typing | 0 | number |
| text | The text to be typed | "" | string |

### Demo
https://donkeyclip.github.io/motorcortex-typewriting/demo/


## License
[MIT License](https://opensource.org/licenses/MIT)

  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
