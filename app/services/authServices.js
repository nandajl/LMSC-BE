const bcrypt = require('bcryptjs');
const userRepositories = require('../repositories/userRepositories');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'Rahasia';

async function encryptPassword(str) {
    try {
        const hash = await bcrypt.hash(str, 10);
        return hash;
    } catch (err) {
        return err.message;
    }
}

async function comparePassword(password, encryptedPassword){
    try {
        const isValid = await bcrypt.compare(password, encryptedPassword);
        return isValid;
    } catch (err) {
        console.log(err);
    }
}

function createWebToken(payload) {
    return jwt.sign(payload, SECRET_KEY);
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}

module.exports = {
    encryptPassword,
    comparePassword,
    createWebToken,
    verifyToken,

    async register(body){
        try {
            const { nim, username, email, password, role } = body
            const encryptedPassword = await encryptPassword(password);
            const checkUser = await userRepositories.findUser({email});
            if (checkUser) {
                return {
                    code: "401"
                }
            }
            let register;
            if (nim) {
                const checkNIM = await userRepositories.findUser({nim});
                if (checkNIM) {
                    return {
                        code: "402"
                    }
                }
                register = {
                    nim,
                    username,
                    email,
                    password: encryptedPassword,
                    role
                };
            }else {
                register = {
                    username,
                    email,
                    password: encryptedPassword,
                    role
                }
            }
            const user  = await userRepositories.create(register);

            return user;
        } catch (error) {
            console.log(error);
        }
    },

    async login(body){
        try {
            let user;
            if (body.username) {
                const {username} = body
                user = await userRepositories.findUser({username});
                if (!user) {
                    return {
                        code: "404",
                        message: "Username tidak terdaftar, silahkan Hubungi Admin"
                    }
                }
                
            }else if (body.nim) {
                const { nim } = body;
                user = await userRepositories.findUser({nim});
                if (!user) {
                    return {
                        code: "404",
                        message: "NIM tidak terdaftar, silahkan registrasi"
                    }
                }
                
            }
            const {password} = body
            const {password: encryptedPassword} = user;

            const isAuthenticated = await comparePassword(password, encryptedPassword);
            if (!isAuthenticated) {
                return {    
                    code: "401",
                    message: "Username atau Password salah"
                }
            }

            const token = createWebToken({
                id: user.id,
                email: user.email,
                role: user.role
            });

            const data = {
                ...user.dataValues,
                token
            }

            return data;

        } catch (error) {
            console.log(error);
        }
    },

    async authorize(token){
        try {
            const payload = verifyToken(token);
            const id = payload?.id;

            const user = await userRepositories.getUser(id);
            return user;

        } catch (error) {
            return {
                code: "505"
            }
        }
    },

    
}