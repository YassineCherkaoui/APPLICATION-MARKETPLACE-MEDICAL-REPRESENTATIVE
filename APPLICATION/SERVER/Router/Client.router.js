module.exports = function (app) {

    // --------------------Calling Controller File----------------- 
    var Client = require('../Controller/Client');


    //------------------------get all Product---------------------
    app.get('/products', Client.ProductList);

    //------------------------get all Catigories---------------------
    app.get('/category', Client.GETCATEGORIES);

    // ______________________get Product by id__________________
    app.get('/products/:category', Client.getProductById);

    // ______________________get Product by Sort__________________
    app.get('/Price', Client.Price);
        // ______________________get Product by Sort__________________
    app.get('/Name', Client.Brand);

    // ______________________get Product by id__________________
    app.get('/product/:id', Client.getProductById);

    // ______________________MakePayment__________________
    app.post('/Home/Checkout/Payment', Client.PaymentAdd);

    // ______________________MakePayment__________________
    app.post('/Home/SignUp', Client.ClientAuth);
    //-------------------------login Client-----------------------------
    app.post('/Home/SignIn', Client.ClientLog);
}