const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

emailSchema = z.string().email();
passwordSchema = z.string().min(6);

function jwtSign(username,password){
    const usernameCheck = emailSchema.safeParse(username);
    const passwordCheck = passwordSchema.safeParse(password);

    if(!(usernameCheck.success && passwordCheck.success)) return null;
    const token = jwt.sign({username}, jwtPassword)
    return token; 
}

const resSign = jwtSign("merin@gmail.com", "123456");
console.log(resSign)


function jwtDecode(token){
    const decoded = jwt.decode(token)
    if(decoded) return true
    return false
}

const resDecode = jwtDecode(resSign)
console.log(resDecode)
