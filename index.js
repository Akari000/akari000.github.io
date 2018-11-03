
var express=require("express");
var expressSession=require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app=express();
// var pg=require('pg');     //DB
var ejs=require('ejs');
const http = require('http');
const fs = require('fs');
// var knex = require('knex')({
// 	client: 'pg',
// 	connection: process.env.DATABASE_URL
//   });

app.set('view engine', 'ejs');

app.use('/',express.static('views'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession({
	secret:'Secret',
	resave:false,
	saveUninitialized:false
}));
// app.use(flash());

// app.use(function (req, res, next) {	
// 	//console.log('Request URL:', req.originalUrl);
// 	//console.log('Time:', Date.now());
// 	next();
// });

// our-teachers
app.get('/our-teachers',function (req, res) {
	res.render('top/our-teachers', { title: 'our-teachers', URL: "/"});
});

// about
app.get('/about',function (req, res) {
	res.render('top/about', { title: 'About', URL: "/"});
});
// the-studio
app.get('/the-studio',function (req, res) {
	res.render('top/the-studio', { title: 'the-studio', URL: "/"});
});

// join
app.get('/join',function (req, res) {
	res.render('top/join', { title: 'join', URL: "/"});
});

// event
app.get('/event',function (req, res) {
	res.render('top/event', { title: 'event', URL: "/"});
});

//faq
app.get('/faq',function (req, res) {
	res.render('top/faq', { title: 'faq', URL: "/"});
});



// home
app.get('/',function (req, res) {
	res.render('top/index');
});

//var server=app.listen(3000,'127.0.0.1',()=>{
var server=app.listen(process.env.PORT||3000,()=>{
	var host=server.address().address;
	var port=server.address().port;
	console.log('app litens at https://%s:%s',host,port);
	console.log(server.address())
});

//options

// // ensure login
// const ensureLogin = (options) => {
// 	if (typeof options == 'string') {
// 		options = { redirectTo: options }
// 	}
// 	options = options || {};
// 	var url = options.redirectTo || '/';
// 	var setReturnTo = (options.setReturnTo === undefined) ? true : options.setReturnTo;
// 	return function(req, res, next) {
// 		if (!req.isAuthenticated || !req.isAuthenticated()) {
// 			if (setReturnTo && req.session) {
// 			req.session.returnTo = req.originalUrl || req.url;
// 			}
// 			req.flash('info','ログインが必要です');
// 			return res.redirect(url);
// 		}
// 		next();
// 	}
// }





// // user/home
// app.get('/user/home',ensureLogin(),function (req, res) {
// 	var words;
// 	var timeline =[];
// 	var setting;
	
// 	knex.select("*").from("users").where('id',req.user.id).then(function(rows){
		
// 		setting=rows[0].setting;
// 		words=rows[0].wordlist;
// 		username=rows[0].twitter_screen_name;
// 		rows[0].interests.forEach(function (value) {
// 			if(value.orientation in setting.filter.orientation && value.activation in setting.filter.activation) timeline.push(value);
// 		});
// 		setting.rpi.forEach(async function(data){
			
// 			if(!data.name && data.pass){
// 				pass=data.pass;
// 			}
// 			if(!data.pass){
// 				pass=uuidv1();
// 				setting.rpi.push({"name": 0,"pass":pass});
// 				await knex('users').where('id',req.user.id).update({setting: JSON.stringify(setting)});
// 			}else{
// 				pass=0;
// 			}
			
// 		});
// 		res.render('user/home', { title: 'Home',id :req.user.id, pass: pass, words: words, timeline: timeline, username: username, messages: req.flash('info')});
// 	});	
// });

// // user/setting
// app.get('/user/setting', ensureLogin(),function (req, res) {
// 	knex.select("*").from("users").where('id',req.user.id).then(async function(rows){
// 		var words=rows[0].wordlist;
// 		var setting=rows[0].setting;
// 		var username=rows[0].twitter_screen_name;
// 		var pass=0;
		
// 		setting.rpi.forEach(function(data){
// 			//console.log(data);
// 			if(!data.name && data.pass){
// 				pass=data.pass;
// 			}
// 		});
// 		if(!pass){
// 			pass=uuidv1();
// 			setting.rpi.push({"name": 0,"pass":pass});
// 			await knex('users').where('id',req.user.id).update({setting: JSON.stringify(setting)});
// 		}
// 		res.render('user/setting', { title: 'Setting',id :req.user.id, pass: pass, words: words, username: username ,setting: setting, messages: req.flash('info')});
// 	});	
// });

// // change users setting 
// app.post('/user/edit', async function(req, res) {
// 	var result = await knex.select("*").from("users").where('id',req.user.id).then(function(rows){
// 		/*setting*/ 
// 		var　setting;
// 		setting=rows[0].setting;
// 		//orientation: [1,2,3]

// 		setting.filter.orientation=(req.body.orientation);
// 		setting.filter.activation=(req.body.activation);
// 		if(setting.wordlist_num!=Number(req.body.wordlist_num)) setting.wordlist_num=Number(req.body.wordlist_num);

// 		return setting;
// 	});
	
// 	await knex('users').where('id',req.user.id).update({ setting: JSON.stringify(result)});
// 	req.flash('info','設定を変更しました');
// 	res.redirect('/user/setting');
// });

