const authServices = require("../../../services/authServices")

module.exports = {
    async handleRegister(req, res){
        try {
            const {username, email, password} = req.body;
            const user = await authServices.register(username, email, password);

            if (user.code == 401) {
                return res.status(401).json({
                    status: "FAIL",
                    message: `User with email ${email} already exist, pleas login`
                })
            }
            res.status(201).json({
                status: "OK",
                data: user
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    
    async handleLogin(req, res){
        try {
            const {username, password} = req.body;
            const auth = await authServices.login(username, password);
            if (auth.code == 401) {
                return res.status(401).json({
                    message: auth.message
                })
            }
            else if (auth.code == 404) {
                return res.status(404).json({
                    message: auth.message
                })
            }
            res.status(200).json({
                message: "OK",
                data: auth
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },

    async authorize(req, res, next){
        try {
            const bearerToken = req.headers.authorization;
            if (!bearerToken) {
                res.status(403).json({
                    message: "Wrong Bearer Token"
                });
                return;
            }

            const token = bearerToken.split('Bearer ')[1];

            const user = await authServices.authorize(token)

            if (user.code == "505") {
                return res.status(403).json({
                    message: "Unauthorized"
                });
            }
            else if (!user) {
                return res.status(403).json({
                    message: "Unauthorized"
                });
            }

            req.user = user
            next();

        } catch (error) {
            res.status(400).json({
                message: "NEED AUTHORIZATION",
            });
        }
    },

    whoAmI(req, res){
        const user = req.user;
        res.status(201).json({
            status:"OK",
            data: user
        })
        return
    }
}