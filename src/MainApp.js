import React from "react";
import MainScreen from '../src/screen/mainscreen';
import OverviewScreen from '../src/screen/overviewscreen';
import StarScreen from '../src/screen/starscreen';
import RepositoryScreen from '../src/screen/repositoryscreen';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainScreen },
    OverView: { screen: OverviewScreen },
    Star: { screen: StarScreen },
    Repository: { screen: RepositoryScreen }
  },
  {
    //index: 0,
    initialRouteName: "Main",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);

// export default () =>
//   <Root>
//     <AppContainer />
//   </Root>;

  export default createAppContainer(AppNavigator);
