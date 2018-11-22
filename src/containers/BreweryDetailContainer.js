// @flow
import React from "react"

// components
import BreweryDetail from "../components/BreweryDetail"

export default class BreweryDetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "BreweryDetail",
  }

  render() {
    const { navigation } = this.props
    const id = navigation.getParam("id", "brewery id")
    const imageId = navigation.getParam("imageId", "brewery image id")
    return <BreweryDetail id={id} imageId={imageId} />
  }
}
