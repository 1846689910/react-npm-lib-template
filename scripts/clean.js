const shell = require("shelljs");
const Path = require("path");

shell.rm("-rf", Path.resolve("dist"));