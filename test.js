var fs = require('fs');

var marked = require('marked');

try {
  var data = fs.readFileSync('./src/tutorials/sample.md', 'utf8');
  console.log(marked(data));
} catch (e) {
  console.log('Error:', e.stack);
}
