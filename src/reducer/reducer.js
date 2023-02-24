const reducer = (state, action) => {
  const data = action.payload;
  switch (action.type) {
    case "LOADPRODUCTS":
      return { ...state, products: data };
    case "LOADCARTS":
      return { ...state, cart: data };
    case "ADDITEM":
      const addedState = state.products;
      const newData = [...addedState, data];
      state = { ...state, products: newData };
      return state;

    case "SEARCH":
      return { ...state, searchValue: data, searchedItem: [] };

    case "UPDATESEARCH":
      let addedItem = [...state.searchedItem];
      state.products.forEach((item) => {
        if (item.PName.includes(state.searchValue)) {
          addedItem = [...addedItem, item];
        }
      });
      return { ...state, searchedItem: addedItem };

    case "REMOVEITEM":
      const newDeletedData = state.products.filter(
        (item) => item.PId !== action.payload
      );
      return { ...state, products: newDeletedData };

    case "TOGGLE":
      let newVal;
      let newToggle = state.products.map((item) => {
        if (item.PId === data) {
          newVal = item.UpdateToggle ? false : true;
          return { ...item, UpdateToggle: newVal };
        } else {
          return item;
        }
      });
      console.log("newToggle", newToggle);
      return { ...state, products: newToggle };

    case "UPDATE":
      let id = action.payload.PId;
      console.log("print id", id);
      let newName = action.payload.PName;
      let newPrice = action.payload.Price;

      let update = state.products.map((item) => {
        if (item.PId === id) {
          return {
            ...item,
            PName: newName ? newName : item.PName,
            Price: newPrice ? newPrice : item.Price,
          };
        } else return item;
      });
      return { ...state, products: update };

    case "ADDTOCART":
      let newCart;
      console.log("cartlength", state.cart);
      if (state.cart.length !== 0) {
        // newCart = state.cart.map((item) => {
        //   if (item.PId === action.payload) {
        //     newQuantity = item.quantity + 1;
        //     console.log("increasedQuantity", newQuantity);
        //     return { ...item, quantity: newQuantity };
        //   } else {
        //     newQuantity = 1;
        //     console.log("qqq");
        //     let ss = state.products.find((item) => item.PId === action.payload);
        //     return { ...ss, quantity: newQuantity };
        //   }
        // });
        const tempCart = state.cart.find((item) => item.PId === action.payload);
        if (!tempCart) {
          let reqItem = state.products.find(
            (item) => item.PId === action.payload
          );
          reqItem = { ...reqItem, quantity: 1 };
          newCart = [...state.cart, reqItem];
        } else {
          let nCart = { ...tempCart, quantity: tempCart.quantity + 1 };
          const newAddedQuantity = state.cart.filter(
            (item) => item.PId !== action.payload
          );
          newCart = [...newAddedQuantity, nCart];
        }
      } else {
        newCart = state.products.find((item) => item.PId === action.payload);
        newCart = [{ ...newCart, quantity: 1 }];
      }
      return { ...state, cart: newCart };

    case "REDUCECART":
      let updatedQuantity = state.cart.find(
        (item) => item.PId === action.payload
      );
      if (updatedQuantity.quantity > 1) {
        updatedQuantity = {
          ...updatedQuantity,
          quantity: updatedQuantity.quantity - 1,
        };
        let oldCart = state.cart.filter((item) => item.PId !== action.payload);
        return { ...state, cart: [...oldCart, updatedQuantity] };
      } else {
        let oldCart = state.cart.filter((item) => item.PId !== action.payload);
        return { ...state, cart: oldCart };
      }

    default:
      return state;
  }
};
export default reducer;
