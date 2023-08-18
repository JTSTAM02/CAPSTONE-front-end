// import React, {
//     createContext,
//     useReducer,
//     useContext,
//     useEffect,
// } from 'react';

// import jwtDecode from 'jwt-decode'

// let user;

// if (typeof window !== 'undefined') {
//     user = JSON.parse(localStorage.getItem('user'))
// }

// const initialState = {
//     currentUser: user ? jwtDecode(user.access) : null,
//     currentUserToken: user ? user.access : null
// }

// const GlobalStateContext = createContext(initialState);
// const DispatchStateContext = createContext(undefined)

// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(
//         (state, newValue) => ({ ...state, ...newValue }),
//         initialState
//     );

//     return (
//         <GlobalStateContext.Provider value={state}>
//             <DispatchStateContext.Provider value={dispatch}>
//                 {children}
//             </DispatchStateContext.Provider>
//         </GlobalStateContext.Provider>
//     )
// }

// export const useGlobalState = () => [
//     useContext(GlobalStateContext),
//     useContext(DispatchStateContext)
// ];

import { createContext, useReducer, useContext } from 'react';
// Define the initial state
const initialState = {
  user: null,
};
// Create a context object
const GlobalStateContext = createContext();
// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
// Provider component to wrap the app
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
// Custom hook to use the global state
export function useGlobalState() {
  return useContext(GlobalStateContext);
}