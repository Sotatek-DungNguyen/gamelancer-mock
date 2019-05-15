import SearchGame from './SearchGame';
import PostBounty from './PostBounty';
import EditBounty from './EditBounty';
import HomeScreen from './Home';
import PaymentModal from '../bountyflow/components/PaymentModal';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const BountyStack = createStackNavigator(
    {
        Home: HomeScreen,
        Search: SearchGame,
        Post: PostBounty,
        Edit: EditBounty,
        Pay: PaymentModal
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default BountyContainer = createAppContainer(BountyStack);