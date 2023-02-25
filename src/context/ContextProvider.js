// import React, { createContext, useReducer, useContext, useEffect } from "react";
// import reducer from "../reducer/reducer";

// const initialState = {
//   searchValue: "",
//   searchedItem: [],
// };
// const DataContext = createContext();

// const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.searchValue) dispatch({ type: "UPDATESEARCH" });
//   }, [state.searchValue]);

//   const handleSearchItem = (search) => {
//     return dispatch({ type: "SEARCH", payload: search });
//   };

//   return (
//     <DataContext.Provider
//       value={{
//         ...state,
//         handleSearchItem,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };
// const useDataContext = () => {
//   return useContext(DataContext);
// };

// export { ContextProvider, DataContext, useDataContext };
