import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import Dashboard from "./Components/Dashboard";
import Adduser from './Components/Pages/Users/Adduser';
import Viewuser from './Components/Pages/Users/Viewuser';

import AddVendors from './Components/Pages/Vendors/AddVendors';
import ViewVendors from './Components/Pages/Vendors/ViewVendors';

import AddClients from './Components/Pages/Clients/AddClients';
import ViewClients from "./Components/Pages/Clients/ViewClients";

import Createpurchaseorder from './Components/Pages/PurchaseOrder/Createpurchaseorder';
import Viewpurchaseorder from './Components/Pages/PurchaseOrder/Viewpurchaseorder';

import CreateQuotation from './Components/Pages/Quotation/CreateQuotation';
import ViewQuotation from './Components/Pages/Quotation/ViewQuotation';
import Newlogin from "./Newlogin";
import Newapp from "./Newapp";
import Layout from "./Layout";

const Routes = () => {
  return (
  
    
    <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/adduser" component={Adduser} />
    <Route path="/Viewuser" component={Viewuser} />
    <Route path="/addVendors" component={AddVendors} />
    <Route path="/ViewVendors" component={ViewVendors} />
    <Route path="/addClients" component={AddClients} />
    <Route path="/ViewClients" component={ViewClients} />
    <Route path="/Createpurchaseorder" component={Createpurchaseorder} />
    <Route path="/Viewpurchaseorder" component={Viewpurchaseorder} />
    <Route path="/CreateQuotation" component={CreateQuotation} />
    <Route path="/ViewQuotation" component={ViewQuotation} />
    </Switch>
  );
};

export default Routes;
