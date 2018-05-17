import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import More from '../More/More';
import TenDays from '../TenDays/TenDays';
import TenDaysDetailed from '../TenDaysDetailed/TenDaysDetailed';
import Forecast from '../Forecast/Forecast';
import Languages from '../Languages/Languages';
import Search from '../Search/Search';
import StartLocation from '../StartLocation/StartLocation';
import Themes from '../Themes/Themes';
import './Routers.css';

const getPathDepth = (location) => {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter(n => n !== '');
  return pathArr.length;
};

class Routers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      prevDepth: getPathDepth(props.location)
    }
  }

  // FIXME: Replace as unsupported after React v.17
  UNSAFE_componentWillReceiveProps() {
    this.setState({ prevDepth: getPathDepth(this.props.location) });
  }

  render() {
    return (
      <Route render={({location}) => {
        return (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              timeout={500}
              classNames="pageSlider"
              mountOnEnter={false}
              unmountOnExit={true}>
              <div className={getPathDepth(location) - this.state.prevDepth >= 0 ? 'left' : 'right'}>
                <Switch location={location}>
                  <Route path="/more/languages" component={Languages} />
                  <Route path="/more/start-location" component={StartLocation} />
                  <Route path="/more/themes" component={Themes} />
                  <Route path="/more" component={More} />
                  <Route path="/ten-days/detailed" component={TenDaysDetailed} />
                  <Route path="/ten-days" exact component={TenDays} />
                  <Route path="/search" exact component={Search} />
                  <Route path="/" exact component={Forecast} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )
      }}/>
    );
  }
}

export default Routers;
