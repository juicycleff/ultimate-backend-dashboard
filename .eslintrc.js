/* eslint-env node */
module.exports = {
  extends: [require.resolve('eslint-config-fusion')],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./"]
      }
    },
  },
};
