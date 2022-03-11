import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import TypeWritingIncidentDefinition from "./internalPlugin";

const TypeWritingPlugin = loadPlugin(TypeWritingIncidentDefinition);

/*EXPORTED CLIP*/
export default class ParseText extends HTMLClip {
  get html() {
    return `
        <div class="container">${this.attrs.text}</div>
      `;
  }

  get css() {
    return `
      .container {
        width: 100%;
        height: 100%;
      }
    `;
  }

  buildTree() {
    const { css, showCursor, cursorCss, blinkDelay, blinkhiatus, text } =
      this.attrs;
    const typewrite = new TypeWritingPlugin.TypeWritingIncident(
      {
        css,
        showCursor,
        cursorCss,
        blinkDelay,
        blinkhiatus,
        animatedAttrs: {
          text,
        },
      },
      { duration: 6000, selector: ".container" }
    );
    this.addIncident(typewrite, 0);
  }
}
