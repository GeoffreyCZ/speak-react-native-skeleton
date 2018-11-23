import React from "react"
import {
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation"
import Icon from "react-native-vector-icons/SimpleLineIcons"

import TopRatedContainer from "./TopRatedContainer"
import NowPlayingContainer from "./NowPlayingContainer"
import UpcomingContainer from "./UpcomingContainer"
import PopularContainer from "./PopularContainer"
import DetailContainer from "./DetailContainer"

const TopRatedStack = createStackNavigator({
  TopRated: {
    screen: TopRatedContainer,
    navigationOptions: { title: "Top Rated" },
  },
  Detail: {
    screen: DetailContainer,
    navigationOptions: { title: "Detail" },
  },
})

const PopularStack = createStackNavigator({
  Popular: {
    screen: PopularContainer,
    navigationOptions: { title: "Popular" },
  },
  Detail: {
    screen: DetailContainer,
    navigationOptions: { title: "Detail" },
  },
})

const NowPlayingStack = createStackNavigator({
  NowPlaying: {
    screen: NowPlayingContainer,
    navigationOptions: { title: "Now Playing" },
  },
  Detail: {
    screen: DetailContainer,
    navigationOptions: { title: "Detail" },
  },
})

const UpcomingStack = createStackNavigator({
  Upcoming: {
    screen: UpcomingContainer,
    navigationOptions: { title: "Upcoming" },
  },
  Detail: {
    screen: DetailContainer,
    navigationOptions: { title: "Detail" },
  },
})

export default createBottomTabNavigator({
  TopRatedList: {
    screen: TopRatedStack,
    navigationOptions: {
      title: "Top Rated",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Icon name="trophy" size={horizontal ? 20 : 25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
  PopularList: {
    screen: PopularStack,
    navigationOptions: {
      title: "Popular",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Icon name="fire" size={horizontal ? 20 : 25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
  NowPlayingList: {
    screen: NowPlayingStack,
    navigationOptions: {
      title: "Now Playing",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Icon
          name="control-play"
          size={horizontal ? 20 : 25}
          color={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
  UpcomingList: {
    screen: UpcomingStack,
    navigationOptions: {
      title: "Upcoming",
      tabBarIcon: ({ horizontal, tintColor }) => (
        <Icon name="calendar" size={horizontal ? 20 : 25} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
})
