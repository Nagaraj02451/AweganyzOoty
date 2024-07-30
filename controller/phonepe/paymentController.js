const formdata = require("../../Scheema/formdata");

const nodemailer = require("nodemailer");
// console.log(process.env.EMAIL);
// console.log(process.env.PASSWORD);
const newPayment = async (req, res) => {

    try {

        const {Name  ,Email , destination ,company , number , industry , service , message} =
        req.body;
      const newOrderCon = formdata({
        Name : Name,
        Email : Email,
        destination:destination,
        company:company,
        number:number,
        industry:industry,
        service:service,
        message:message,
        
      });
  
     const condata =  await newOrderCon.save();
      res.send({
        msg: condata
        
      });
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: Email ,  
        subject: "Conformation from Aweganyz",
        html: `
        <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">

        <br >
    
    <p style="padding:1px">  Name : ${ Name}  ,</p>
    <p style="padding:2px">Email : ${Email} , </p>
    <p  style="padding:2px">destination : ${destination}  ,</p>
    <p  style="padding:2px">company : ${company}</p>
    <p  style="padding:2px">number : ${number}</p>
    <p  style="padding:2px">industry : ${industry}</p>
    <p  style="padding:2px">company : ${company}</p>
    <p  style="padding:2px">service : ${service}</p>
     
     </div>
          
    
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
  
    })
    const mailOptionsB = {
        from: process.env.EMAIL,
        to: "hello@aweganyz.com" ,  
        subject: "Enquiry Details",
        html: `
        <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">

        <br >
  
    <p style="padding:1px">  Name : ${ Name}  ,</p>
    <p style="padding:2px">Email : ${Email} , </p>
    <p  style="padding:2px">destination : ${destination}  ,</p>
    <p  style="padding:2px">company : ${company}</p>
    <p  style="padding:2px">number : ${number}</p>
    <p  style="padding:2px">industry : ${industry}</p>
    <p  style="padding:2px">company : ${company}</p>
    <p  style="padding:2px">service : ${service}</p>
     
     </div>
          
          
    
      `
    };
  
    transporter.sendMail(mailOptionsB, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
  
    })
  
  
   
       
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}



module.exports = {
    newPayment,

}
