const User  = require('../models/user');

// 로그인 후 access token 및 refresh token 발급
exports.login = async(req, res, next) => {
    try{
        const { email, password } = req.body;
        const check = await User.findOne({email});
        if (email) {
            res.status(401).send({"fail" : "해당 이메일이 이미 존재합니다."});
        };

        const refreshToken = jwt.sign({}, 
            process.env.JWT_SECRET, 
            { 
                expiresIn: '14d',
                issuer: 'cotak' 
            });
    }catch(err) {
        next(err);
    }
}