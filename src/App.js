import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import Auth from './Security/Auth';
import { FiUsers } from 'react-icons/fi';
import {GiHeartKey} from 'react-icons/gi';
import "./Components/Login.css";

import './styles/App.scss';



function App() {
  const [locale, setLocale] = useState('en');
  const [show, setShow] = useState(true);
  const [user, setUser] = useState();
  const [pwd, setpwd] = useState();
    
 const handleSubmit = (e) => {
   
 
  //  if (user == "mazhar" && pwd == "mazhar"){
  //    alert("you are pass");
     activateRoute();
     setShow(!show);
     localStorage.setItem('userName',JSON.stringify(user));
  //  }
  //  else{
  //   alert("you are fail");
  //   deActivateRoute();
  //   e.preventDefault();
  //   return false;
  //  }
 
   console.log('test :');
  //setShow(!show);
 } 
 
 const handleChange = (e) => {
  console.log('Change : ', e.target.value);
  let input = e.target.name;
 
  if (input == "user"){
    setUser(e.target.value);
  } else if (input == "pwd"){
    setpwd(e.target.value);
  }
 }

  const activateRoute = () => {
    Auth.login(() => {console.log('Protected Route Activated')});
    // setShow(!show);
  }
  
  const deActivateRoute = () => {
    Auth.logout(() => {console.log('Protected Route Deactivated')});
    // setShow(!show);
  }
    
  return (  <> <IntlProvider locale={locale} messages={messages[locale]}>

    {/* {!show && <button type="button" onClick={activateRoute}>Activate Route</button>}
    {show && <button type="button" onClick={deActivateRoute}>Deactivate Route</button>} */}
  
    {show && 
    <div className="body1">
   <div className="container8">
   
        <div className="d-flex justify-content-center h-100">
            <div style={{marginTop:'200px'}}>
            <div class="brand_logo_container">
            <img src="entema2.png" className="brand_logo" alt="Logo"/>
          </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"><FiUsers/></i></span>
                            </div>
                            <input type="text" className="form-control" id="user" name="user" placeholder="username" value={user} onChange={handleChange}/>
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"><GiHeartKey/></i></span>
                            </div>
                            <input type="password" className="form-control" id="pwd" name="pwd" placeholder="password" value={pwd} onChange={handleChange}/>
                        </div>
                       
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary1">Login</button>
                        </div>
                    </form>
                </div>
                
                </div>
            </div>
            </div>   </div>}
 
        {!show && <Layout/>}
            
      </IntlProvider>
    
  </>

  );
}

export default App;
