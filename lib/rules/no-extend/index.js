const { utils } = require("stylelint");
const { namespace } = require("../../utils");

const ruleName = namespace("no-extend");

const messages = utils.ruleMessages(ruleName, {
  expected: "Avoid @extends"
});

const rule = function() {
  return (root, result) => {
    root.walkAtRules(decl => {
      if (decl.name !== "extend") {
        return;
      }

      utils.report({
        message: messages.expected,
        node: decl,
        result,
        ruleName
      });
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
