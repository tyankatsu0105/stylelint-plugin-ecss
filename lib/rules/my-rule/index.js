const { isRegExp, isString } = require("lodash");
const { utils } = require("stylelint");
const { namespace } = require("../../utils");

const ruleName = namespace("my-rule");

const messages = utils.ruleMessages(ruleName, {
  expected: "ポンポン"
});

const rule = function(pattern) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, {
      actual: pattern,
      possible: [isRegExp, isString]
    });

    if (!validOptions) {
      return;
    }

    const regexpPattern = isString(pattern) ? new RegExp(pattern) : pattern;

    root.walkAtRules(decl => {
      if (decl.name !== "mixin") {
        return;
      }

      // Stripping the mixin of its arguments
      const mixinName = decl.params.replace(/(\s*?)\((?:\s|\S)*\)/g, "");

      if (regexpPattern.test(mixinName)) {
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
