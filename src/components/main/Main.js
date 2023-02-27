import Item from "../item/Item";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import AddItem from "../addItem/AddItem";
import "./main.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddItem } from "../../store/slices/productsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);
  const state = useSelector((state) => state.SearchReducer);
  const { searchValue, searchedItem } = state;

  const toggle = useSelector((state) => state.ProductsReducer.toggle);

  const handleAddNewItem = () => {
    dispatch(toggleAddItem());
  };

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="main">
      <Button
        colorScheme="blue"
        w="auto"
        style={{
          position: "absolute",
          top: "115px",
          right: "5px",
        }}
        onClick={handleAddNewItem}
      >
        AddNewItem
      </Button>
      <Box display={toggle ? "block" : "none"} alignItems="center" mt="10px">
        <Center>
          <AddItem />
        </Center>
      </Box>
      <Flex
        width="90%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        gap="30px"
        margin="60px 40px"
      >
        {searchValue === ""
          ? products.map((item) => {
              return (
                <Item
                  key={item.PId}
                  PId={item.PId}
                  PName={item.PName}
                  Price={item.Price}
                  formToggle={item.formToggle}
                />
              );
            })
          : searchedItem.map((item) => {
              return (
                <Item
                  key={item.PId}
                  PId={item.PId}
                  PName={item.PName}
                  Price={item.Price}
                  formToggle={item.formToggle}
                />
              );
            })}
      </Flex>
    </div>
  );
};

export default Main;
