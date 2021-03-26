// import { useHistory } from "react-router-dom";
// import toastr from 'toastr';
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
function LoginSuperAdmin() {







    return(
        

    <div className="h-screen flex">
    <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
      transition duration-500 ease-in-out">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
          transition duration-500 ease-in-out text-center">
        MarketPlace
        </h1>
        <img className="h-16 w-16 rounded-full object-cover mt-4" src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T210A2MPA3176PT17X4Y38D1024191917FS3826/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2/superadmin-super-admin-administrator-rules-tee-mens-t-shirt.jpg" alt="Logo" />
        <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
          duration-500 ease-in-out text-center">
          Admin <br></br>
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
              <span className="ml-4 capitalize">Add delivery people</span>
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
        <h2 className="text-4xl font-medium capitalize">Admins</h2>
        <div className="mt-1 mb-4 flex items-center justify-between">
          <span className="text-sm">
  
            <strong>199</strong>
  
          </span>
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

  
  
  

        <div className="container my-12 mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {/* Column */}
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      {/* Article */}
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="/">
          <img alt="Placeholder" className="block h-auto w-full" src="https://cdn.shop-pharmacie.fr/images/doliprane-paracetamol-1000-mg-comprimes-effervescents-F10000168-p10.jpg" />
        </a>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="/">
              Dolipran
            </a>
          </h1>
          <p className="text-grey-darker text-sm">
            14/4/19
          </p>
           <p className="text-grey-darker text-sm">
            Statius : Inconfirme
          </p>
        </header>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
           <p className="text-grey-darker text-sm">
            Adresse : Agadir Morocco
          </p>
            <p className="text-grey-darker text-sm">
            Phone: 0621114160
          </p>
           <p className="text-grey-darker text-sm">
            180MAD
          </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="/">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
            <p className="ml-2 text-sm">
              Yassine Cherkaoui
            </p>
          </a>
          <form action="//">
        <select class=" bg-white dark:bg-gray-800 text-black-400 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full">
		<option class="pt-6" value="Unconfirmed">Unconfirmed</option>
		<option value="Confirmed">Confirmed</option>
        </select>
                <button type="submit"
              class="p-2 bg-grey-600 text-black-400 rounded-full  transition ease-in duration-200 focus:outline-none">
        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
          <path fill="/000" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                  C15.952,9,16,9.447,16,10z" />
        </svg>
      </button>
          </form>
        </footer>
        
      </article>
      {/* END Article */}
    </div>
   
  </div>
</div>

  
  
  
  
  
  
  
  
  
  
  
        
      </div>
  
    </main>
    
  </div>



    )

}
export default LoginSuperAdmin;