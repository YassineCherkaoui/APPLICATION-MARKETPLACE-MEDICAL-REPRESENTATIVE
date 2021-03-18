import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
// ______________HOME__________________
import Home from '../Home/Home';
// ______________SUPERADMIN__________________
//Admins
import superDash from '../SuperAdmin/dashboard';
import ListAdmins from '../SuperAdmin/ListAdmins';
import addadmins from '../SuperAdmin/addAdmins';
import LoginSup from '../SuperAdmin/login';
//Seller
import ListSeller from '../SuperAdmin/ListSeller';
import EditeSeller from '../SuperAdmin/EditSeller';
// ______________ADMIN__________________
import AdminDash from '../Admins/Dashboard';
import AdminOrder from '../Admins/Order';
import ConfirmOrder from '../Admins/confirmorder';
import ProblemOrder from '../Admins/ProblemOrder';
import Delivery from '../Admins/DeliveryList';

// ______________SELLERS__________________
import Loginseller from '../Seller/loginseller';
import BecomeSeller from '../Seller/becomeseller';
import DashboardSeller from '../Seller/dashboard-seller';
import Statistics from '../Seller/statistics';
import SellerProduct from '../Seller/seller-product';
import AddSellerProduct from '../Seller/Add-Product';
import Packs from '../Seller/Packs';



// ______________Private Route__________________
// import Categories from '../Dash/Categories';

function Routes() {
  return (
<BrowserRouter>
      <Switch> 
      {/* // ______________Public Route__________________ */}
          <Route  path="/" exact component={Home}/> 
      {/* // ______________SupperAdmin Route__________________ */}
        {/* Admins */}
          <Route  path="/superdash" exact component={superDash}/> 
          <Route  path="/AdminList" exact component={ListAdmins}/> 
          <Route  path="/addadmins" exact component={addadmins}/> 
          <Route  path="/LoginSup" exact component={LoginSup}/> 
          {/* seller */}
          <Route  path="/ListSeller" exact component={ListSeller}/> 
          <Route  path="/editseller" exact component={EditeSeller}/> 
      {/* // ______________Admins Route__________________ */}
      <Route  path="/AdminDash" exact component={AdminDash}/> 
      <Route  path="/ClientOrder" exact component={AdminOrder}/> 
      <Route  path="/ConfirmOrder" exact component={ConfirmOrder}/>
      <Route  path="/ProblemOrder" exact component={ProblemOrder}/>  
      <Route  path="/Delivery" exact component={Delivery}/>  
      {/* // ______________Seller Route__________________ */}
      <Route  path="/LoginSeller" exact component={Loginseller}/> 
      <Route  path="/BecomeSeller" exact component={BecomeSeller}/>  
      <Route  path="/DashboardSeller" exact component={DashboardSeller}/>  
      <Route  path="/Statistics" exact component={Statistics}/>  
      <Route  path="/SellerProduct" exact component={SellerProduct}/> 
      <Route  path="/AddSellerProduct" exact component={AddSellerProduct}/> 
      <Route  path="/Packs" exact component={Packs}/> 




          {/* // ______________Private Route__________________ */}
          {/* <PrivateRoute  path="/quiz" exact component={Quiz}/>  */}
      </Switch>
</BrowserRouter>
  );
}
export default Routes;