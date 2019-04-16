const { utils } = require("stylelint");
const { namespace } = require("../../utils");

const ruleName = namespace("comment-check-prefix-browser-hacks");

const messages = utils.ruleMessages(ruleName, {
  expected: "Browser Hack comment is 'HHHack'"
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = utils.validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkComments(comment => {
      const text = comment.text;
      const rawComment = comment.toString();
      const firstFourChars = rawComment.substr(0, 4);

      // Return early if sourcemap
      if (firstFourChars === "/*# ") {
        return;
      }

      if (!/HHHack/i.test(text)) {
        return;
      }

      if (/HHHack/.test(text)) {
        return;
      }

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
