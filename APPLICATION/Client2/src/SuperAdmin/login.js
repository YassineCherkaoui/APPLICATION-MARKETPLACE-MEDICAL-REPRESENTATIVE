import '../index.css'
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import React, { useState } from 'react';
import axios from 'axios';


function LoginSuperAdmin() {

	const history = useHistory();
	const [login, setlogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {login,password};

	axios.post(`http://localhost:8080/SuperAdmin/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/AdminList');
       localStorage.setItem('name',login);
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.login}`)

			}else{
  
                    // Calling toast method by passing string 
                    toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
                
                
			}
		 
		})
	}
 
    return(
        <div className="w-full flex flex-wrap">
        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome Super Admin.</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="username" className="text-lg">UserName</label>
                <input type="text" id="text" placeholder="Your UserName.." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                value={login}
                onChange={e => setlogin(e.target.value)}
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">Password</label>
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" onClick={toastr} defaultValue="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
            </form>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" alt="img" src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T210A2MPA3176PT17X4Y38D1024191917FS3826/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2/superadmin-super-admin-administrator-rules-tee-mens-t-shirt.jpg" />
        </div>
      </div>
      

          )
        }
        export default LoginSuperAdmin;