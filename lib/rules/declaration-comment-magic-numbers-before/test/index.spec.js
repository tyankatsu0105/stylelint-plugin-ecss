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
      description: "There is comment where only before magic number",
    },
    {
      code: `
      :root {
        --spacing: 1rem;
      }
    `,
      description: "custom properties in :root should be ignored",
    },
  ],

  reject: [
    {
      code: `
      .bar {
        font-size: 16px;
      }
    `,
      line: 3,
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
      line: 3,
      message: messages.expected,
      description: "There is not comment where before magic number",
    },
    {
      code: `
      body: {
        --spacing: 2rem;
      }
    `,
      line: 3,
      message: messages.expected,
      description:
        "custom properties in other selectors than :root should not be ignored",
    },
  ],
});
