// @flow
import React from "react"
import { Text, StyleSheet } from "react-native"

// data
import data from "../../assets/data/data"

// components
import { BreweryList, Title } from "../components"
import { Colors } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

export default class DetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Detail",
  }

  render() {
    return <Text>Detail</Text>
  }
}
