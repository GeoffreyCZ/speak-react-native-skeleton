import axiosLib from "axios"

const apiKey = "4aa883f95999ec813b8bfaf319f3972b"

export const axios = axiosLib.create({
  baseURL: "http://api.themoviedb.org/3/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
})

axios.interceptors.request.use(request => ({
  ...request,
  url: `${request.url}?api_key=${apiKey}`,
}))

export const getTopRated = page =>
  axios.get("movie/top_rated", {
    params: {
      page,
    },
  })

export const getNowPlaying = page =>
  axios.get("movie/now_playing", {
    params: {
      page,
    },
  })

export const getPopular = page =>
  axios.get("movie/popular", {
    params: {
      page,
    },
  })

export const getUpcoming = page =>
  axios.get("movie/upcoming", {
    params: {
      page,
    },
  })

export const getDetail = movieId => axios.get(`movie/${movieId}`)
