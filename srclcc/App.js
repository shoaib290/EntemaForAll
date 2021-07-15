import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import { Link } from 'react-router-dom';
import { Switch, Route,Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import './styles/App.scss';
import Routes from './Routes';
import Login from './Components/Login'


function App() {
  const [locale, setLocale] = useState('en');
  
    
    
  return (  <> <IntlProvider locale={locale} messages={messages[locale]}>
  
      <Layout setLocale={setLocale} />  
      
      </IntlProvider>
    
  </>

  );
}

export default App;
