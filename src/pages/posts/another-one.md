---
path: '/posts/another-one'
date: '2017-07-12T17:12:33.962Z'
title: 'Do you really need this?'
---

If you are accustomed to other programing languages than JS, you probably were very distracted by "this" in this language :) In "normal" programming language this always connect to the object in the same context. In java script though ... Context is based on calling scope. Hah, what does it mean? Let's see the example below:

```javascript{numberLines: true}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]
```

<!-- <pre><code> </code></pre> -->
