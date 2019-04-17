const rule = require("..");
const { ruleName, messages } = rule;

testRule(rule, {
  ruleName,
  config: [true],
  syntax: "scss",

  accept: [
    {
      code: `
      .bar {
        // About magic number
        font-size: 16px;

        // About magic number
        line-height: 1.7;
      }
    `,
      description: "There is comment where only before magic number"
    },
    {
      code: `
      .bar {
        // About magic number
        font-size: 16px;

        line-height: $default-line-height;
        margin: var(--default-space);
        // Usually comment
        width: var(--default-width);
      }
    `,
      description: "There is comment where only before magic number"
    }
  ],

  reject: [
    {
      code: `
      .bar {
        font-size: 16px;
      }
    `,
      line: 2,
      message: messages.expected,
      description: "There is not comment where before magic number"
    },
    {
      code: `
      .bar {
        font-size: 16px;
        line-height: 1.7;
      }
    `,
      line: 2,
      message: messages.expected,
      description: "There is not comment where before magic number"
    }
  ]
});
