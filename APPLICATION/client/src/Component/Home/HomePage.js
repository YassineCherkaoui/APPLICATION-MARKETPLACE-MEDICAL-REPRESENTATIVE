import '../index.css'
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import React from "react";
function Home() {

  const IdClient=localStorage.getItem('IdClient');
  const token=localStorage.getItem('token');
  
  const history = useHistory();
//----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/products`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


const [category , setcategory] = useState(null);
useEffect(()=>{

  axios.get(`http://localhost:8080/category`)
    .then(function (response) {
      setcategory(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

const getIdProduct = (category)=>{
  localStorage.setItem('idProduct',category);
  history.push('/sousProduct');


}

const Checkout = (product)=>{
  localStorage.setItem('idProducttobuy',product);
  history.push('/Home/CheckOut');
  console.log(product);

}



// if(IdClienté === IdClienté){
//   let div = document.getElementById("text")

//   div.innerHTML = "hhhh"

// }

// let cont = document.getElementById("content")
// const IdCliente=localStorage.getItem('IdClient');

// window.onload = function() {
//   CheckLog();
//   function CheckLog(){
//     var div = document.getElementById("text")
//     if (IdCliente != null && IdCliente.length > 0) {
//       div.innerHTML='log out'
//     }
//   };
// }


// ---------------Logout admin-------------------
const logOutt =()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('IdClient')
  localStorage.removeItem('role')
  history.push('/Home/Login');
  }




const echange = () => {
  localStorage.setItem("IdClient", IdClient);
  localStorage.setItem("token", token);
  history.push('/exchange');
}















  return (
    <div>

  {/*Nav*/}
  <nav id="header" className="w-full z-30 top-0 py-1">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>

          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          { category && category.map(item =>(
            <Link onClick={() => getIdProduct(item._id)}><li><p className="inline-block no-underline hover:text-black hover:underline py-2 px-4">{item.CategoryName}</p></li></Link>
            ))}
          </ul>

        </nav>
      </div>
      <div className="order-1 md:order-2">
        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
          <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
          </svg>
          MarketPlace
        </a>
      </div>
      <div className="order-2 md:order-3 flex items-center" id="nav-content">
        <a className="inline-block no-underline hover:text-black" href="/Home/Login">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <circle fill="none" cx={12} cy={7} r={3} />
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
          </svg>
        </a>
        <h1>Welcome <div id="content">{IdClient}</div> </h1>




        <a className="pl-3 inline-block no-underline hover:text-black" href="/">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
        </a>
      </div>
      <span >
      {/* <Link onClick={logOut} id="text"><a href="/log/Logout" class="flex items-center mt-8 ml-8" >LogOut</a></Link>  */}
      <Link  onClick={logOutt} ><a href="/log/Logout" class="flex items-center">
				<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
				</svg>
				<span class="ml-4 capitalize font-medium" id="test">Logout</span>
			</a></Link>
       </span>


       <span >
      {/* <Link onClick={logOut} id="text"><a href="/log/Logout" class="flex items-center mt-8 ml-8" >LogOut</a></Link>  */}
      <Link  onClick={echange} ><a href="/exchange" class="flex items-center">
				<span class="ml-4 capitalize font-medium" id="test">Bid Page</span>
			</a></Link>
       </span>

    </div>

  </nav>

     
  <section className="bg-white py-8">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
            Store
          </a>
          <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/Home/Sortbyprice">Shorting by price</a></li>
          <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/Home/Sortbyname">Shorting by Name</a></li>
          </ul>
        </nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">ENGLISH</a></li>
            <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Arabe</a></li>
          </ul>
        </div>
      </nav>
      { product && product.map(item =>(

      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <a href="/">
          <img className="hover:grow hover:shadow-lg" alt="img" src={item.productImg} />
          <div className="pt-3 flex items-center justify-between">
            <p className>{item.Titel}</p>
          </div>
          <p className="pt-1 text-gray-900">{item.price} MAD</p>
          <p className="pt-1 text-gray-900">By {item.idSeller}</p>
          <p className="pt-1 text-gray-400">TAGS: {item.tags}</p>
          <Link onClick={() => Checkout(item._id)}><button class="bg-green hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow content-center w-40 mt-8 ml-2">
            BUY
        </button></Link>
        <Link onClick={() => Checkout(item._id)}><button class="bg-green hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow content-center w-40 mt-8">
            ADD TO CART
        </button></Link> 
        </a>
      </div>
            ))}
      </div>
      
  </section>
  
  
</div>



  );
}

export default Home;
