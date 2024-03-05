#Code by Exterminate (@Exterminate5573)
import requests
import re

r = requests.get("https://kahoot.it/")

regex = r"index-.{8}\.js"
match = re.search(regex, r.text).group()

url = "https://assets-cdn.kahoot.it/controller/v2/assets/" + match

index = requests.get(url)

f = open("fakekahoot.js", "wb")
f.write(index.content)
f.close()

f = open("fakekahoot.js", "r", encoding="utf8")
data = f.read()
f.close()

#patch content
f = open("fakekahoot.js", "w", encoding="utf8")
patched = data.replace("maxCollaborationNameLength=15", "maxCollaborationNameLength=99999")
f.write(patched)
f.close()

regex = r"vendor-.{8}\.js"
match = re.search(regex, r.text).group()

vendor = requests.get("https://assets-cdn.kahoot.it/controller/v2/assets/" + match)

# just save it with the same name
f = open(match, "wb")
f.write(vendor.content)
f.close()

regex = r"index-.{8}\.css"
match = re.search(regex, r.text).group()

css = requests.get("https://assets-cdn.kahoot.it/controller/v2/assets/" + match)

# just save it with the same name
f = open(match, "wb")
f.write(css.content)
f.close()

print("Patched successfully!")
