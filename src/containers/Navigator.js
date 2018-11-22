import {
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import React from "react"

import BreweriesListContainer from "./BreweriesListContainer"
import BreweryDetailContainer from "./BreweryDetailContainer"
import ProfileContainer from "./ProfileContainer"

const BreweriesStack = createStackNavigator({
  Breweries: {
    screen: BreweriesListContainer,
    navigationOptions: { title: "Breweries" },
  },
  BreweryDetail: {
    screen: BreweryDetailContainer,
    navigationOptions: { title: "Brewery Detail" },
  },
})

export default createBottomTabNavigator({
  BreweriesList: {
    screen: BreweriesStack,
    navigationOptions: {
      title: "Breweries",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Icon name="factory" size={horizontal ? 20 : 25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      title: "Profile",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Feather name="info" size={horizontal ? 20 : 25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
})
