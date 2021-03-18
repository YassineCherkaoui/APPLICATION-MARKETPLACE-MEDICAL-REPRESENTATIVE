//__________________CALL MODEL____________________
const SuperAdmin = require('../Models/superAdmin.models');
const Admin = require('../Models/Admin.models');
const Seller = require('../Models/Seller.models');
//Call Packages JSON Web Token & BCRYPT
const jwt=require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt=require('bcrypt');

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

//________________________confirmer chaque inscription d’un vendeur____________________
exports.ConfirmerSeller = (req, res) => {
    // Find seller By ID and update it
    Seller.updateOne(
                     {_id: req.params.id},
                      {
                        status: req.body.status
                      }
                    )
    .then(() => res.status(201).json("seller confirmed successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//__________________________add Admin____________________
exports.AddAdmins = (req, res) => {
  bcrypt.hash(req.body.Password, 10, function(err, hashPassword) {
    if (err) {
      res.json({error : err})    
    }
const FirstName = req.body.FirstName;
const LastName = req.body.LastName;
const Email = req.body.Email;
const login = req.body.login;
const Password = hashPassword;
const adminPush = new Admin({
  FirstName,
  LastName,
  Email,
  login,
  Password
});
adminPush
  .save()
  .then(() => res.json("Admin authentication successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
});
};

//______________________get all Admins_____________________ 
exports.AdminsList = (req, res) => {
  Admin.find()
  .then(AdminInfos => {
        res.status(200).json(AdminInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
};

//------------------------SuperAdmin authentication---------------------
exports.SuperAdminADD = (req, res) => {
  //10==saltRounds
  bcrypt.hash(req.body.Password, 10, function(err, hashPassword) {
      if (err) {
        res.json({error : err})    
      }
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const login = req.body.login;
  const Password = hashPassword;
  const SuperadminPush = new SuperAdmin({
    FirstName,
    LastName,
    Email,
    login,
    Password
  });
  SuperadminPush
    .save()
    .then(() => res.json("SupperAdmin authentication successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
});
}

//-------------------------login User-----------------------------

exports.SuperAdminLogin = (req, res) => {

  let login=req.body.login;
  let Password=req.body.Password;

SuperAdmin.findOne({login : login})
.then(superadmin => {

if(superadmin){
  bcrypt.compare(Password, superadmin.Password, function(err, result){
      if (err) {
          res.json({
            error : err
          })
        }
     if(result){
        let token=jwt.sign({login :login},'tokenkey',(err,token) => {
          res.cookie("token", token)  
          res.json({
              token : token
          })
        })
     }else{
         res.json({
             message : 'password incorrect try again !!'
         })
     }
  })
}else{
  res.json({
      message : 'SuperAdmin not found'
  })
}
}).catch((err) => res.status(400).json("Error :" + err));
}

//-------------------------Logout Admin---------------------------

exports.SuperAdminLogout = (req, res) => {
  const deconnect = res.clearCookie("token")

  res.json({
      message: 'SuperAdmin is Signout !!'
  })
}
