// @flow
import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import Flag from "react-native-flags"
import StarRating from "react-native-star-rating"

// theme
import { Metrics, Images, Colors } from "../themes"

const styles = StyleSheet.create({
  itemContainer: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: Colors.itemBackground,
  },
  textContainer: {
    flexDirection: "column",
    paddingLeft: 5,
  },
  text: {
    fontSize: Metrics.texts.item.size,
    paddingTop: 8,
  },
  image: {
    height: 60,
    width: 60,
  },
  starContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
})

type Props = {|
  +state: string,
  +name: string,
  +imageId: string,
  rating: number,
|}

export default class Brewery extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      starCount: props.rating,
    }
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    })
  }

  render() {
    const { imageId, state, name } = this.props
    const { starCount } = this.state
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={Images[imageId]} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Flag code={state} size={24} />
        </View>
        <View style={styles.starContainer}>
          <StarRating
            starSize={20}
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => this.onStarRatingPress(rating)}
          />
        </View>
      </View>
    )
  }
}
