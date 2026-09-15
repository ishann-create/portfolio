const fs = require('fs');
const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// The original texts in the HTML
const oldP2 = "I come from a traditional South Indian family";
const newP2 = "I come from a traditional Indian family";

const oldP3 = "I spent six years studying electronics at a college";
const newP3 = "I choose studying electronics at college";

const oldP4_1 = "time in media. I used to work with bands, hospitality, and celebrities.";
const newP4_1 = "time in social media. I used to work with bands, hospitality, and influencers.";

// Replace in HTML and RemixContext
content = content.replace(new RegExp(oldP2, 'g'), newP2);
content = content.replace(new RegExp(oldP3, 'g'), newP3);
content = content.replace(new RegExp(oldP4_1, 'g'), newP4_1);

fs.writeFileSync(file, content);
console.log('Updated about section in index.html');
