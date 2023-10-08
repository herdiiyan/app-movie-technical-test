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

const initState = {
    trending: [],
    upcoming: [],
    topRated: [],
    movieDetail: [],
    cast: [],
    similarMovies: [],
    person: [],
    personMovies: [],
    error: false
}

export const reducers = (state = initState, action) => {
    console.log("state ", action.type);
    switch (action.type) {
        case TRENDING_MOVIES:
            // console.log("reducer", action.data);
            return {
                ...state,
                trending: action.data
            }
        case UP_COMMING_MOVIES:
            // console.log("reducer", action.data);
            return {
                ...state,
                upcoming: action.data
            }
        case TOP_RATE_MOVIES:
            // console.log("reducer", action.data);
            return {
                ...state,
                topRated: action.data
            }
        case MOVIE_DETAILS:
            // console.log("reducer", action.data);
            return {
                ...state,
                movieDetail: action.data
            }
        case MOVIE_CREDITS:
            // console.log("reducer", action.data);
            return {
                ...state,
                cast: action.data
            }
        case SIMILAR_MOVIES:
            // console.log("reducer", action.data);
            return {
                ...state,
                similarMovies: action.data
            }
        case PERSON_DETAILS:
            // console.log("reducer", action.data);
            return {
                ...state,
                person: action.data
            }
        case PERSON_MOVIES:
            // console.log("reducer", action.data);
            return {
                ...state,
                personMovies: action.data
            }
        default:
            return state
    }
}