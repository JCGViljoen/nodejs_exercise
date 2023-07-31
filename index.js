const path = require ('path')
console.log(path.join(__dirname, 'index.js'));

const fs = require('fs')
fs.readFile(`./message.txt`, 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
})

const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.type());

