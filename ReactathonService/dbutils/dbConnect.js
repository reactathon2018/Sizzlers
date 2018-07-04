"use strict";
exports.__esModule = true;
var cruddl_1 = require("cruddl");
var db = new cruddl_1.ArangoDBAdapter({
    databaseName: 'sizzlers',
    url: 'http://root:@localhost:8529',
    user: 'root',
    password: 'Verizon@12'
});
exports.db = db;
exports["default"] = db;
