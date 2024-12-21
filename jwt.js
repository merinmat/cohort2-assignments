const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

emailSchema = z.string().email();
passwordSchema = z.string().min(6);

function jwtSign(username,password){
    const usernameCheck = emailSchema.safeParse(username);
    const passwordCheck = passwordSchema.safeParse(password);

    if(!(usernameCheck.success && passwordCheck.success)) return null;
    const token = jwt.sign({usernameCheck}, jwtPassword)
    return token; 
}

const resSign = jwtSign("merin@gmail.com", "123456");
console.log(resSign)

function jwtDecode(token){
    const decoded = jwt.decode(token)
    if(decoded.usernameCheck.success) return true
    return false
}

const resDecode = jwtDecode(resSign)
console.log(resDecode)

function jwtVerify(token){
    const verified = jwt.verify(token, jwtPassword);
    if(verified.usernameCheck.success) return true;
    return false;
}

const resVerify = jwtVerify(resSign);
console.log(resVerify)

