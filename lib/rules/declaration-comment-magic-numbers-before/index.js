const { utils } = require("stylelint");
const isVariable = require("stylelint/lib/utils/isVariable");
const isAfterComment = require("stylelint/lib/utils/isAfterComment");
const { namespace } = require("../../utils");

const ruleName = namespace("declaration-comment-magic-numbers-before");

const messages = utils.ruleMessages(ruleName, {
  expected: "Magic number requires comments before the line"
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkDecls(decl => {
      const value = decl.value;

      // ignore variables
      if (isVariable(value) || value.startsWith("$")) {
        return;
      }

      // ignore value that not number
      if (
        !/\d+\.?\d*(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)|\.\d+/.test(
          value
        )
      ) {
        return;
      }

      if (isAfterComment(decl)) {
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
