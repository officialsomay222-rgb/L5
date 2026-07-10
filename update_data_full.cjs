const fs = require('fs');
const path = './src/data.ts';

const mainActivityContent = fs.readFileSync('./android-project/app/src/main/java/com/example/webviewapp/MainActivity.kt', 'utf8');
const activityMainContent = fs.readFileSync('./android-project/app/src/main/res/layout/activity_main.xml', 'utf8');
const buildGradleContent = fs.readFileSync('./android-project/app/build.gradle.kts', 'utf8');
const manifestContent = fs.readFileSync('./android-project/app/src/main/AndroidManifest.xml', 'utf8');

const newContent = `export interface CodeFile {
  name: string;
  language: string;
  content: string;
}

export const androidProjectFiles: CodeFile[] = [
  {
    name: 'MainActivity.kt',
    language: 'kotlin',
    content: \`${mainActivityContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$')}\`
  },
  {
    name: 'activity_main.xml',
    language: 'xml',
    content: \`${activityMainContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$')}\`
  },
  {
    name: 'AndroidManifest.xml',
    language: 'xml',
    content: \`${manifestContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$')}\`
  },
  {
    name: 'build.gradle.kts (app)',
    language: 'kotlin',
    content: \`${buildGradleContent.replace(/\\`/g, '\\`').replace(/\\$/g, '\\$')}\`
  },
  {
    name: 'themes.xml (Light)',
    language: 'xml',
    content: \`<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Base.Theme.WebViewApp" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="android:statusBarColor">@android:color/transparent</item>
        <item name="android:navigationBarColor">@android:color/transparent</item>
    </style>

    <style name="Theme.WebViewApp" parent="Base.Theme.WebViewApp" />
</resources>\`
  },
  {
    name: 'themes.xml (Dark)',
    language: 'xml',
    content: \`<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Base.Theme.WebViewApp" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="android:statusBarColor">@android:color/transparent</item>
        <item name="android:navigationBarColor">@android:color/transparent</item>
    </style>
</resources>\`
  }
];
`;

fs.writeFileSync(path, newContent);
console.log('data.ts perfectly updated');
