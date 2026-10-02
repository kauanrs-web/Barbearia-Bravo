import {readFileSync,writeFileSync} from "node:fs";
const html=readFileSync("index.html","utf8");
const compiled=html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/@tailwindcss\/browser@[^"]+" defer><\/script>/,'<link rel="stylesheet" href="assets/tailwind.min.css">');
if(compiled===html)throw new Error("Tag do CDN não encontrada em index.html.");
writeFileSync("index.producao.html",compiled);
console.log("index.producao.html atualizado.");
