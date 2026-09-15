const fs = require('fs');
const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace URLs in HTML and Remix context
content = content.replace(/https:\/\/x\.com\/ohshinbhat/g, 'https://x.com/ishann_dz');
content = content.replace(/https:\/\/www\.instagram\.com\/ohshiin\//g, 'https://www.instagram.com/ishann_dz/');
content = content.replace(/ohshinb%40gmail\.com/g, 'work.ishann%40gmail.com');
content = content.replace(/https:\/\/www\.linkedin\.com\/in\/ohshinbhat\//g, 'https://www.linkedin.com/in/ishanndz/');
content = content.replace(/https:\/\/github\.com\/ohshinbhat/g, 'https://github.com/ishann-create');

fs.writeFileSync(file, content);
console.log('Updated social links in index.html');
