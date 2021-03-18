import'./styles/addstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function AddAdmins() {



    return(
<body className="staytunt">
<div className="container cont">

<div className="form-div">
  <div className="title">
    <h1 className="text-uppercase title-text"> ADD ADMINS</h1>
  </div>

  <div className="form-container">
    <form action="#" className="text-uppercase">
      <label for="fname">First name:<br></br>
        <input type="text" className="input"required/>
      </label><br></br>
      <label for="fname">Last name:<br></br>
        <input type="text" className="input"required/>
      </label><br></br>
      <label for="fname">Email:<br></br>
        <input type="email" className="input"required/>
      </label><br></br>
      <label for="fname">Login:<br></br>
        <input type="text" className="input" required/>
      </label><br></br>
      <label for="fname">Password:<br></br>
        <input type="password" className="input"required/>
      </label><br></br>
      <label for="submit">
        <button type="submit" className="text-uppercase button">Submit</button>{" "}
        {/* <br></br> */}
        <a href="/AdminList" className="text-uppercase button">Cancel</a>
      </label><br></br>
    </form>
  </div>

</div>
</div>
</body>
          )
        }
        export default AddAdmins;