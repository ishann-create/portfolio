const fs = require('fs');
const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"title":"hi, im ohshin."/g, '"title":"hi, im Kai."');
content = content.replace(/Ohshin Bhat/g, 'Kai'); 

const newTitle = 'hi, im Kai.';
const newSpans = newTitle.split('').map(char => `<span class="" style="opacity:0.35;filter:blur(8px)">${char}</span>`).join('');

const oldTitle = 'hi, im ohshin.';
const oldSpans = oldTitle.split('').map(char => `<span class="" style="opacity:0.35;filter:blur(8px)">${char}</span>`).join('');

content = content.replace(oldSpans, newSpans);

fs.writeFileSync(file, content);
console.log('Updated index.html');
