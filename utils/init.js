import welcome from "cli-welcome";
import pkgJSON from "./../package.json" assert { type: "json" };

const init = () =>
  welcome({
    title: `Femi Akinsiku`,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937FF`,
    color: `#000000`,
    bold: true,
    clear: true,
  });

export default init;
