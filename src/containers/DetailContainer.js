// @flow
import React from "react"

import { Detail } from "../components"
import { getDetail } from "../api"

// components

export default class DetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Detail",
  }

  state = {
    movie: [],
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
    return (
      <Detail
        title={movie.title}
        posterPath={movie.poster_path}
        overview={movie.overview}
        releaseDate={movie.production_countries[0].iso_3166_1}
      />
    )
  }
}
