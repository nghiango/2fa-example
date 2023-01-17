const path = require("path");
const resolveAliases = {
  "@common": path.join(path.resolve(__dirname, "./src/common/")),
  "@stores": path.join(path.resolve(__dirname, "./src/stores/")),
  "@pages": path.join(path.resolve(__dirname, "./src/pages/")),
  "@styles": path.join(path.resolve(__dirname, "./src/styles/")),
  "@assets": path.join(path.resolve(__dirname, "./src/assets/")),

}
const jestResolveAlias = {
  "@common/(.*)$": "<rootDir>/src/common/$1",
  "@stores/(.*)$": "<rootDir>/src/stores/$1",
  "@pages/(.*)$": "<rootDir>/src/pages/$1",
  "@styles/(.*)$": "<rootDir>/src/styles/$1",
  "@assets/(.*)$": "<rootDir>/src/assets/$1",
}
module.exports = {
  webpack: {
    alias: resolveAliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: jestResolveAlias,
    }
  }
};