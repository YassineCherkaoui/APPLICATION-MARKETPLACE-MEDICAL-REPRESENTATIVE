//__________________CALL MODEL____________________
const Seller = require('../Models/Seller.models');
//Call Packages JSON Web Token & BCRYPT
const jwt=require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt=require('bcrypt');
//------------------------Seller authentication---------------------
exports.SellerADD = (req, res) => {
    //10==saltRounds
    bcrypt.hash(req.body.Password, 10, function (err, hashPassword) {
        if (err) {
            res.json({
                error: err
            })
        }
        const type = "Starter";
        const status = "InActive";
        const Username = req.body.Username;
        const docummant = req.body.docummant;
        const Password = hashPassword;
        const SellerPush = new Seller({
            status,
            type,
            Username,
            docummant,
            Password
        });
        SellerPush
            .save()
            .then(() => res.json("Seller authentication successfully Please Wait untill Admin ACCEPTER Your documments"))
            .catch((err) => res.status(400).json("Error :" + err));
    });
}


//-------------------------login User-----------------------------

exports.SellerLogin = (req, res) => {

    let Username = req.body.Username;
    let Password = req.body.Password;

  Seller.findOne({
    Username: Username
    })
    .then(Seller => {

      if (Seller) {
        bcrypt.compare(Password, Seller.Password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }

          if (result) {

      console.log(result.status);


            if(result.status == "InActive"){
                res.json({
                    message: 'Khedaaaaaaaam !!'
                  })
            }
            
            
            
            else {
            let token = jwt.sign({
                Username: Username
            }, 'tokenkey', (err, token) => {
              res.cookie("token", token)
              res.json({
                token: token
              })
            })
          }


        }
        
        
        
            
        else {
            res.json({
              message: 'password incorrect try again !!'
            })
          }
        })
      } else {
        res.json({
          message: 'Admin not found'
        })
      }
    }).catch((err) => res.status(400).json("Error :" + err));
}

  









//______________________get all Seller_____________________ 
exports.SellerList = (req, res) => {
    Seller.find()
    .then(SellerInfos => {
          res.status(200).json(SellerInfos);
        }).catch(error => {
          console.log(error);
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};