const fs = require('fs');
let bigArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 10));
bigArray = new Uint8Array(bigArray);
fs.writeFileSync('db.json', JSON.stringify(bigArray));