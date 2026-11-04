# PyStudy Lab — Python Learning Hub

A responsive, browser-based learning companion built from the supplied WhatsApp class export, indexing/slicing assignments, and scanned Python project PDF.

## Features
- Topic-based lessons with expandable explanations and code examples
- Assignment library grouped by title/category
- Dedicated 60-question for-loop practice track
- Browser Python terminal powered by Pyodide
- Copy solutions/output and save output/question screenshots as PNG
- Local saved/completed progress via browser localStorage
- Responsive desktop/mobile layout

## Run locally
This is a static site. Open `index.html` in a modern browser, or run:

```bash
python -m http.server 5173
```

Then visit http://localhost:5173. The Python runtime and screenshot utility load from CDNs, so those features need an internet connection.

## Deploy
The GitHub repository is connected to Vercel. Pushing to `main` triggers a deployment. No build command is required; the project serves `index.html` as a static site.

## Notes about source materials
The uploaded ZIP included a WhatsApp chat export, two indexing/slicing DOCX files, six JPG images, and a scanned eight-page Python project PDF. The PDF was image-based, so its visible assignment content was read from rendered pages. Some files mentioned in the WhatsApp export were not included as attachments in this ZIP; the site includes all readable questions available in the supplied archive plus clearly identified additional practice questions.
