module.exports = function (app) {
    // --------------------Caling Controller File----------------- 
    var seller = require('../Controller/Seller');

    //------------------------Add Seller---------------------
    app.post('/seller/add', seller.SellerADD);

    //------------------------get all Seller---------------------
    app.get('seller/', seller.SellerList);
    //-------------------------login User-----------------------------
    app.post('/seller/login', seller.SellerLogin);
}