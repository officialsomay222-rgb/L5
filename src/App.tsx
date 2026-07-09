/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { androidProjectFiles } from './data';
import { Check, Copy, FileCode2, TerminalSquare, Github, Download } from 'lucide-react';

export default function App() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile = androidProjectFiles[activeFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-950 text-neutral-200 font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900">
        <div className="flex items-center gap-3">
          <TerminalSquare className="w-6 h-6 text-emerald-500" />
          <h1 className="text-xl font-medium tracking-tight text-white">Android Project Ready</h1>
        </div>
        <div className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Ready for GitHub Actions
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center bg-[#0d1117] p-8 overflow-y-auto">
          <div className="max-w-2xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-neutral-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-xl border border-emerald-500/20">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Your Android project is generated!</h2>
                  <p className="text-neutral-400 mt-1">I have created the actual Kotlin and Gradle files directly in the file system.</p>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-300">
                <p>
                  To compile your app using GitHub Actions and get your APK:
                </p>
                <ol className="list-decimal list-inside space-y-3 bg-neutral-950 p-6 rounded-lg border border-neutral-800">
                  <li>Click the <strong>Settings (Gear) icon</strong> in the top right corner of AI Studio.</li>
                  <li>Select <strong className="text-white">Export to GitHub</strong> and follow the prompts to create a new repository.</li>
                  <li>Go to your new repository on GitHub.com and click the <strong>Actions</strong> tab.</li>
                  <li>The <strong className="text-white">Android CI</strong> workflow will automatically run and build your app.</li>
                  <li>Once completed, you can download the <strong>app-debug.apk</strong> from the Artifacts section!</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-neutral-950 p-6 flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">What's included in the project:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <FileCode2 className="w-4 h-4 text-emerald-500" />
                  <span>MainActivity.kt</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <FileCode2 className="w-4 h-4 text-emerald-500" />
                  <span>build.gradle.kts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <FileCode2 className="w-4 h-4 text-emerald-500" />
                  <span>activity_main.xml</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Github className="w-4 h-4 text-emerald-500" />
                  <span>.github/workflows/android.yml</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

