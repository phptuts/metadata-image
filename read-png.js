const extract = require('png-chunks-extract');
const text = require('png-chunk-text');
const path = require('path');
const fs = require('fs');

const buffer = fs.readFileSync(path.join(__dirname, 'test-out.png'));
const chunks = extract(buffer);

const textChunks = chunks
  .filter((chunk) => chunk.name === 'tEXt')
  .map((chunk) => text.decode(chunk.data));

console.log(textChunks);
