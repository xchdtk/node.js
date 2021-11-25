const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const connect = require('./schemas/index');
const User = require('./schemas/users');
connect()
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use(
    session({
        name: "jinsoosession",
        secret: "xchdtk",
        resave: false,
        saveUninitialized: true,
    })
)

// 미들웨어 장착
app.use(passport.initialize());
app.use(passport.session());

// Session 저장
passport.serializeUser((user, done) => {
    console.log(user)
    done(null, user.id)
});

// req.user 저장
passport.deserializeUser((userId, done) => {
    User.findById(userId, function(err, user) {
        console.log(user)
        done(null, user)
    })
})

// LocalStrategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: "password"
},
    function(email, password, done) {
        
         User.findOne({ email }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, { message: "해당 유저가 없습니다."});
            return done(null, user); 
         });
    }
));

app.get('/', (req, res) => {
    res.send("로그인 성공");
})

app.get("/login", (req, res) => {
  // login.html 경로
  const loginTemplate = path.resolve(__dirname, "./public/login.html")

  // html 파일을 제공한다
  res.sendFile(loginTemplate)
})

app.get('/debug', (req, res) => {
    res.json({
        req_session: req.session,
        req_user: req.user
    });
})

app.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}))

app.post('/register', async(req, res) => {
    const { nickname, email, password } = req.body;
    count = await User.collection.count();
    const user = await User.create({
        userId: count + 1,
        nickname: nickname,
        email: email,
        password: password
    })

    res.send({
        user: user, 
        success: "success"
    })
})

app.listen(4000, () => {
  console.log(`http://localhost:4000`)
})