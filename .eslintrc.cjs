module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    'commonjs': true,
    'node': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "requireConfigFile": false,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "error",
    "react/prop-types": 0
  }
}
