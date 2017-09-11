import React, { Component } from 'react';
import OrderForm from './modules/OrderFormComponent';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Container style={{margin: 'auto', flex: 'none'}}>
          <h1 style={{textAlign: 'center'}}>LOW_TECH T-Shirt Campaign</h1>
          <p style={{textAlign: 'center'}}>Help us, become the most successful group in the universe!</p>
          <OrderForm/>
        </Container>
      </div>
    );
  }
}

export default App;
