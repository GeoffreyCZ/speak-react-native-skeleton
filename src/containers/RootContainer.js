// @flow
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

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

export default class RootContainer extends React.PureComponent<null> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Title>Brewerynator</Title>
        <BreweryList data={data.breweries} />
      </SafeAreaView>
    )
  }
}
