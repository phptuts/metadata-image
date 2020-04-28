const extract = require('png-chunks-extract');
const encode = require('png-chunks-encode');
const text = require('png-chunk-text');
const path = require('path');
const fs = require('fs');

const buffer = fs.readFileSync(path.join(__dirname, 'test-image.png'));
const chunks = extract(buffer);

// Add new chunks before the IEND chunk
chunks.splice(-1, 0, text.encode('hello', 'world'));
chunks.splice(-1, 0, text.encode('lorem', 'ipsum'));

fs.writeFileSync(
  path.join(__dirname, 'test-out.png'),
  new Buffer.from(encode(chunks))
);
