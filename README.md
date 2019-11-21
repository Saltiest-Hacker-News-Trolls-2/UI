# UI

[Product Canvas](https://docs.google.com/document/d/19Azytbftor68XZLK5dcufcPH7mBliFLlNGaShqvltK0/edit?usp=sharing)

# Dependencies
`lessc`

`less-watch-compiler`

`p5.js`

# Setup

p5.js is imported through `<script>` tags in the HTML so that's taken care of. To install the other dependencies simply run `npm i`.

To run the `less-watch-compiler` run `npm run less:watch`.

# Folder Structure

```
├───assets
│   └───icons
├───css
├───js
├───less
└───node_modules
```

# Contributing

Please check out a branch to work on and use the LESS files to update styles rather than touching the `index.css` directly. For modifications to the p5 sketch, please be mindful of performance concerns, particularly on mobile devices.