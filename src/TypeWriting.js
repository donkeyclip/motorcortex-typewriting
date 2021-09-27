import MC from "@donkeyclip/motorcortex";

/*INNER PLUGIN*/
class TypeWritingIncident extends MC.Effect {
  onGetContext() {
    this.element.style = this.attrs.css;
    this.cursorElement = `<span style="${this.attrs.cursorCss}">|</span>`;
    this.delay = this.attrs.blinkDelay || 0;
    this.hiatus = this.attrs.blinkhiatus || 0;
  }

  getScratchValue() {
    return "";
  }

  onProgress(fraction, currentTime) {
    let text = "";
    if (fraction == 1) {
      this.element.innerHTML = text;
      return;
    }

    const duration = 6000;
    const typeFraction = (duration - this.delay - this.hiatus) / duration;
    const delayFraction = this.delay / duration;
    let currentTypefraction = (fraction - delayFraction) / typeFraction;
    if (currentTypefraction < 0) currentTypefraction = 0;
    const currentTextLength = this.targetValue.length * currentTypefraction;
    text += this.targetValue.slice(0, currentTextLength);

    const { showCursor } = this.attrs;
    const ishalfOfSecond = parseInt(currentTime / 500) % 2;
    const beforeTyping = currentTime < this.delay;
    const afterTyping = currentTime > this.props.duration - this.hiatus;
    const typing = !beforeTyping && !afterTyping;
    if (showCursor && (ishalfOfSecond || typing)) {
      text += this.cursorElement;
    }

    this.element.innerHTML = text;
  }
}

const TypeWritingIncidentDefinition = {
  npm_name: "type-writing-definition",
  version: "1.0.0",
  incidents: [
    {
      exportable: TypeWritingIncident,
      name: "TypeWritingIncident",
      attributesValidationRules: {},
    },
  ],
};

const TypeWritingPlugin = MC.loadPlugin(TypeWritingIncidentDefinition);

/*EXPORTED CLIP*/
export default class ParseText extends MC.HTMLClip {
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
