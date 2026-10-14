const fs = require('fs');
const imgPath = "C:/Users/TRANGTRAN/.gemini/antigravity/brain/3a7ec9ed-c8e1-48d6-938c-3c985692daea/.user_uploaded/media_1791986639634_b77facbc.png";
const stats = fs.statSync(imgPath);
console.log("File size:", stats.size);

const fd = fs.openSync(imgPath, "r");
const buf = Buffer.alloc(24);
fs.readSync(fd, buf, 0, 24, 0);
fs.closeSync(fd);
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
console.log("Image dimensions:", width, "x", height);
