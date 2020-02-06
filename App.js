import React from 'react';

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';


import Planets from './components/PlanetsList'
import People from './components/PeopleList'
import Favorites from './components/Favorites'
import Profile from "./components/Profile";



const TabNavigator = createMaterialBottomTabNavigator({
        Planets: Planets,
        Favorites: Favorites
    },
    {navigationOptions : {
    header: null,

        }
        }
   );

const RootNavigator = createStackNavigator({
        Profile: {screen: Profile},
        Tabs: {screen: TabNavigator},
        People: {screen: People},

    },
    {
        initialRouteName: 'Tabs',

    });

const Navigator = createAppContainer(RootNavigator);

export default class App extends React.Component {
    render() {
        return(
        <Navigator />)
    }
    }
