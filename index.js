#!/usr/bin/env node

import pkgJSON from "./package.json" assert { type: "json" };
import welcome from "cli-welcome";
import chalk from "chalk";
import sym from "log-symbols";
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;

const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const websiteClr = chalk.hex(`#6937FF`).bold.inverse;

// alerts

const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.yellow.inverse;
const error = chalk.red.bold.inverse;

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

log(`${italic(
  `As a seasoned Full Stack Developer, I specialize in React, TypeScript, and Node.js technologies. With a track record of delivering innovative user interfaces and robust backend solutions, I excel in crafting seamless experiences from end to end. My passion for staying at the forefront of industry trends and leading cross-functional teams ensures the delivery of cutting-edge solutions that drive user satisfaction and business success.`
)}

🔗 ${twitterClr(` Twitter `)} ${dim(`https://twitter.com/david_akinsiku`)}
⚓️ ${githubClr(` Github `)} ${dim(`https://github.com/akinsikuoluwafemi`)}
🧑‍💻 ${websiteClr(` Website `)} ${dim(`https://femiakin.com/`)}

`);

log(`
${sym.success} ${success(` SUCCESS `)} Thanks for checking out my CLI.

${sym.info} ${info(` INFO `)}: I'm currently working on a new CLI. Stay tuned!

${sym.warning} ${warning(
  ` WARNING `
)}: Please don't copy my CLI. Be creative and build your own.

${sym.error} ${error(
  ` ERROR `
)}: If you have any questions, please reach out to me.
`);
//npm link
