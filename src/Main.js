import React from 'react';
import './App.css';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
function Main() {
  return (
    <div className="Main" >
    <div className="comp">
    <ProfilPhoto/>
    <FullName/>
    <Address/>
    </div>
    </div>
  );
}

export default Main;
