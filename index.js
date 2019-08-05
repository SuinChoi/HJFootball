const express = require('express'); 
const app = express(); 
const server = require('http').Server(app); 
const port = process.env.PORT || 8686; 

app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/main', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/player', function(req, res){
  res.sendFile(__dirname + '/player.html');
});
app.get('/id=johny', function(req, res){
  res.sendFile(__dirname + '/player-jg.html');
});
app.get('/id=hyun', function(req, res){
  res.sendFile(__dirname + '/player-hg.html');
});
app.get('/calendar', function(req, res){
  res.sendFile(__dirname + '/schedule.html');
});
app.get('/notice', function(req, res){
  res.sendFile(__dirname + '/notice.html');
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});
server.listen(port, function(){
  // when this server is opened 
  console.log('listening on port ' + port);
});