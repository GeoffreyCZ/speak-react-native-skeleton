// @flow
import React from "react"
import { Text, View, TouchableHighlight, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

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
    marginRight: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleContainer: {
    fontSize: 14,
    width: 250,
    fontStyle: "italic",
  },
  ratingContainer: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    color: "#d6d7da",
    marginRight: 15,
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
          <View style={styles.infoContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `${imageUrl}${posterPath}`,
              }}
            />
            <View>
              <Text numberOfLines={1} style={styles.titleContainer}>
                {title} ({releaseDate})
              </Text>
              <Text style={styles.ratingContainer}>{voteAverage * 10}%</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={15} style={styles.iconContainer} />
        </View>
      </TouchableHighlight>
    )
  }
}
