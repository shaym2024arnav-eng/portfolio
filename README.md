# Arnav Shyam: Portfolio

Personal portfolio site: a single static page with no build step and no dependencies.

Live at **https://shaym2024arnav-eng.github.io/portfolio**

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole site: markup, styles and script |
| `photo.jpg` | Portrait used in the hero and the About section |
| `resume.pdf` | Opened by the Resume button |
| `assets/projects/` | Screenshots shown on the project cards |
| `og-image.jpg` | Preview image shown when the link is shared on LinkedIn, WhatsApp etc. |
| `favicon.svg` | Browser tab icon |
| `src/page.html` | Editable source; run `python build.py` to regenerate `index.html` |

You can also edit `index.html` directly and ignore `src/` and `build.py`.

## Update the live site (GitHub Pages)

This replaces the old multi-page site in the `portfolio` repository.

```bash
git clone https://github.com/shaym2024arnav-eng/portfolio.git
cd portfolio

# remove the old pages
git rm about.html projects.html contact.html style.css script.js

# copy in index.html, photo.jpg, resume.pdf, og-image.jpg, favicon.svg, README.md, build.py
# and the assets and src folders
# from this download, replacing the old index.html

git add .
git commit -m "Redesign portfolio"
git push
```

GitHub Pages republishes within a minute or two. If the old design still shows, hard-refresh the
page (Ctrl+Shift+R).

## Common edits

- **Change the photo:** replace `photo.jpg` and keep the same file name.
- **Update the resume:** replace `resume.pdf`.
- **Change a project screenshot:** replace the matching file in `assets/projects/` (1120×700 works best).
- **Add a project:** copy one `<article class="project">` block in the Projects section and change
  the text and the GitHub link.
- **Change the rotating titles:** edit the three `<span>` lines inside `<h1 ... id="titles">` and
  the matching labels inside `id="scrub-steps"`.
