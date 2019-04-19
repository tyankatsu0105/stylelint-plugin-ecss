const { utils } = require("stylelint");
const { namespace } = require("../../utils");

const ruleName = namespace("background-no-base64");

const messages = utils.ruleMessages(ruleName, {
  expected:
    "Placing inline assets in the authoring style sheets is discouragedInstead. Instead, let the tooling inline the image for you"
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkDecls(/^background/, decl => {
      const { value } = decl;

      if (!/data:image.*base64/.test(value)) {
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
