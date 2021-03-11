const fs = require('fs');
let bigArray = Array.from({length: 9000}, () => Math.floor(Math.random() * 10));
fs.writeFileSync('db.json', JSON.stringify(bigArray));