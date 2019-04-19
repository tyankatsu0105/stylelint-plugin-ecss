---
to: lib/rules/<%= name %>/index.js
message: |
  - Don't forget to add rule for lib/rules/index.js
---
const { utils } = require("stylelint");
const { namespace } = require("../../utils");

const ruleName = namespace("<%= name %>");

const messages = utils.ruleMessages(ruleName, {
  expected: "error message"
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    // https://api.postcss.org/index.html
    root.walkComments(comment => {

      utils.report({
        message: messages.expected,
        node: comment,
        result,
        ruleName
      });
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
