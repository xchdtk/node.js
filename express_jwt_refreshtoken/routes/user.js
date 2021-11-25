const user = require('../controllers/user');
const { checkTokens, checkUser } = require('../middlewares/user');
const express = require("express");
const router = express.Router();

router.post('/login', user.login);
router.get('/read', checkTokens, checkUser, user.read);