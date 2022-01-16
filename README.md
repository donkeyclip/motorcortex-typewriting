# MotorCortex-TypeWriting

**Table of Contents**

- [MotorCortex-TypeWriting](#motorcortex-typewriting)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [TypeWriting](#typewriting)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo
[Check it out here](https://donkeyclip.github.io/motorcortex-typewriting/demo/)

# Intro / Features
MotorCortex TypeWriting add the type writing effect to your clips.

This Plugin exposes one incidents:
- TypeWriting

# Getting Started
## Installation

```bash
$ npm install @donkeyclip/motorcortex-typewriting
# OR
$ yarn add @donkeyclip/motorcortex-typewriting
```

## Importing and loading
```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import TypeWritingDefinition from "@donkeyclip/motorcortex-typewriting";
const TypeWriting = loadPlugin(TypeWritingDefinition);
```

# Creating Incidents
## TypeWriting
```javascript
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
```

### TypeWriting Attrs

| Name        | Description                                               | Default |    Type |
| ----------- | :-------------------------------------------------------- | :------ | ------: |
| css         | The CSS for the text                                      | ""      |  string |
| cursorCss   | The CSS for the cursor                                    | ""      |  string |
| showCursor  | Show or hide cursor                                       | false   | boolean |
| blinkDelay  | Blink cursor duration in milliseconds before start typing | 0       |  number |
| blinkhiatus | Blink cursor duration in milliseconds after end of typing | 0       |  number |
| text        | The text to be typed                                      | ""      |  string |
# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
