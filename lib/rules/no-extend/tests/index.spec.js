const rule = require("..");
const { ruleName, messages } = rule;

testRule(rule, {
  ruleName,
  config: [/foo/],
  syntax: "scss",

  accept: [
    {
      code: `
      .foo {
        color: #000;
      }

      .bar {
        color: #fff;
      }
    `,
      description: "Not contain @extend"
    }
  ],

  reject: [
    {
      code: `
      .foo {
        color: #000;
      }

      .bar {
        @extend .foo;
        color: #fff;
      }
    `,
      line: 7,
      message: messages.expected,
      description: "Contain @extend"
    }
  ]
});
