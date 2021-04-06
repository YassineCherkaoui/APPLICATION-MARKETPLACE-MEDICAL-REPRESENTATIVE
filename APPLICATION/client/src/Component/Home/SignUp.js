import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
function SignUp() {
    const history = useHistory();

	const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
	const [Email, setEmail] = useState();
    const [login, setlogin] = useState();
    const [Password, setPassword] = useState();
  



    const handleSubmit = (e) => {

    e.preventDefault();
  
    const user = {FirstName,LastName,Email,login,Password};
  
    axios.post(`http://localhost:8080/Home/Signup`, user)
      .then(res => {
          if(res.error){
          return false
        }else{
          
           console.log(res.data);
                 history.push('/Home/Login')
                 toastr.info("Account Added Please check Your Email Account")
        }
      })
    }
    return (
  <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-screen lg:overflow-hidden">
    <div className="hidden lg:block xl:col-span-2 h-full">
      <img src="../clientlog.jpg" alt="back" className="w-full h-full object-cover" id="bg" />
    </div>
    <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 h-full px-6 lg:px-16 xl:px-12 py-8 md:py-16 lg:py-20 lg:overflow-auto">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">PharmaPlace.</span>
      </div>
      <div className="pt-12" id="login-panel">
        <h1 className="text-xl md:text-2xl font-bold leading-tight">Login to your account</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="login-username" className="block items-center text-gray-700">First Name</label>
            <input type="text" id="login-username" placeholder="YASSINE..." className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border appearance-none focus:border-green-500 focus:bg-white focus:outline-none" 
                value={FirstName}
                onChange={e => setFirstName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="login-username" className="block items-center text-gray-700">Last Name</label>
            <input type="text" id="login-username" placeholder="Cherkaoui..." className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border appearance-none focus:border-green-500 focus:bg-white focus:outline-none" 
            value={LastName}
            onChange={e => setLastName(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="login-username" className="block items-center text-gray-700">Email</label>
            <input type="email" id="login-username" placeholder="Enter Your Email..." className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border appearance-none focus:border-green-500 focus:bg-white focus:outline-none" 
            value={Email}
            onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label htmlFor="login-username" className="block items-center text-gray-700">Username</label>
            <input type="text" id="login-username" placeholder="Enter your username" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border appearance-none focus:border-green-500 focus:bg-white focus:outline-none" 
            value={login}
            onChange={e => setlogin(e.target.value)} 
            />
          </div>
          <div className="mt-4">
            <label htmlFor="login-password" className="block text-gray-700">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border appearance-none focus:border-green-500 focus:bg-white focus:outline-none"
            value={Password}
            onChange={e => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 focus:outline-none text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign in</button>
        </form>
        <hr className="my-6 border-gray-300 w-full" />
        <p className="mt-8">Your Already With <a href="/Home/login" className="text-green-500 hover:text-green-700 font-semibold" id="signup-link">Click here</a></p>
      </div>
      
    </div>
  </section>
  
  
          );
  }
  
  export default SignUp;