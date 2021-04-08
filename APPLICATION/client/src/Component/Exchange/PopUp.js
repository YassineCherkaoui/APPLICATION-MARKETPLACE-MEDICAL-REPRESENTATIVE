import { useState} from 'react';
import { useHistory  } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

function Home() {
 
   
    const history=useHistory();


    const IdClient=localStorage.getItem('IdClient');

    const id=localStorage.getItem('id');

    const LastPriceexchange=localStorage.getItem('LastPrice');
    



    const [LastPrice, setLastPrice] = useState();
    
    // console.log(LastPrice);
const handleSubmit = (e) => {

    e.preventDefault();
    const Bid = {LastPrice,idBid:IdClient};

    if(LastPrice < LastPriceexchange){
        toastr.info('PLEAS ADD MORE')
    }else{
    axios.put(`http://localhost:8080/bid/update/${id}`,Bid)
    .then(res => {
    if(res.error){
    return false
    }else if(LastPrice > LastPriceexchange){
    // console.log(res.data);
    history.push('/exchange')
    toastr.info('Your Bid added Please wait untinll time ends')
    }
    })
    }
}
    return (
<div className="flex flex-wrap justify-center mt-8">
  <div className="w-full lg:w-6/12 px-4">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
<form onSubmit={handleSubmit}>
      <div className="flex-auto p-5 lg:p-10">
          
        <h4 className="text-2xl font-semibold">Welcome {IdClient}</h4>
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
          What You Want To Bid
        </p>
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
          Last Bid : {LastPriceexchange} MAD
        </p>
        <div className="relative w-full mb-3 mt-8">
          <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">Bid</label>
          <input type="number" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Bid" style={{transition: 'all 0.15s ease 0s'}} 
                      value={LastPrice}
                      onChange={e => setLastPrice(e.target.value)}
          />
        </div>
        <div className="text-center mt-6">
          <button type="submit" className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" style={{transition: 'all 0.15s ease 0s'}}>
            Bid Now
          </button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>



    
      );
    }
    
    export default Home;