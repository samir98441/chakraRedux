import React, { useState } from "react";
import "./item.css";
import { Text, Image, Box, Button, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import {
  updateFormToggle,
  updateProducts,
  removeItem,
} from "../../store/slices/productsSlice";

const Item = ({ PId, PName, Price, formToggle }) => {
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();

  const dispatch = useDispatch();

  let data;

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data = { PId, PName: newName, Price: newPrice };
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
  };
  return (
    <div className="item">
      <Box>
        <Image
          boxSize="250px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
      <div className="itemName">{PName}</div>
      <div className="itemPrice">
        <Text fontSize="20px">Rs.{Price}</Text>
      </div>
      <Button colorScheme="red" onClick={() => dispatch(removeItem(PId))}>
        Remove
      </Button>
      <Button
        mt="10px"
        colorScheme="blue"
        onClick={() => dispatch(updateFormToggle(PId))}
      >
        Update
      </Button>

      <Button
        mt="10px"
        type="submit"
        colorScheme="green"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      <Box display={formToggle ? "block" : "none"}>
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
  );
};

export default Item;
