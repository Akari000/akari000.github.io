
pg=require('pg');
const client=new pg.Client('postgres://postgres:example@localhost/sample')

client.connect();

function hello(){
	client.query('SELECT $1::text as message',['Hello world'],(err,res)=>{
		console.log(err?err.stack:res.rows[0].message);
	});
}

function version(){
	client.query('SELECT version()',(err,res)=>{
//		console.log(res);
		console.log(err?err.stack:res.rows[0]);
	});
}


function sendQuery(query,value){
	console.log(query,value);
	client.query(query,value,(err,res)=>{
		console.log(res);
		if(err)	console.log(err);
	});
}

function getUsersTable(){
	client.query('select * from users;',(err,res)=>{
//		console.log('res',res,'err',err,res['rows']);
		console.log(res['rows']);
		return res['rows'];
//		if(res !== undefined) return res['rows'];
//		else	return null;
	});
}


/*
//sendQuery('create table users3(username char(80) ,message char(80));');
sendQuery('select * from users3;');
sendQuery('insert into users3(username,message) values($1,$2);',['sakaknedo','hello world']);
//sendQuery('insert into users values("sakakendo","hello world")')
sendQuery('select * from users3;');
*/

//version();
//console.log('getUsersTable',getUsersTable());
//getUsersTable();


module.exports.hello=hello;
module.exports.version=version;
module.exports.sendQuery=sendQuery;
module.exports.getUsersTable=getUsersTable;

