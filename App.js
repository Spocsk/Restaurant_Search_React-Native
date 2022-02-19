import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultDetailsScreen from './src/screens/ResultDetailsScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: ResultDetailsScreen
},
{
  initialeRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant localisé à Rouen'
  }
});

export default createAppContainer(navigator);

