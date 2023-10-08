import {
    MOVIE_CREDITS,
    MOVIE_DETAILS,
    PERSON_DETAILS,
    PERSON_MOVIES,
    SEARCH_MOVIES,
    SIMILAR_MOVIES,
    TOP_RATE_MOVIES,
    TRENDING_MOVIES,
    UP_COMMING_MOVIES
} from "./type"

export const trendingMovies = (data) => ({
    type: TRENDING_MOVIES,
    data: data
})

export const upcomingMovies = (data) => ({
    type: UP_COMMING_MOVIES,
    data: data
})

export const topRatedMovies = (data) => ({
    type: TOP_RATE_MOVIES,
    data: data
})

export const movieDetails = (data) => ({
    type: MOVIE_DETAILS,
    data: data
})

export const movieCredits = (data) => ({
    type: MOVIE_CREDITS,
    data: data
})

export const similarMovies = (data) => ({
    type: SIMILAR_MOVIES,
    data: data
})

export const personDetails = (data) => ({
    type: PERSON_DETAILS,
    data: data
})

export const personMovies = (data) => ({
    type: PERSON_MOVIES,
    data: data
})

export const searchMovies = (data) => ({
    type: SEARCH_MOVIES,
    data: data
})
