import'./styles/loginsup.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function LoginSuperAdmin() {




    return(
        


<div className="container-fluid">
    <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-6 mx-auto">
                            <h3 className="display-4">WELCOME BACK SUPER ADMIN!!</h3> <br></br>
                            <form>
                                <div className="form-group mb-3"> <input id="inputEmail" type="text" placeholder="UserName" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/> </div>
                                <div className="form-group mb-3"> <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"/><br></br></div>
                                 <button type="submit" className="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          )
        }
        export default LoginSuperAdmin;