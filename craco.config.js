const path = require("path");
module.exports = {
  webpack: {
    alias: {
       "@common": path.join(path.resolve(__dirname, "./src/common/")),
       "@stores": path.join(path.resolve(__dirname, "./src/stores/")),
       "@pages": path.join(path.resolve(__dirname, "./src/pages/")),
       "@styles": path.join(path.resolve(__dirname, "./src/styles/")),
       "@assets": path.join(path.resolve(__dirname, "./src/assets/")),
     },
  },
};