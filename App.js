// @flow
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Expo from "expo"

// containers
import Navigator from "./src/containers/Navigator"

export default class App extends React.PureComponent<null> {
  render() {
    return <Navigator />
  }
}
