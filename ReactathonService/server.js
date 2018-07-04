"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var dbConnect_1 = require("./dbutils/dbConnect");
var schema_1 = require("./model/schema");
var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname, '/assets');
app.use(express.static(publicDir));
var schema = schema_1.project.createSchema(dbConnect_1.db);
dbConnect_1.db.updateSchema(schema_1.project.getModel()); // create missing collections
var server = new graphql_yoga_1.GraphQLServer({ schema: schema, context: function () { return ({ authRoles: ['users'] }); } });
server.start(function () { return console.log('Server is running on http://localhost:4000/'); });
app.listen(4001);
