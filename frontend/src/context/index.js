import React, { createContext, useReducer, useContext } from "react";

const initialState = Object.freeze({});

const Context = createContext(undefined);
const DispatchContext = createContext(undefined);

const Reducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </Context.Provider>
  );
};

export const useStore = () => {
  const state = useContext(Context);
  if (state === undefined) {
    throw new Error("useStore can only be called inside of a Provider.");
  }
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error("useDispatch can only be called inside of a Provider.");
  }
  return dispatch;
};

export const useStoreContext = () => [useStore(), useDispatch()];
