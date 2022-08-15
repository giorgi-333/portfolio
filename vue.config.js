const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/raime/" : "/",
    outputDir: path.resolve(__dirname, "./docs"),
    // assetsDir: "../../static/SPA"
};
