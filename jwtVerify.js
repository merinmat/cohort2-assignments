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

function jwtVerify(token){
    try{
    jwt.verify(token, jwtPassword);
    return true;
    } catch(e){
        console.log("error occured")
    }
    return false;
}

const resVerify = jwtVerify(resSign);
console.log(resVerify)
