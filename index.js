const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
if (!isBrowser()) require = require("esm")(module/* , options */);
//
module.exports = require("./lib/Client").default;
