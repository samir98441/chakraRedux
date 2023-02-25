import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  updateSearchValue,
  updateSearchItem,
} from "../../store/slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.SearchReducer.searchValue);
  const products = useSelector((state) => state.ProductsReducer.products);

  const onChangeHandler = (e) => {
    const newValue = e.target.value;

    dispatch(updateSearchValue(newValue));
    dispatch(updateSearchItem(products));
  };

  return (
    <div>
      <InputGroup variant="outline">
        <InputLeftAddon
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Seatch Item"
          value={searchValue}
          onChange={onChangeHandler}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
