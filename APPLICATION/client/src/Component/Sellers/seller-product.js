import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import "toastr/build/toastr.css";
import toastr from 'toastr';
function SellerProduct() {

  const history = useHistory();


  // const [check , setcheck] = useState();

  // ---------------------Display the name of admin----------------------------
  const name=localStorage.getItem('name');

  //----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/product/seller/${name}`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[name])


// const name=localStorage.getItem('name');

const [productlentgh , setProductlentgh] = useState(null);
axios.get(`http://localhost:8080/product/seller/${name}`)
.then(function (response) {
  setProductlentgh(response.data.length)
}).catch(function (err) {
  console.log(err);
});


// ---------------Delete admin-------------------

const deleteProduct = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`http://localhost:8080/product/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
  
})
}

}
const getIdProduct = (id)=>{
localStorage.setItem('idproduct',id);
history.push('/editProduct');

}


// const Username=localStorage.getItem('name');



// const [productlentgh2 , setProductlentgh2] = useState();
const checkUser = () => {
  axios.get(`http://localhost:8080/product/seller/${name}`)
    .then(function (response) {
      const idSeller= response.data.length;
      if(idSeller > 10){

        toastr.error('You Account Limmited to 10 please Upgread Your Account')
        history.push('/Packs');
      }else{
        history.push('/AddSellerProduct');
      }
    })
  
   
    }


  
// const checkUser = ()=>{

//   axios.get(`http://localhost:8080/seller/name/${name}`)
//   .then(function (response) {
//     // setcheck(response.data.status)
//     const checkuser = response.data.type;
//     console.log(checkuser);
//   },[])

//   }

  
  




    return(
    
      <div className="h-screen flex">
  <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
      transition duration-500 ease-in-out">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
          transition duration-500 ease-in-out text-center">
        MarketPlace
        </h1>
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="./seller/sellericon.png" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          {name} Seller <br></br> Basic<br></br>
        </span>
                  <a class="font-semibold text-gray-700 dark:text-gray-400
           mb-2 transition
          duration-500 ease-in-out text-green-400" href="/Packs">Upgrade</a>
      </div>
      <ul>
              <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/DashboardSeller" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Dashboard</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/SellerProduct" className="focus:text-pink-500 dark-focus:text-pink-400 focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Product</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-green-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out ml-8">
          			<Link  onClick={checkUser}><a href="/AddSellerProduct" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Add Product</span>
            </span>
          </a></Link>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Packs" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Buy Packs</span>
            </span>
          </a>
        </li>
                <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Statistics" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Statistics</span>
            </span>
          </a>
        </li>
      </ul>
      <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
        <a href="/Logout" class="flex items-center">
          <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
              2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
              0 012-2h9z"></path>
          </svg>
          <span class="ml-4 capitalize font-medium">log out</span>
        </a>
  
      </div>
    </nav>
  
  <main className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
		duration-500 ease-in-out">
    <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out">
      <div className="mt-1 mb-4 flex items-center justify-between">
      
        <div className="flex items-center select-none">
          <span className="hover:text-pink-500 cursor-pointer mr-3">
            <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
              <path d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </span>
          <input className="bg-transparent focus:outline-none" placeholder="Search in activity" />
        </div>
        
      </div>
      <div className="border dark:border-gray-700 transition duration-500
				ease-in-out" />

<div class="mt-4">
                        <div class="flex flex-wrap -mx-6">
                            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none"
                                            >
                                            <path
                                                d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">{productlentgh}</h4>
                                        <div class="text-gray-500">Product</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>

      <div className="flex flex-col mt-2">

      { product && product.map(item =>(

        <div className="flex flex-row mt-2">
          <div className="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
            {/* card */}



            <div className="flex">
              <img className="h-12 w-12 object-cover" alt="profimg" src={item.productImg}></img>
              <div className="flex flex-col ml-6">
                <span className="text-lg font-bold">{item.Titel}</span>
                <div className="mt-4 flex">
                  <div className="flex">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                       {item.Qty}	in stock
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      {item.currentDate}
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      {item.price} MAD	
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
            
            <div className="flex flex-col -mt-10 mr-20">

                
              <span className="font-semibold text-gray-500
								dark:text-green-300">
                {item.status}
              </span>
                
            
            </div>
          
          </div>

          <Link onClick={()=> getIdProduct(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >

            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            
          </Link>

          <Link onClick={() => deleteProduct(item._id)} className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </Link>
          
        </div>

        ))}
        
      </div>

      {/* <Link onClick={()=> check()}><a
        href="/AddSellerProduct"
					class="flex items-center focus:outline-none border
					rounded-full py-2 px-6 leading-none border-green-500
					select-none hover:text-pink-600 hover:bg-green-300 my-3">
					<span>Add Product</span>
				</a></Link> */}










      
    </div>

  </main>
  
</div>

          )
        }
        export default SellerProduct;