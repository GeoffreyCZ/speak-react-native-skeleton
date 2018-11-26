// @flow
import React from "react"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native"

// components
import { Colors } from "../themes"

// containers
import { ListItem } from "../components"

import { getNowPlaying } from "../api"

// theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  loadingContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE",
  },
  separatorContainer: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
    marginLeft: "14%",
  },
})

export default class NowPlayingContainer extends React.PureComponent<null> {
  state = {
    movies: [],
    page: 1,
    loading: false,
  }

  componentDidMount() {
    this.makeRequest()
  }

  onEndReached = () => {
    const { page, loading } = this.state
    if (!loading) {
      this.setState({ page: page + 1 }, () => {
        this.makeRequest()
      })
    }
  }

  makeRequest = () => {
    const { page, movies } = this.state
    this.setState({ loading: true }, () => {
      getNowPlaying(page).then(response => {
        this.setState({
          movies:
            page === 1
              ? response.data.results
              : [...movies, ...response.data.results],
          loading: false,
        })
      })
    })
  }

  renderSeparator = () => <View style={styles.separatorContainer} />

  renderLoadingFooter = () => {
    const { loading } = this.state
    if (!loading) return null

    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  render() {
    const { movies } = this.state
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              voteAverage={item.vote_average}
              navigation={navigation}
              id={item.id}
              releaseDate={item.release_date.slice(0, 4)}
              posterPath={item.poster_path}
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderLoadingFooter}
        />
      </SafeAreaView>
    )
  }
}
