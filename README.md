# Kazoo
Kazoo is a Chrome extension for Kahoot!, with one express purpose: to make your nickname as long as you want it to be.
## UPDATE:
Kahoot has fixed the original `maxlength` bug
But it's now broken again ;)

Kahoot added a nice JS variable to their index.js file; `maxCollaborationNameLength=15`. Kazoo now automagically swaps out this variable to 999999 length. (by rerouting the index.js request to the js branch of this repo, using jsdelivr.)

## UPDATE 2: 
Kahoot appears to have added a feature to their profanity filter to block any stupidly large usernames (~>1000 characters in my testing, feel free to test yourself), however as this doesn't affect everyday users of the extension using it with good intentions, I will not update the extension to patch this (even tho it is totally patchable -_-)
