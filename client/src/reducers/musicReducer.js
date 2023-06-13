export const initialState = {
    playlists:[],
    playing:null,
    bannerOpen: false,
    search:null,
};

const musicReducer = (state=initialState,action) => {
    
    switch (action.type){
        case "FETCH_DATA":
                return {
                  ...state,
                  playlists: action.payload,
                };
        case "SET_CURR_PLAYING":
            return {
                ...state,
                playing: action.payload
            }
        case "SET_BANNER_OPEN":
            return {
                ...state,
                bannerOpen: action.payload
            };
            case "INC_TIMES_PLAYED":
                return {
                  ...state,
                  playlists: state.playlists.map((song) => {
                    if (song.id === action.payload) {
                      return {
                        ...song,
                        timesPlayed: song.timesPlayed + 1,
                      };
                    }
                    return song;
                  }),
                };
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};

export default musicReducer;