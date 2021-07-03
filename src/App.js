import React, { Component } from 'react';
import HeaderContent from './Components/HeaderContent';
import TableContent from './Components/TableContent';
import FooterContent from './Components/FooterContent';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderContent />
        <br />
        <TableContent />
        <FooterContent />
      </div>
    );
  }
}

export default App;
