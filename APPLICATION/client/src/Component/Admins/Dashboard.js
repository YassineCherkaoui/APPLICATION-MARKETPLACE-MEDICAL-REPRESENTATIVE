import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link  } from 'react-router-dom';

function Dashboard() {

  const history = useHistory();
  // ---------------------Display the lentgh of delivry----------------------------
  const [Delivry , setDelivry] = useState(null);
  axios.get(`http://localhost:8080/Delivry`)
  .then(function (response) {
    setDelivry(response.data.length)
  }).catch(function (err) {
    console.log(err);
});

  // ---------------------Display the lentgh of product----------------------------
const [product , setProduct] = useState(null);
axios.get(`http://localhost:8080/product`)
.then(function (response) {
  setProduct(response.data.length)
}).catch(function (err) {
  console.log(err);
});

  // ---------------------Display the lentgh of Orders----------------------------
const [Order , setOrder] = useState(null);
axios.get(`http://localhost:8080/order`)
.then(function (response) {
  setOrder(response.data.length)
}).catch(function (err) {
  console.log(err);
});

  // ---------------------Display the name of admin----------------------------
const name=localStorage.getItem('name');

// ---------------Logout admin-------------------
const logOut =()=>{

  localStorage.removeItem('token')
  history.push('/admin');
  }

      return(
    <div className="h-screen flex">
    <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
      transition duration-500 ease-in-out">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
          transition duration-500 ease-in-out text-center">
        MarketPlace
        </h1>
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="./admins/iconadmin.png" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          {name} {' '} Admin
        </span>
      </div>
      <ul>
              <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/AdminDashboard" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Dashboard</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/ProblemOrder" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">List delivery problems</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/ClientOrder" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Confirm orders</span>
            </span>
          </a>
        </li>
                <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out">
          <a href="/Delivery" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Delivery people</span>
            </span>
          </a>
        </li>
        <li className="pl-8 py-2 font-semibold text-green-700 dark:text-gray-400
          hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
          duration-500 ease-in-out ml-8">
          <a href="/AddDelivery" className="focus:text-pink-500 dark-focus:text-pink-400
            focus:outline-none w-full transition duration-500 ease-in-out">
            <span className="flex items-center">
              <span className="ml-4 capitalize">Add delivery</span>
            </span>
          </a>
        </li>
      </ul>
      <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
			<Link  onClick={logOut}><a href="/Logout" class="flex items-center mt-8 ml-8">
				<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
				</svg>
				<span class="ml-4 capitalize font-medium">log out</span>
			</a></Link>
  
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

  
  
  


  
  
<div class="container mx-auto px-6 py-8">
                    <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
    
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
                                        <h4 class="text-2xl font-semibold text-gray-700">{product}</h4>
                                        <div class="text-gray-500">Products</div>
                                    </div>
                                </div>
                            </div>
    
                <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none">
                                            <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                                                stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                                            <path
                                                d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                                                stroke="currentColor" stroke-width="2"></path>
                                        </svg>
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">{Order}</h4>
                                        <div class="text-gray-500">Orders</div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-green-600 bg-opacity-75">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                                                stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                                            <path
                                                d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                                                stroke="currentColor" stroke-width="2"></path>
                                        </svg>
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">{Delivry}</h4>
                                        <div class="text-gray-500">Delivry Man</div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                     </div>
  
  
  
  
  
  
  
  
  
        
      </div>
  
    </main>
    
  </div>

              )

}
export default Dashboard;