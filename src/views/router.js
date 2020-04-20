import React from 'react';

import {Scene, Router, ActionConst} from 'react-native-router-flux';
import ListRestaurantView from './listRestaurantsView/listRestaurantView';
import SplashView from './splashView/splashView';

const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
          <Scene key='splash' initial>
              <Scene key='splash' initial component={SplashView} title='splash' hideNavBar={true}/>
          </Scene>
          <Scene key='main' gesturesEnabled={false}>
              <Scene
                key="listRestaurant"
                initial
                component={ListRestaurantView}
                title="listRestaurant"
                hideNavBar={true}
              />
          </Scene>
      </Scene>
    </Router>
  );
};
export default RouterComp;
