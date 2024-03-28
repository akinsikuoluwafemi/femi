#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`Femi Akinsiku


As a seasoned Full Stack Developer, I specialize in React, TypeScript, and Node.js technologies. With a track record of delivering innovative user interfaces and robust backend solutions, I excel in crafting seamless experiences from end to end. My passion for staying at the forefront of industry trends and leading cross-functional teams ensures the delivery of cutting-edge solutions that drive user satisfaction and business success.

🔗 Twitter: https://twitter.com/david_akinsiku
⚓️ Github: https://github.com/akinsikuoluwafemi
🧑‍💻 Website: https://femiakin.com/

`);

//npm link
