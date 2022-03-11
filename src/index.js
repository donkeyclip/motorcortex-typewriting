import TypeWriting from "./TypeWriting";
import { TypeWritingVal } from "./validation";

import pkg from "../package.json";
const { name, version } = pkg;
export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: TypeWriting,
      name: "TypeWriting",
      attributesValidationRules: TypeWritingVal,
    },
  ],
};
