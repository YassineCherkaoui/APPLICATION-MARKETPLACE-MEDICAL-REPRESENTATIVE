module.exports = function (app) {
    // --------------------Caling Controller File----------------- 
    var superAdmin = require('../Controller/superAdmin');

    //------------------------get all Seller---------------------
    app.get('/seller', superAdmin.SellerList);

    //-------------------confirmer chaque inscription d’un vendeur----------------------
    app.post('/Seller/update', superAdmin.ConfirmerSeller);

    //__________________________add Admins____________________
    app.post('/admin/add', superAdmin.AddAdmins);

    //______________________get all Admins_____________________ 
    app.get('/admin', superAdmin.AdminsList);

    //------------------------SuperAdmin authentication---------------------
    app.post('/SuperAdmin/add', superAdmin.SuperAdminADD);

    //-------------------------login User-----------------------------
    app.post('/SuperAdmin/login', superAdmin.SuperAdminLogin);

    //-------------------------Logout superAdmin-----------------------------
    app.get('/SuperAdmin/logout', superAdmin.SuperAdminLogout);
}