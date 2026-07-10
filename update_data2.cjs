const fs = require('fs');
const path = './src/data.ts';
let content = fs.readFileSync(path, 'utf8');

const mainActivityContent = fs.readFileSync('./android-project/app/src/main/java/com/example/webviewapp/MainActivity.kt', 'utf8');
const activityMainContent = fs.readFileSync('./android-project/app/src/main/res/layout/activity_main.xml', 'utf8');
const buildGradleContent = fs.readFileSync('./android-project/app/build.gradle.kts', 'utf8');

content = content.replace(/content: \`package com\.example\.webviewapp[\s\S]*?\}\`/g, 'content: `' + mainActivityContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$') + '`');
content = content.replace(/content: \`<\?xml version="1\.0" encoding="utf-8"\?>[\s\S]*?<\/androidx\.constraintlayout\.widget\.ConstraintLayout>\`/g, 'content: `' + activityMainContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$') + '`');

content = content.replace(/content: \`plugins \{[\s\S]*?espresso\.core\)\}\`/g, 'content: `' + buildGradleContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$') + '`');

fs.writeFileSync(path, content);
console.log('data.ts completely updated!');
