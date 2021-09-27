import Player from "@donkeyclip/motorcortex-player";
import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex/";
import TypeWritingDefinition from "../src/";
const TypeWriting = loadPlugin(TypeWritingDefinition);

const clip = new HTMLClip({
  html: `
    <div class="container">
    </div>`,
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
  { selector: ".container", duration: 6000 }
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
  { selector: ".container", duration: 6000 }
);

clip.addIncident(typewrite, 0);
clip.addIncident(typewriteOne, 6000);

new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-green",
  pointerEvents: true,
});
