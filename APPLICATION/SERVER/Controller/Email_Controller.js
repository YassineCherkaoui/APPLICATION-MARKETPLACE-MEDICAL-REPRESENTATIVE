// _____________PACKAGES NODEMAILER___________
const nodemailer = require("nodemailer")

// _____________SEND MAIL___________
exports.Email = async (req, res) => {
      const transport = nodemailer.createTransport({
      service: "gmail",
          auth: {
              user: 'cyassin95@gmail.com',//email
              pass: 'Sanasaida123'//password
          }
      })
  
      await transport.sendMail({
          from: 'flasn@gmail.Com',
          to: "cyassin95@gmail.com",
          subject: "Bought Product",
          html: `<div className="email" style="
          border: 1px solid black;
          padding: 20px;
          font-family: sans-serif;
          line-height: 2;
          font-size: 20px; 
          ">
          <h2>Your Product Bought</h2>
          <p>Thanks for buying our Product<p>
      
           </div>
      `
      })
}

       

           
            
