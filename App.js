// @flow
import React from "react"
import Expo from "expo"
import { createAppContainer } from "react-navigation"

// containers
import Navigator from "./src/containers/Navigator"

const MainApp = createAppContainer(Navigator)
export default class App extends React.PureComponent<null> {
  render() {
    return <MainApp />
  }
}
