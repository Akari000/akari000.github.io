
var pg=require('pg');
//const DATABASE_URL=process.env.DATABASE_URL
const DATABASE_URL= 'postgres://postgres:example@db:5432/sample'
var knex = require('knex')({
	client: 'pg',
	connection: DATABASE_URL
  });
//  console.log(process.env.DATABASE_URL);
console.log(knex.select('*').from('sample'));


