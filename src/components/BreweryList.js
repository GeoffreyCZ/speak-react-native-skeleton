// @flow
import React from "react"
import { FlatList } from "react-native"

// components
import { Brewery } from "."

export default class BreweryList extends React.PureComponent<Props> {
  render() {
    const { data } = this.props
    return (
      <FlatList data={data} renderItem={({ item }) => <Brewery {...item} />} />
    )
  }
}
