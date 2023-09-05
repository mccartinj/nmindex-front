//db.js


const dotenv = require('dotenv')
dotenv.config()
const pg = require('pg');


const pool = new pg.Pool({
  user: process.env.PG_USER,
  database: process.env.PG_DB,
  password: process.env.PG_PW,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.PG_CACERT,
  }
});

const getLinks = async () => {
  try {
    const res = await pool.query("SELECT link_url FROM links");
    return res.rows;
  } catch (error) {
    console.error(error);
  }
}

const runSearch = async (query) => {
	try{
		const queryDef = {
	  		text: "SELECT page_url, title FROM pages WHERE ts @@ to_tsquery('english', $1);",
	  		values: [query]
	  	}
		const res = await pool.query(queryDef);
		return JSON.stringify(res.rows);
	}
	catch (error) {
		console.log(error);
	}
}

exports.runSearch = runSearch;