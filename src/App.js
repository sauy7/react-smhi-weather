import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import WrapRouters from './hoc/WrapRouters';
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <WrapRouters />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
