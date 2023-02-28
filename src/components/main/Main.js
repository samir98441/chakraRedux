import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import Item from "../item/Item";
import AddItem from "../addItem/AddItem";

import { toggleAddItem } from "../../store/slices/productsSlice";

import "./main.css";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);
  const searchReducerState = useSelector((state) => state.SearchReducer);
  const { searchValue, searchedItem } = searchReducerState;

  const alertReducerState = useSelector((state) => state.AlertSliceReducer);

  const { type, message, key } = alertReducerState;

  const toast = useToast({
    position: "bottom-right",
    title: type,
    containerstyle: {
      width: "800px",
    },
  });

  const toggle = useSelector((state) => state.ProductsReducer.toggle);
  const handleAddNewItem = () => {
    dispatch(toggleAddItem());
  };

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const [isVisibl, setVisible] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const cancelRef = React.useRef();
  useEffect(() => {
    console.log("alert Reducer", alertReducerState);
    if (type === "success") {
      toast({
        title: type,
        description: message,
        status: type,
        duration: 3000,
        isClosable: false,
      });
    }
  }, [key]);

  return (
    <div className="main">
      <Modal isOpen={toggle}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddItem />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch(toggleAddItem())}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
      {/* <Box display={toggle ? "block" : "none"} alignItems="center" mt="10px">
        <Center>
          <AddItem />
        </Center>
      </Box> */}
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
