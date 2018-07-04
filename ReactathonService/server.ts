import { GraphQLServer } from 'graphql-yoga';
import {db} from './dbutils/dbConnect';
import {project} from './model/schema';
var express = require('express');
var app = express();
var publicDir = require('path').join(__dirname,'/assets');
app.use(express.static(publicDir));
const schema = project.createSchema(db);
db.updateSchema(project.getModel()); // create missing collections
const server = new GraphQLServer({ schema, context: () => ({ authRoles: [ 'users' ]}) });
server.start(() => console.log('Server is running on http://localhost:4000/'));
app.listen(4001);