import React, { createContext, useReducer, useContext, useEffect } from "react";
import { getUserAccounts } from '../actions/user';

const initialState = Object.freeze({
  user: undefined,
  reports: undefined,
  availableUsers: [],
});

const Context = createContext(undefined);
const DispatchContext = createContext(undefined);

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_REPORTS":
      return { ...state, reports: action.payload };
    case "SET_AVAILABLE_USERS":
      return { ...state, availableUsers: action.payload };
    case "LOGOUT":
      return { ...state, user: undefined };
    default:
      return { ...state };
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    getUserAccounts(dispatch);
  }, []);

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
