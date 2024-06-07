import React from 'react';
import { createStore } from 'redux';
import { reducer } from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(reducer);

const LikeCounter = () => {
  const [state, setState] = React.useState(store.getState());

  const handleIncrement = () => {
    store.dispatch(incrementLike());
    setState(store.getState());
  };

  const handleDecrement = () => {
    store.dispatch(decrementLike());
    setState(store.getState())
  };

  return (
    <div>
      <h1>Likes: {state.likes}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Dislike</button>
    </div>
  );
};

export default LikeCounter;
