# Docs for chrome extension

## Installation:
Depends on browser. Chrome (and a few others?) will not allow a random .crx file, but Chromium derivatives like
Brave, Edge and Opera all seem to work fine (tested on Opera and Edge)

Just open the .crx file with the browser of choice.
If it fails, you can load the extension unpacked in developer mode:

1. Turn on developer mode in your browser's extensions menu
2. Download the code inside this directory (if you can see `manifest.json` then you're fine)
3. Load the directory that you downloaded the code into (again, look for `manifest.json`)

(And just don't load it into your Downloads folder, ok?)

NOTE: Recently Kazoo has stopped working when not running unpacked. Not sure why, probably MV3.

## Usage:
No usage! Kazoo will automagically reroute the `index.js` request.
# FAQ

### Wll you make a Firefox extension?
spam me in the issues section if you wanna see this

### Whoa, how did you hack this?
It works by waiting as a rootkit in the nickname text input
in order to break the machine's control over... no, no; it just reroutes a web request. That's all it is.
