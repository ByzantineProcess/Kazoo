# Kazoo
Kazoo is a set of tools for Kahoot!

After I found a small bug in Kahoot!'s nickname textbox, I decided to put it here.

## The small bug
Turns out, Kahoot!'s nickname length limit is now defined (as of V2) IN THE HTML.
Anyone with half a day's experience in Inspect Element can get a nickname over 15 characters.

Simply remove the `max-length="15"` tag in the nickname textbox HTML.
