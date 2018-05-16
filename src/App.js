import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Forecast from './containers/Forecast/Forecast';
import More from './containers/More/More';
import TenDays from './containers/TenDays/TenDays';
import TenDaysDetailed from './containers/TenDaysDetailed/TenDaysDetailed';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/more" component={More} />
          <Route path="/ten-days/detailed" component={TenDaysDetailed} />
          <Route path="/ten-days" exact component={TenDays} />
          <Route path="/" exact component={Forecast} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
