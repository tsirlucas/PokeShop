import React from 'react';
import {TabNavigator} from 'react-navigation';

import PokeList from './components/PokeList';

const Routes = TabNavigator({
    Buy: {
        screen: ({screenProps}) => (
            <PokeList pokemons={screenProps.pokemons}
                      toggleState={screenProps.toggleState}
                      isSold={false}/>
        )
    },
    Sell: {
        screen: ({screenProps}) => (
            <PokeList pokemons={screenProps.pokemons}
                      toggleState={screenProps.toggleState}
                      isSold={true}/>
        )
    }
}, {
    initialRouteName: 'Buy',
    tabBarPosition: 'bottom',
    swipeEnabled: true
});

export default Routes;