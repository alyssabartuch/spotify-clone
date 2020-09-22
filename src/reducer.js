export const initialState = {
  user: null,
  playlists: [],
  isPlaying: false,
  item: null,
  // token: null,
  // token:
  //   "BQDRXaceX6xuuKTj93KfFEQspwDVPKOAIw4HkooR4ayKelfJr_AWvMUgiXzLsFfC-ws5996SuIpJIylzIVpwXoAHchxerH1AKFqn0qndMlLQ5XXTe5ZaCDCyJYyma0CHPb6fXnk2nk-aiq2QQmldI4ZH0DEePRL3",
};

const reducer = (state, action) => {
  // action --> type, [payload] (in this case user)
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
