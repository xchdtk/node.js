var express = require('express');
const admin = require("firebase-admin");

let serAccount = require("./api_key.json");
var app = express();

app.use(express.json());


var server = http.createServer(app);
server.listen(30000, function(error){
 console.log(error);
});

admin.initializeApp({
  credential: admin.credential.cert(serAccount),
});
//여기까지는 늘상 보아왔던 Node.js 의 서버구현 부분이다.

app.post('/message', function(req, res){
 
 console.log(req.body);
 var name = req.body.user_id;
 
 var message = new gcm.Message({
     data: {
         title: 'ZPORT에 오늘 배운 것을 기록 하셨나?',
         message: '얼른 입력하거라'
     }
 });


 var server_api_key = 'Server API Key를 입력합니다.';
 var sender = new gcm.Sender(server_api_key);
 var registrationIds = [];

 var token = '사용자를 식별 할 수 있는 Token 값을 넣습니다.';
 registrationIds.push(token); // 여러명에게 한 번에 전송 가능


  sender.send(message, registrationIds, 3, function (err, result) {
      console.log(result);
  });
 
 res.send("successe"); // 안드로이드 사용자에게 응답을 보내준다.
 
});