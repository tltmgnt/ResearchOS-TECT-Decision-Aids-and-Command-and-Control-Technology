import fs from 'node:fs';
const read=p=>fs.readFileSync(p,'utf8');
const core=read('web/core.mjs').replaceAll('export ','');
const wrapped='window.ResearchCore=(()=>{'+core+';return {validate,evaluate,csv,report,LIMITATIONS};})();';
const app=read('web/app.mjs').replace("import {validate,evaluate,csv,report,LIMITATIONS} from './core.mjs';","const {validate,evaluate,csv,report,LIMITATIONS}=window.ResearchCore;").replace('__DEMO__',read('examples/coordination-tabletop.json').replaceAll('<','\\u003c'));
const html=read('web/index.html').replace('__CSS__',read('web/styles.css')).replace('__CORE__',wrapped).replace('__APP__',app);
if(/__(CSS|CORE|APP|DEMO)__/.test(html))throw Error('Unreplaced template');
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',html);fs.copyFileSync('LICENSE','dist/LICENSE');
fs.writeFileSync('dist/README.txt','Open index.html in a modern browser. No server or network connection required. Research software only.\n');console.log('Built standalone offline browser app: dist/index.html');
