const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//get API
app.get('/api/syslogs', async (req, res) => {
	try {
		const allSyslogs = await pool.query('SELECT * FROM systemevents');
		res.json(allSyslogs.rows);
	} catch (err) {
		console.log(err);
	}
});

//get API from search
app.get('/api/:query', async (req, res) => {
	try {
		const { query } = req.params;
		const filter = await pool.query('SELECT * FROM systemevents WHERE message LIKE $1', [
			`%${query}%`,
		]);
		res.json(filter.rows);
	} catch (err) {
		console.log(err);
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
