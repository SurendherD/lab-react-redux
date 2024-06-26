const initialState = {
    likes: 0
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          likes: state.likes + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          likes: state.likes - 1
        };
      default:
        return state;
    }
  };
  