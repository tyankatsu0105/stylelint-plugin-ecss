module.exports = {
  plugins: ["../lib/index.js"],
  rules: {
    "ecss/no-extend": [
      true,
      {
        "severity": "warning"
      }
    ]
  }
};