export const setCurrentPlaying = (curr_music) => {
    console.log("wtf   sd ")
    console.log(curr_music)
    return {
        type: "SET_CURR_PLAYING",
        payload: curr_music
    };
}
export const setBannerOpen = (isOpen) => { 
    return {
        type:"SET_BANNER_OPEN",
        payload:isOpen
    };
};

export const increaseTimesPlayed = (id) => {
    return {
        type:"INC_TIMES_PLAYED",
        payload: id
    };
};

export const setSearch = (searchQuery) => {
    return {
        type:"SET_SEARCH_QUERY",
        payload: searchQuery
    };
};

export const getSongs = () => {
    return (dispatch) => { // Return a function instead of an async function
      fetch("http://localhost:5000/song")
        .then((response) => response.json())
        .then((playlists) => {
          dispatch({ type: "FETCH_DATA", payload: playlists });
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  };