import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import Forecast from './containers/Forecast/Forecast';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Forecast />
        </Layout>
      </div>
    );
  }
}

export default App;
