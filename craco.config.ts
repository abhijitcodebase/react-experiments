const { CracoAliasPlugin } = require("react-app-alias");
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};

export {};
