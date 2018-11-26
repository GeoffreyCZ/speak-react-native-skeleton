// @flow
import React from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"

import { Detail } from "../components"
import { getDetail } from "../api"

// theme
const styles = StyleSheet.create({
  loadingContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE",
  },
})

export default class DetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Detail",
  }

  state = {
    movie: null,
  }

  componentDidMount() {
    const { navigation } = this.props
    getDetail(navigation.getParam("id", "movie id")).then(response => {
      this.setState({
        movie: response.data,
      })
    })
  }

  render() {
    const { movie } = this.state
    let rVal = null
    if (movie === null) {
      rVal = (
        <View style={styles.loadingContainer}>
          <ActivityIndicator animating size="large" />
        </View>
      )
    } else {
      rVal = (
        <Detail
          title={movie.title}
          posterPath={movie.poster_path}
          overview={movie.overview}
          releaseDate={movie.release_date}
          countryCode={movie.production_countries[0].iso_3166_1}
        />
      )
    }
    return rVal
  }
}
