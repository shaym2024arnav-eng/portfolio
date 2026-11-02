# Wraps src/page.html into a complete index.html for GitHub Pages.
from pathlib import Path
src = Path("src/page.html").read_text()
head, body = src.split("<!--/head-->", 1)
html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
{head.strip()}
</head>
<body>
{body.strip()}
</body>
</html>
"""
Path("index.html").write_text(html)
print("wrote index.html", len(html), "bytes")
