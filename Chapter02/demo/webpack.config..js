/**
 * Once we have installed webpack, we need
 * this file to tell Webpack how to compile 
 * our files and where to place the resulting
 * bundle.
 * 
 * This tells Webpack that app.js is the entry point
 * to our application and it shoudl crawl all the
 * dependencies when creating the output file, bundle.js.
 * Webpack will by default place bundle.js in the dist directory.
 */
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    watch: false
};