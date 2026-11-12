import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const name of ['index.html','app.mjs','style.css'])await copyFile(name,'dist/'+name);
console.log('Static dashboard built');
