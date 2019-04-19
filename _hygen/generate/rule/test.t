---
to: lib/rules/<%= name %>/test/index.spec.js
---
const rule = require("..");
const { ruleName, messages } = rule;

testRule(rule, {
  ruleName,
  config: [true],
  syntax: "scss",

  accept: [
    {
      code: `
      // HHHack this is hack
      .bar {
        color: #fff;
      }
    `,
      description: "prefix is correct"
    }
  ],

  reject: [
    {
      code: `
      // HhHack this is hack
      .bar {
        color: #fff;
      }
    `,
      line: 2,
      message: messages.expected,
      description: "prefix is incorrect"
    }
  ]
});
