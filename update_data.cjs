const fs = require('fs');
const path = './src/data.ts';
const content = fs.readFileSync(path, 'utf8');

const mainActivityContent = fs.readFileSync('./android-project/app/src/main/java/com/example/webviewapp/MainActivity.kt', 'utf8');
const activityMainContent = fs.readFileSync('./android-project/app/src/main/res/layout/activity_main.xml', 'utf8');

let newContent = content.replace(/content: \`package com\.example\.webviewapp[\s\S]*?\}\`/g, 'content: `' + mainActivityContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$') + '`');

newContent = newContent.replace(/content: \`<\?xml version="1\.0" encoding="utf-8"\?>[\s\S]*?<\/androidx\.constraintlayout\.widget\.ConstraintLayout>\`/g, 'content: `' + activityMainContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$') + '`');

newContent = newContent.replace(/implementation\(libs\.androidx\.webkit\)/g, 'implementation(libs.androidx.webkit)\n    implementation("androidx.swiperefreshlayout:swiperefreshlayout:1.1.0")');

fs.writeFileSync(path, newContent);
console.log('data.ts updated successfully');
