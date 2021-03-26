function SellerProduct() {




    return(
    
      <div className="h-screen flex">
  <nav className="w-56 bg-white dark:bg-gray-800 select-none overflow-y-auto
		transition duration-500 ease-in-out">
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-light text-green-600 dark:text-green-400 mt-0
				transition duration-500 ease-in-out text-center">
      MarketPlace <br></br>Dashboard
      </h1>
      <img className="h-16 w-16 rounded-full object-cover mt-4" src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T210A2MPA3176PT17X4Y38D1024191917FS3826/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2/superadmin-super-admin-administrator-rules-tee-mens-t-shirt.jpg" alt="Logo" />
      <span className="capitalize mt-2 mb-6 dark:text-gray-400 transition
				duration-500 ease-in-out text-center">
        Yassine SuperAdmin <br></br>
      </span>
    </div>
    <ul>
      <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out">
        <a href="/AdminList" className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out">
          <span className="flex items-center">
            <span className="ml-4 capitalize">ADMINS</span>
          </span>
        </a>
      </li>
      <li className="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out">
        <a href="/ListSeller" className="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out">
          <span className="flex items-center">
            <span className="ml-4 capitalize">Seller</span>
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

          <strong>1776</strong>

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
      <div className="flex flex-col mt-2">



        <div className="flex flex-row mt-2">
          <div className="flex w-full items-center justify-between bg-white
						dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
						dark:border-green-300">
            {/* card */}



            <div className="flex">
              <img className="h-12 w-12 object-cover" alt="profimg" src="https://cdn.shop-pharmacie.fr/images/doliprane-paracetamol-1000-mg-comprimes-effervescents-F10000168-p10.jpg"></img>
              <div className="flex flex-col ml-6">
                <span className="text-lg font-bold">DOLIPRANE</span>
                <div className="mt-4 flex">
                  <div className="flex">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      100 in stock	
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
                      15 aug 2019
                    </span>
                  </div>
                  <div className="flex ml-6">
                    <svg className="h-5 w-5 fill-current
											dark:text-gray-300" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600
											dark:text-gray-300 capitalize">
                      3.00 MAD	
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="flex flex-col -mt-10 mr-20">
              <span className="font-semibold text-green-500
								dark:text-green-300">
                Activate
              </span>
            </div>
            
          </div>

          <a href="/" className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >

            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
            
          </a>

          <a href="/" className="text-center flex flex-col items-center
						justify-center bg-white dark:bg-gray-800
						dark:text-gray-300 ml-1 px-12 cursor-pointer
						hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </a>
          
        </div>



      </div>

      <a
        href="/addadmins"
					class="flex items-center focus:outline-none border
					rounded-full py-2 px-6 leading-none border-green-500
					select-none hover:text-pink-600 hover:bg-green-300 my-3">
					<span>Add Product</span>
				</a>










      
    </div>

  </main>
  
</div>

          )
        }
        export default SellerProduct;