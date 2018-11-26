// @flow
import React from "react"
import { Text, View, TouchableHighlight, Image } from "react-native"

import { Metrics } from "../themes"

// theme
const styles = {
  itemContainer: {
    height: 65,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Metrics.common.margin,
  },
  image: {
    width: Metrics.imageSmall.width,
    height: Metrics.imageSmall.height,
    borderRadius: 25,
  },
  titleContainer: {
    fontSize: 14,
    flex: 1,
    width: 250,
  },
  yearContainer: {
    fontSize: 10,
  },
  ratingContainer: {
    fontSize: 30,
  },
}

type Props = {|
  voteAverage: string,
  title: string,
  navigation: any,
  id: number,
  releaseDate: string,
  posterPath: string,
|}

const imageUrl = "http://image.tmdb.org/t/p/w300"

export default class ListItem extends React.PureComponent<Props> {
  render() {
    const {
      voteAverage,
      title,
      navigation,
      id,
      releaseDate,
      posterPath,
    } = this.props
    return (
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Detail", {
            id,
          })
        }
        underlayColor="tomato"
      >
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `${imageUrl}${posterPath}`,
            }}
          />
          <View>
            <Text numberOfLines={1} style={styles.titleContainer}>
              {title}
            </Text>
            <Text style={styles.yearContainer}>({releaseDate})</Text>
          </View>
          <Text style={styles.ratingContainer}>{voteAverage}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
