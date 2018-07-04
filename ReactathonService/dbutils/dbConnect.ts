import { ArangoDBAdapter } from 'cruddl';
const db = new ArangoDBAdapter({
    databaseName: 'sizzlers',
    url: 'http://root:@localhost:8529',
    user: 'root',
    password: 'Verizon@12'
});

export default db;
export { db };