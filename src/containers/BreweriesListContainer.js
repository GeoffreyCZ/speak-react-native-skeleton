// @flow
import React from "react"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { SafeAreaView, StyleSheet } from "react-native"

// data
import data from "../../assets/data/breweries"

// components
import { BreweryList, Title } from "../components"
import { Colors } from "../themes"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  icon: {
    height: 24,
    width: 24,
  },
})

export default class BreweriesListContainer extends React.PureComponent<null> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BreweryList data={data.breweries} navigation={this.props.navigation} />
      </SafeAreaView>
    )
  }
}
