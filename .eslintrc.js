module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // Autoriser l'utilisation de guillemets doubles
    quotes: [
      "error",
      "double",
      { allowTemplateLiterals: true }
    ],
    // Autoriser la virgule à la fin des déclarations d'objet
    "comma-dangle": ["error", "never"]
  }
}
