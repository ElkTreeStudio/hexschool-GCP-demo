const express = require('express');

const app = express();

const PORT = 3000;


app.get('/', function (req, res) {
   res.send("Hello World!! hexschool.");
 });

app.listen(PORT, function(){
	console.log(`Start in ${PORT}`);
});