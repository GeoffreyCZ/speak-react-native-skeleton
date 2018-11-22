// @flow
import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import Flag from "react-native-flags"

// data
import data from "../../assets/data/breweries"

// theme
import { Metrics, Images } from "../themes"
import Title from "./Title"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 40,
  },
  textContainer: {
    fontSize: Metrics.texts.description.size,
    paddingLeft: 5,
    textAlign: "justify",
    marginTop: 40,
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    marginBottom: 40,
    height: 150,
    width: 150,
  },
})

type Props = {|
  id: number,
  imageId: string,
|}

export default class BreweryDetail extends React.PureComponent<Props> {
  render() {
    const { id, imageId } = this.props
    const content = data.breweries[id - 1]
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Images[imageId]} />
        <Title>{content.manufacturer}</Title>
        <Text style={styles.textContainer}>{content.description}</Text>
        <Flag size={64} code={content.state} />
      </View>
    )
  }
}
