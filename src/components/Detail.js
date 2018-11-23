// @flow
import React from "react"
import { Text, View, Image } from "react-native"

import { Metrics } from "../themes"

const imageUrl = "http://image.tmdb.org/t/p/w500"

// theme
const styles = {
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: Metrics.common.margin,
  },
  image: {
    width: Metrics.image.width,
    height: Metrics.image.height,
  },
  titleContainer: {
    fontSize: 35,
    textAlign: "center",
    margin: 20,
  },
  dateContainer: {
    margin: 20,
    textAlign: "center",
  },
  overviewContainer: {
    textAlign: "justify",
  },
}

type Props = {|
  title: string,
  posterPath: string,
  overview: string,
  releaseDate: string,
|}

export default class Detail extends React.PureComponent<Props> {
  render() {
    const { title, posterPath, overview, releaseDate } = this.props
    return (
      <View style={styles.detailContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${imageUrl}${posterPath}`,
          }}
        />
        <Text style={styles.titleContainer}>{title}</Text>
        <Text style={styles.dateContainer}>{releaseDate}</Text>
        <Text style={styles.overviewContainer}>{overview}</Text>
      </View>
    )
  }
}
