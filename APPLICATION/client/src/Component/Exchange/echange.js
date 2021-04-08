import {useEffect, useState} from 'react';
import { useHistory  } from 'react-router-dom';
import axios from 'axios';
// import React from "react";
function Home() {
  


  const IdClient=localStorage.getItem('IdClient');

// console.log(IdClient + " dqsdfd");

  const history = useHistory();

  const [Echange , setEchange] = useState(null);
  // const [stopTime , setstopTime] = useState(null);
  useEffect(()=>{
  
    axios.get(`http://localhost:8080/seller/product/Echange`)
      .then(function (response) {
        setEchange(response.data)
        // setstopTime(response.data.stopTime)
      }).catch(function (err) {
        console.log(err);
    });
    
  },[])


  let date = new Date().toLocaleString();





  const Bid = (id , LastPrice , stopTime)=>{
    history.push('/Bid');
    localStorage.setItem("IdClient", IdClient);
    localStorage.setItem("id", id);
    localStorage.setItem("LastPrice", LastPrice);

  if(date === stopTime){

    axios.get(`http://localhost:8080/seller/product/Echange`)
      .then(function (response) {

      }).catch(function (err) {
        console.log(err);
    });

  }





  }


  // const token=localStorage.getItem('token');
  // console.log(token + "tokeeen");





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
      <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>



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

        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/Echange">
          <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
          </svg>
          Echange
        </a>

      <div className="order-2 md:order-3 flex items-center" id="nav-content">
        <a className="inline-block no-underline hover:text-black" href="/Home/Login">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <circle fill="none" cx={12} cy={7} r={3} />
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
          </svg>
        </a>
        <h1>Welcome </h1>

        <a className="pl-3 inline-block no-underline hover:text-black" href="/">
          <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
            <circle cx="10.5" cy="18.5" r="1.5" />
            <circle cx="17.5" cy="18.5" r="1.5" />
          </svg>
        </a>
      </div>

    </div>

  </nav>



        <div className="container ml-auto mr-auto flex flex-wrap items-start ml-8">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <h1 className="text-3xl text-center lg:text-4xl text-gray-700 font-extrabold">
              Echange This moment
            </h1>
          </div>
          { Echange && Echange.map(item =>(
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                     
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img src={item.productImg} alt="" className="h-64 ml-auto mr-auto" />
              </figure>
              <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    {item.Titel}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">{item.discription}</span>
                </div>

                <h5 className="text-lg text-white font-light">
                    {item.price} MAD
                  </h5>





                <div className="flex items-center">
                  <div className="text-lg text-white font-light">
                  Last Bid {item.LastPrice} MAD
                  </div>
                  {/* <div>Registration closes in <span id="time">05:00</span> minutes!</div> */}
                <button onClick={() => Bid(item._id , item.LastPrice , item.stopTime )}  className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </button>
                  
                </div>
                
                <h5 className="text-lg text-white font-light">
                   {date}
                  </h5>

                <div className="flex items-center">
                  <div className="text-lg text-white font-light">
                    Item well End at : 
                  {item.stopTime}
                  </div>
                </div>
              </div>
              
            </div>
           
          </div>
   ))}






         
      </div>
      














</div>

    
    
      );
    }
    
    export default Home;
    