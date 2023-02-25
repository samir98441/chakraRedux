import Item from "../item/Item";
import { Flex } from "@chakra-ui/react";
import AddItem from "../addItem/AddItem";
import "./main.css";
import { useDataContext } from "../../context/ContextProvider";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const products = useSelector((state) => state.ProductsReducer.products);
  const state = useSelector((state) => state.SearchReducer);
  const { searchValue, searchedItem } = state;

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="main">
      <Flex
        width="90%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        gap="30px"
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

        <AddItem />
      </Flex>
    </div>
  );
};

export default Main;
