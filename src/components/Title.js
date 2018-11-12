// @flow
import React from "react"
import { StyleSheet, Text, View } from "react-native"

// theme
import { Metrics } from "../themes"

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: Metrics.texts.title.size,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8
  },
})

type Props = {|
  +children: string,
|}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}
