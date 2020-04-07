const { Pool } = require('pg');

const pool = new Pool({
	hosy: 'localhost',
	port: 5432,
	user: 'postgres',
	password: 1234,
	database: 'syslog',
});

module.exports = pool;
