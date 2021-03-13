const fs = require('fs');

const marked = require('marked');

try {
  const data = fs.readFileSync('./src/tutorials/sample.md', 'utf8');
  console.log(marked(data));
} catch (e) {
  console.log('Error:', e.stack);
}
