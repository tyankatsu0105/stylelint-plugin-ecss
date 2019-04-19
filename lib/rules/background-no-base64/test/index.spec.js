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
        background: url('path/to/img.png');
        background-image: url('path/to/img.png');
      }
    `,
      description: "background does not includes data:image"
    }
  ],

  reject: [
    {
      code: `
      .bar {
        background: url(data:image/gif;base64,foobarfoobarfoobar);
      }
    `,
      line: 3,
      message: messages.expected,
      description: "background includes data:image"
    },
    {
      code: `
      .bar {
        background-image: url(data:image/gif;base64,foobarfoobarfoobar);
      }
    `,
      line: 3,
      message: messages.expected,
      description: "background includes data:image"
    }
  ]
});
