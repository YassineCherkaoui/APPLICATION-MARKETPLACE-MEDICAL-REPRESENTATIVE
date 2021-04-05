import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import "toastr/build/toastr.css";
import toastr from 'toastr';
function PacksSeller() {
  
	const history = useHistory();
  // ---------------------Display the name of admin----------------------------
  const name=localStorage.getItem('name');

  const Proack = (id)=>{
    // localStorage.setItem('idproduct',id);
    // console.log(name);

    history.push('/BuyPack');

    
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
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="./seller/sellericon.png" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          Seller <br></br> Basic<br></br>
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

  
  
  

<div className="pricing-table-2  py-6 md:py-12 item-center">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-medium text-black mb-4 md:mb-6">Pricing Plans</h1>
      <p className="text-black-500 xl:mx-12">You have 2 plans to choose from for using Our Store. You can use it for your personal or commercial projects. Just don't forget to share our website or give attribution.</p>
    </div>
    <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6 ml-56">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Pro</h4>
            <p className="text-gray-600">For small projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className><span className="text-4xl font-semibold">3000 MAD</span> /MON</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Upto 50 produits</li>
              <li>Livraison Standard</li>
            </ul>
            <div className="mt-6 py-4">
              <Link  onClick={Proack}><button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get PACK</button></Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Expert</h4>
            <p className="text-gray-600">For multi large scale projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className><span className="text-4xl font-semibold">5000 MAD</span> /MON</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Unlimited Product</li>
              <li>Express delivery by MarketStore</li>
            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get PACK</button>
            </div>
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
        export default PacksSeller;