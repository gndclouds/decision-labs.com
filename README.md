# burq.fun

![Codeship](https://codeship.com/projects/6f19e9e0-16a4-0134-caf4-1e201d51eca6/status?branch=master)

## Install

- `yarn install`

## Run

- In development: `npm run develop`.
- Static build: `npm run build`.

### Adding a project to portfolio

1. open `project.js`
   add an entry to projects array:

```js
{
    className: "click|kindyNow",
    summary:
      "Nullam id dolor id nibh ultricies vehicula ut id elit.:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    links: {
      website: "http://Dapibus.com.au/"
    },
    slug: "dlb",
    title: "Dapibus",
    cover: require("./dlb.gif"),
    theme: {
      background: "#00a5d1"
      // background: "#F7F7F7",
      // light: true // Invert text color.
    }
```

Add the logo or image in the directory `src/data/`

Create a the directory for relevant project page.

```bash
slug="dlb"
mkdir -p src/pages/work/${slug}
# Copy an existing project as a template

cp -r src/pages/work/landuse/* src/pages/work/${slug}/

$ ll src/pages/work/${slug}/
total 16
drwxr-xr-x  5 shoaib  staff   160B Mar 20 14:33 img
-rw-r--r--  1 shoaib  staff   1.9K Mar 20 14:33 index.jsx
-rw-r--r--  1 shoaib  staff    47B Mar 20 14:33 styles.module.css
```

Edit the `index.jsx` and `img` for the project

change the filter to find the project meta data

```js
const project = projects.find(p => p.slug === "dlb");
```
