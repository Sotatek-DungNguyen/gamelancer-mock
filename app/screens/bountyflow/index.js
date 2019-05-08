import SearchGameScreen from './search';
import PostBountyScreen from './postbounty';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const BountyStack = createStackNavigator(
    {
        Search: SearchGameScreen,
        Post: PostBountyScreen
    },
    {
        initialRouteName: 'Search',
        headerMode: 'none'
    }
);

export default BountyContainer = createAppContainer(BountyStack);