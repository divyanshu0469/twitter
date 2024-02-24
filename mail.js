var nodemailer =require('nodemailer');
async function sendVarifyMail(email_to){
    var transporter=nodemailer.createTransport({
        service:"gmail",
        host:"mail.gmail.com",
        port:465,
        secure:false,
        auth:{
            user:"divyanshuthegreat101@gmail.com",
            pass:"uetyazqipdctxqpj"
        }
    });
    try{
        var info= await transporter.sendMail({
            from:"divyanshu0469.be21@chitkara.edu.in",
            to:email_to,
            subject:"test mail",
            html:"<b>This mail is going to use for testing purpose!!!</b><br/><a href=\"http:localhost:8080/varify?"+email_to+"\">Click here</a>"
        });
    }
    catch(err){
        console.log(err);
    }

    if(info.messageId)
        return true;
    else
        return false;
    
}

module.exports=sendVarifyMail