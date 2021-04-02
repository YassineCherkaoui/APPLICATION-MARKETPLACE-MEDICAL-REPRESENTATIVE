//__________________CALL MODEL____________________
const Client = require('../Models/Client.models');

const Product = require('../Models/Product.models');

const category = require('../Models/categories.models');

const Payment = require('../Models/Payment.models');
//Call Packages JSON Web Token & BCRYPT
const jwt = require('jsonwebtoken');
//A library to help you hash passwords.
const bcrypt = require('bcrypt');

//______________________get all Product_____________________ 
exports.ProductList = (req, res) => {
    Product.find()
    .then(ClientInfos => {
          res.status(200).json(ClientInfos);
        }).catch(error => {
          console.log(error);
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
};

//______________________get all Categories_____________________ 
exports.GETCATEGORIES = (req, res) => {
    category.find()
      .then(categoryInfos => {
        res.status(200).json(categoryInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error!",
          error: error
        });
      });
  };

  //______________________get Product By Category_____________________ 
exports.getProductById = (req, res) => {
    Product.find({
        category: req.params.category
      })
      .then(Product => {
        res.send(Product);
      }).catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving question."
        });
      });
  };

//______________________Sort by Price Products_____________________ 
exports.Price = (req, res) => {
    Product.find()
    .sort({ price: -1 }).then(ClientInfos => {
        res.status(200).json(ClientInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

//______________________Sort by Price Products_____________________ 
exports.Brand = (req, res) => {
    Product.find()
    .sort({ Titel: 1 }).then(ClientInfos => {
        res.status(200).json(ClientInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

// ______________________get Product by id__________________
exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
        .then(Product => {
          res.status(200).json(Product);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id,
                    error: err
                });                
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " + req.params.id,
                error: err
            });
        });
  };

//-------------------------Add Delivery-----------------------------

exports.PaymentAdd = (req, res) => {
    const payment = new Payment({
        idProduct: req.body.idProduct,
        idSeller: req.body.idSeller,
        idUser : req.body.idUser,
        cardNumber : req.body.cardNumber,
        expareddate : req.body.expareddate,
        cvv : req.body.cvv,
    });
    //Save
    payment.save()
    .then(() => res.json("Payment Makeded successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
  };


//------------------------Client authentication---------------------
  exports.ClientAuth = (req, res) => {
    //10==saltRounds
    bcrypt.hash(req.body.Password, 10, function (err, hashPassword) {
        if (err) {
            res.json({
                error: err
            })
        }
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        const Email = req.body.Email;
        const login = req.body.login;
        const role = "Client";
        const status = "Unvalide";
        const Password = hashPassword;
        const ClientPush = new Client({
            FirstName,
            LastName,
            Email,
            login,
            role,
            status,
            Password
        });
        ClientPush
        
            .save()
            .then(() => res.json("Client ADDED!!!!!"))
            .catch((err) => res.status(400).json("Error :" + err));
    });
}


//-------------------------login Client-----------------------------
exports.ClientLog = (req, res) => {

    let login = req.body.login;
    let Password = req.body.Password;
  
    Client.findOne({
        login: login
      })
      .then(Client => {
  
        if (Client) {
          bcrypt.compare(Password, Client.Password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {
              let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token)
                res.json({
                  token: token
                })
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
  