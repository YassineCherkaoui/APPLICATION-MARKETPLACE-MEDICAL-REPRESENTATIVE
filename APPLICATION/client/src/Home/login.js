
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';
import "toastr/build/toastr.css";

function Login() {

  
	const history = useHistory();
	const [login, setlogin] = useState();
    const [Password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,Password};

	axios.post(`http://localhost:8080/Home/Signin`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/');
			 toastr.info(' authenticated SuccessFully')

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
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
        <div className="text-right mt-2">
          <a href="/" className="text-sm font-semibold text-gray-7000">Forgot your password ?</a>
        </div>
        <button type="submit" className="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 focus:outline-none text-white font-semibold rounded-lg px-4 py-3 mt-6">Log in</button>
      </form>
      <hr className="my-6 border-gray-300 w-full" />
      <p className="mt-8">New Client ? Welcome <a href="/Home/SignUp" className="text-green-500 hover:text-green-700 font-semibold" id="signup-link">SignUp With Us</a></p>
    </div>
    
  </div>
</section>


        );
}

export default Login;