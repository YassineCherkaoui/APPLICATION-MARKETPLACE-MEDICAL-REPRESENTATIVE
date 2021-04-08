// import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import toastr from 'toastr';
import "toastr/build/toastr.css";

  function AddSellerProduct() {


    const history=useHistory();

const [productImg, setproductImg] = useState();
const [Titel, setTitel] = useState();
// const [category, setcategory] = useState();
// const [LastPrice, setLastPrice] = useState();
const [price, setprice] = useState();
const [stopTime, setstopTime] = useState();
const [discription, setdiscription] = useState();
// const [idSeller, setidSeller] = useState();
const [datestope, setdatestope] = useState();



const handleSubmit = (e) => {
    // ---------------------Display the name of admin----------------------------
    const name=localStorage.getItem('name');

  e.preventDefault();
  const admindata = {productImg,Titel,category:"noncategories",LastPrice:0,price,stopTime,discription,idSeller:name,idBid:"noone",datestope};
  axios.post('http://localhost:8080/seller/product/Echange/add',admindata)
  .then(res => {
  if(res.error){
  return false
  }else{
  console.log(res.data);
  history.push('/SellerProduct')
  toastr.info('Bid Exchange added')
  }
  })
  }







		return (
			
<div>
  {/* Component Code */}
  <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
    <form className="p-10" onSubmit={handleSubmit}>
	      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
           Product Image
          </label>
		            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file"  accept="image/*" name="image-upload" id="input" 

value={productImg}
onChange={e => setproductImg(e.target.value)}
                
                />
        </div>
      </div>
            <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Title
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Product Title" 
			  value={Titel}
			  onChange={e => setTitel(e.target.value)}
          />
        </div>
      </div>


      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Price
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="MAD/$" 
			  value={price}
			  onChange={e => setprice(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            TimeOut
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" placeholder="MAD/$" 
			  value={stopTime}
			  onChange={e => setstopTime(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          datestope
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="time" 
			  value={datestope}
			  onChange={e => setdatestope(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Description
          </label>
          <textarea rows={10} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" defaultValue={"        \n      "} 
			  value={discription}
			  onChange={e => setdiscription(e.target.value)}
          />
        </div>
        <div className="flex justify-between w-full px-3">
          <button type="submit" className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
            Publich
          </button>
        </div>
      </div>
      {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="16" 
			  value={idSeller}
			  onChange={e => setidSeller(e.target.value)}
          /> */}
    </form>
    <div className="w-full object-cover h-auto  lg:w-full md:h-screen bg-cover bg-center bg-fixed " style={{backgroundImage: 'url(./seller/addproductbg.jpg)'}} />
  </div>

</div>
          )
        }
        
        export default AddSellerProduct;