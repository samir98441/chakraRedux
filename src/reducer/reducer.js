// const reducer = (state, action) => {
//   const data = action.payload;
//   switch (action.type) {
//     // case "SEARCH":
//     //   return { ...state, searchValue: data, searchedItem: [] };

//     case "UPDATESEARCH":
//       let addedItem = [...state.searchedItem];
//       state.products.forEach((item) => {
//         if (item.PName.includes(state.searchValue)) {
//           addedItem = [...addedItem, item];
//         }
//       });
//       return { ...state, searchedItem: addedItem };

//     default:
//       return state;
//   }
// };
// export default reducer;
