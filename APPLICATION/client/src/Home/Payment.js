import {useEffect, useState} from 'react';
import { useHistory  } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
function Payment(){

    const idProducttobuy=localStorage.getItem('idProducttobuy');
    const pricefinal=localStorage.getItem('pricefinal');
    const itemnumber = localStorage.getItem('itemnumber');




    const [product2 , setProduct] = useState();
    useEffect(()=>{
    
      axios.get(`http://localhost:8080/product/${idProducttobuy}`)
        .then(function (response) {
            console.log(response.data);
          setProduct(response.data)
        }).catch(function (err) {
          console.log(err);
      });
      
    })



    const history=useHistory();
const [idProduct, setidProduct] = useState();
const [idSeller, setidSeller] = useState();
const [idUser, setidUser] = useState();
const [cardNumber, setcardNumber] = useState();
const [expareddate, setexpareddate] = useState();
const [cvv, setcvv] = useState();




// idProduct: req.body.idProduct,
// idSeller: req.body.idSeller,
// idUser : req.body.idUser,
// cardNumber : req.body.cardNumber,
// expareddate : req.body.expareddate,
// cvv : req.body.cvv,


const handleSubmit = (e) => {

    e.preventDefault();
    const Payment = {idProduct,idSeller,idUser,cardNumber,expareddate,cvv};
    axios.post('http://localhost:8080/Home/Checkout/Payment',Payment)
    .then(res => {
    if(res.error){
    return false
    }else{
    console.log(res.data);
    history.push('/')
    toastr.info('Thanks For Buying Our Product')
    }
    })
    }



    const [ setSent ] = useState(false)
	// const [  text, setText ] = useState("")
    // const [  Score ] = useState(0)
    // let text = Score;
	const handleSend = async (e) => {
		setSent(true)
        const data = "win";
        axios.post(`http://localhost:8080/send_mail`,data)
          
		.then(res => {
		    if(res.error){
				return false
			}else{
				
				 console.log(res.data);
			}
		 
		})
	}



    return(
<form onSubmit={handleSubmit}>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg ml-96 mt-64">
  <div className="lg:col-span-2">
    <h2 className="text-sm font-medium">Payment Method</h2>
    <div className="bg-white rounded mt-4 shadow-lg">
      <div className="flex items-center px-8 py-5">
        <a href="https://www.paypal.com/ma/home" class="bg-blue-800 text-white hover:bg-blue-700 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <img alt="paypal"  class="fill-current w-4 h-4 mr-2" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_paypal-512.png"></img>
  <span>PAYPAL</span>
</a>
        {/* <label className="text-sm font-medium ml-4">PayPal</label> */}
      </div>
      <div className="border-t">
        <div className="flex items-center px-8 py-5">
          <input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio" />
          <label className="text-sm font-medium ml-4">Credit Card</label>
        </div>
        <div className="grid grid-cols-2 gap-4 px-8 pb-8">
          <div className="col-span-2">
            <label className="text-xs font-semibold" htmlFor="cardNumber">Card number</label>
            <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000" 
            value={cardNumber}
            onChange={e => setcardNumber(e.target.value)}
            />  
          </div>

          <div className>
            <label className="text-xs font-semibold" htmlFor="expareddate">Expiry Date</label>
            <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY" 
            value={expareddate}
            onChange={e => setexpareddate(e.target.value)}
            />  
          </div>
          <div className>
            <label className="text-xs font-semibold" htmlFor="cvv">CVC/CVV</label>
            <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." 
            value={cvv}
            onChange={e => setcvv(e.target.value)}
            />  
{/* è_________________test */}
<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." 
            value={idProduct}
            onChange={e => setidProduct(e.target.value)}
            />  


<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." 
            value={idSeller}
            onChange={e => setidSeller(e.target.value)}
            />  
<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." 
            value={idUser}
            onChange={e => setidUser(e.target.value)}
            />  

          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2 className="text-sm font-medium">Purchase Summary</h2>
    <div className="bg-white rounded mt-4 shadow-lg py-6">
      <div className="px-8">
        <div className="flex items-end">
        <span className="text-sm font-semibold">Price</span>
          <span className="text-sm ml-auto font-semibold">{ product2 && product2.price} MAD</span>
        </div>
        <div className="flex items-end mt-8">
        <span className="text-sm font-semibold">Items</span>
          <span className="text-sm ml-auto font-semibold">{itemnumber}</span>
        </div>
        </div>
      <div className="px-8 mt-4">
      </div>
      <div className="px-8 mt-4 border-t pt-4">
        <div className="flex items-end justify-between">
          <span className="font-semibold">Total Price</span>
          <span className="font-semibold">{pricefinal}</span>
        </div>
      </div>
      <div className="flex items-center px-8 mt-8">
        <input id="termsConditions" type="checkbox" />
        <label className="text-xs text-gray-500 ml-2" htmlFor="termsConditions">I agree to the terms and conditions.</label>
      </div>
      <div className="flex flex-col px-8 pt-4">
        <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700" onClick={handleSend}>Make Payment</button>
      </div>
    </div>
  </div>
</div>
</form>


    )

}

export default Payment;