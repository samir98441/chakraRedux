import Item from "../item/Item";
import { Flex } from "@chakra-ui/react";
import AddItem from "../addItem/AddItem";
import "./main.css";
import { useDataContext } from "../../context/ContextProvider";

const Main = () => {
  const { products, searchedItem, searchValue } = useDataContext();
  return (
    <div className="main">
      <Flex
        width="90%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        gap="30px"
      >
        {console.log("aaa", products)}
        {searchValue === ""
          ? products.map((item) => {
              return (
                <Item
                  key={item.PId}
                  PId={item.PId}
                  PName={item.PName}
                  Price={item.Price}
                  UpdateToggle={item.UpdateToggle}
                />
              );
            })
          : searchedItem.map((item) => {
              return (
                <Item
                  key={item.PId}
                  PId={item.PId}
                  UpdateToggle={item.UpdateToggle}
                  PName={item.PName}
                  Price={item.Price}
                />
              );
            })}

        <AddItem />
      </Flex>
    </div>
  );
};

export default Main;
