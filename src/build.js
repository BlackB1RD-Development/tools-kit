const Docma = require('docma');

const docma = new Docma();
const config = {
  "app": {
    "title": "Tools-Kit",
    "routing": "path",
    "entrance": "content:readme"
  },
  "template": {
    "options": {
      "title": {
        "label": "Tools-Kit",
        "href": "/"
      },
      "sidebar": {
        "enabled": true,
        "collapsed": false,
        "outline": "tree",
        "toolbar": true,
        "itemsFolded": true,
        "itemsOverflow": "crop",
        "badges": true,
        "search": true,
        "animations": true
      },
      "navbar": {
        "enabled": true,
        "fixed": true,
        "dark": false,
        "animations": true,
        "menu": [
          {
            "iconClass": "fas fa-book",
            "label": "Docs",
            "items": [
              { "label": "Tools-Kit Docs", "href": "api" },
              { "separator": true },
              { "label": "Read Me", "href": "readme" },
              { "label": "Change Log", "href": "changelog" },
              { "separator": true },
              { "label": "License", "href": "license" },
            ]
          },
          {
            "iconClass": "fas fa-cloud-download-alt",
            "label": "Download",
            "items": [
              {
                "label": "<code>npm i tools-kit</code>",
                "href": "https://www.npmjs.com/package/tools-kit",
                "target": "_blank"
              },
              {
                "label": "Tools-Kit Releases",
                "href": "https://github.com/BlackB1RD-Development/tools-kit/releases",
                "target": "_blank"
              }
            ]
          },
          {
            "iconClass": "fab fa-lg fa-discord",
            "label": "",
            "href": "https://discordapp.com/invite/WgXpB9g",
            "target": "_blank"
          },
          {
            "iconClass": "fab fa-lg fa-github",
            "label": "",
            "href": "https://github.com/BlackB1RD-Development/tools-kit",
            "target": "_blank"
          },
          {
            "iconClass": "fab fa-lg fa-npm",
            "label": "",
            "href": "https://www.npmjs.com/package/tools-kit",
            "target": "_blank"
          }
        ]
      }
    }
  },
  "jsdoc": {
    "encoding": "utf8",
    "recurse": false,
    "pedantic": false,
    "access": null,
    "package": null,
    "module": true,
    "undocumented": false,
    "undescribed": false,
    "ignored": false,
    "hierarchy": true,
    "sort": "alphabetic",
    "relativePath": null,
    "filter": null,
    "allowUnknownTags": true,
    "plugins": []
  },
  "markdown": {
    "gfm": true,
    "tables": true,
    "breaks": false,
    "pedantic": false,
    "sanitize": false,
    "smartLists": true,
    "smartypants": false,
    "xhtml": false,
    "tasks": true,
    "emoji": true
  },
  "src": [
    "../lib/Clients/Hastebin.js",
    "../lib/Managers/Logger.js",
    "../lib/Managers/Color.js",
    "../lib/Utilities/Util.js",
    "../index.js",
    // markdown
    "../*.md"
  ],
  "dest": "../../tools-kit docs",
  "clean": false
};

docma.build(config)
  .then(success => console.log('Documentation is built successfully.'))
  .catch(error => console.log(error));