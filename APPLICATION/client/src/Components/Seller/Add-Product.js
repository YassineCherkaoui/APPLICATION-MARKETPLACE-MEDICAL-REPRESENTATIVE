// import'./styles/addstyle.css';
// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
function AddSellerProduct() {



    return(
<body className="staytunt">
<div className="container cont">

<div className="form-div">
  <div className="title">
    <h1 className="text-uppercase title-text"> ADD Product</h1>
  </div>

  <div className="form-container">
    <form action="#" className="text-uppercase">
      <label for="fname">Product Name:<br></br>
        <input type="text" className="input"required/>
      </label><br></br>
      <label for="fname">QTY:<br></br>
        <input type="text" className="input"required/>
      </label><br></br>
      <label for="fname">Price:<br></br>
        <input type="text" className="input"required/>
      </label><br></br>
      <label for="fname">Image:<br></br></label>
      <input type="file"required/>


      <label for="submit">
        <button type="submit" className="text-uppercase button">Submit</button>{" "}
        {/* <br></br> */}
        <a href="/SellerProduct" className="text-uppercase button">Cancel</a>
      </label><br></br>
    </form>
  </div>

</div>
</div>
</body>
          )
        }
        export default AddSellerProduct;