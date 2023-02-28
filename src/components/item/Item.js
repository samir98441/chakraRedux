import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Text,
  Image,
  Box,
  Button,
  Input,
  Flex,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { addToCart } from "../../store/slices/cartSlice";
import {
  updateFormToggle,
  updateProducts,
  removeItem,
} from "../../store/slices/productsSlice";
import "./item.css";
import { successAlert, warningAlert } from "../../store/slices/alertSlice";

const Item = ({ PId, PName, Price, formToggle }) => {
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();

  const dispatch = useDispatch();

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { PId, PName: newName, Price: newPrice };
    console.log("submit", data);
    dispatch(updateProducts(data));
    dispatch(updateFormToggle(PId));
  };
  const handleAddToCart = () => {
    const tempData = {
      PId,
      PName,
      Price,
    };
    dispatch(addToCart(tempData));
    dispatch(successAlert("added to cart successfully"));
  };
  const [modalToggle, setModalToggle] = useState(false);

  const handleDelete = () => {
    setModalToggle(false);
    dispatch(removeItem(PId));
    // dispatch(warningAlert("want to delete item?"));
  };

  return (
    <>
      <Modal isOpen={modalToggle}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Do You Want To Delete?</div>
          </ModalBody>

          <ModalFooter>
            <Button ml="50px" colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setModalToggle(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="item">
        <Box>
          <Image
            boxSize="250px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box padding="20px">
          <div className="itemName">{PName}</div>
          <div className="itemPrice">
            <Text fontSize="20px">Rs.{Price}</Text>
          </div>
          <Flex w="100%" justifyContent="space-around">
            <Tooltip label="add to cart">
              <AddShoppingCartIcon
                style={{ color: "blue" }}
                onClick={handleAddToCart}
              />
            </Tooltip>
            <Tooltip label="update item">
              <DriveFileRenameOutlineRoundedIcon
                style={{ color: "green" }}
                onClick={() => dispatch(updateFormToggle(PId))}
              />
            </Tooltip>
            <Tooltip label="delete">
              <DeleteOutlineIcon
                style={{ color: "red" }}
                onClick={() => setModalToggle(true)}
              />
            </Tooltip>

            {/* {deleteWarning && (
            <Box className="deleteAlert">
              <Alert status="warning">
                <AlertIcon />
                Are You sure?? Delete!!
              </Alert>
              <Button onClick={handleDeleteConfirmation}>Yes</Button>
              <Button onClick={() => setDeleteWarning(false)}>cancel</Button>
            </Box>
          )} */}
          </Flex>
        </Box>

        <Box
          display={formToggle ? "block" : "none"}
          style={{ position: "absolute" }}
          w="250px"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="newPName"
              placeholder="Name"
              value={newName}
              onChange={handleName}
            />
            <input
              type="number"
              name="newPrice"
              placeholder="Price"
              value={newPrice}
              onChange={handlePrice}
            />
            <Button type="submit" colorScheme="green">
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Item;
