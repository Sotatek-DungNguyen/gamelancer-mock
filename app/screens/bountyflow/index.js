import SearchGameScreen from './search';
import PostBountyScreen from './postbounty';
import EditBountyScreen from './postbounty/EditBountyScreen';
import HomeScreen from './Home';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const BountyStack = createStackNavigator(
    {
        Home: HomeScreen,
        Search: SearchGameScreen,
        Post: PostBountyScreen,
        Edit: EditBountyScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default BountyContainer = createAppContainer(BountyStack);