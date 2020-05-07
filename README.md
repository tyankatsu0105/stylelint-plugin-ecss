# stylelint-plugin-ecss

stylelint plugins for [ECSS](http://ecss.io/)

# Rules

## Chapter 8. The Ten Commandments of Sane Style Sheets

- Thou shalt not place inline images in the authoring style sheets

  - [background-no-base64](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/background-no-base64)

- Thou shalt comment all magic numbers and browser hacks
  - [declaration-comment-magic-numbers-before](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/declaration-comment-magic-numbers-before)
  - [comment-check-prefix-browser-hacks](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/comment-check-prefix-browser-hacks)

# Relation

[stylelint\-config\-ecss](https://github.com/tyankatsu0105/stylelint-config-ecss)

# Development

## Make rule

```bash
# generate rule
npm run gen:rule
```

Then, you should add new rule to /lin/rules/index.js

## sandbox

```bash
# make sandbox files
npm run gen:sandbox

# run lint for sandbox
npm run gen:sandbox
```

# LICENSE

MIT
