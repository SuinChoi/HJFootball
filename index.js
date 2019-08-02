const express = require('express'); 
const app = express(); 
const server = require('http').Server(app); 
const port = process.env.PORT || 8686; 

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
server.listen(port, function(){
  // when this server is opened 
  console.log('listening on port ' + port);
});