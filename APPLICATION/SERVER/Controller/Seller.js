//__________________CALL MODEL____________________
const Seller = require('../Models/Seller.models');
//Call Packages JSON Web Token & BCRYPT
const jwt=require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt=require('bcrypt');
//------------------------SuperAdmin authentication---------------------
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