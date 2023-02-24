import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/reducer";
// const defaultValue = {
//   PID: "",
//   PName: "",
//   PImageUrl: "",
//   UpdateToggle: false,
//   quantity: 0,
// };
const initialState = {
  products: [],
  searchValue: "",
  searchedItem: [],
  cart: [],
};
const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products"));
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log("First load", items);
    if (items) {
      dispatch({ type: "LOADPRODUCTS", payload: items });
    }
    if (cartItems) {
      dispatch({ type: "LOADCARTS", payload: cartItems });
    }
  }, []);

  useEffect(() => {
    console.log("Set products local storage", state.products);
    if (state.products.length) {
      localStorage.setItem("products", JSON.stringify(state.products));
    }
  }, [state.products]);

  useEffect(() => {
    if (state.products.length)
      localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    if (state.searchValue) dispatch({ type: "UPDATESEARCH" });
  }, [state.searchValue]);

  const handelAddItem = (data) => {
    return dispatch({ type: "ADDITEM", payload: data });
  };

  const handleSearchItem = (search) => {
    return dispatch({ type: "SEARCH", payload: search });
  };

  const handleRemove = (PId) => {
    return dispatch({ type: "REMOVEITEM", payload: PId });
  };

  const handleToggle = (PId) => {
    return dispatch({ type: "TOGGLE", payload: PId });
  };

  const handleUpdate = (data) => {
    return dispatch({ type: "UPDATE", payload: data });
  };

  const handleAddCart = (PId) => {
    return dispatch({ type: "ADDTOCART", payload: PId });
  };

  const handleReduceCart = (PId) => {
    return dispatch({ type: "REDUCECART", payload: PId });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        handelAddItem,
        handleSearchItem,
        handleRemove,
        handleToggle,
        handleUpdate,
        handleAddCart,
        handleReduceCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
const useDataContext = () => {
  return useContext(DataContext);
};

export { ContextProvider, DataContext, useDataContext };
