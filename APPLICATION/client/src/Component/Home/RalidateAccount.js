import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
const ValidateAccount = () => {

	const history = useHistory();

    const {token} = useParams();

    useEffect(()=>{

        axios.put(`http://localhost:8080/activateAccount/${token}`)
        .then(function (response) {
         
          history.push('/Home/Login');
          toastr.info('Your Account Activated!')
        
        }).catch(function (err) {
          console.log(err);
      });
      
      },[history,token])

    return ( 
        <>
        <h1>your account is valid, you can login now  </h1>
        </>
     );
}
 
export default ValidateAccount;