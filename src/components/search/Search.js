import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { useDataContext } from "../../context/ContextProvider";

const Search = () => {
  const { handleSearchItem, searchValue } = useDataContext();

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    handleSearchItem(newValue);
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
