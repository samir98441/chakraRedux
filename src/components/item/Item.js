import React, { useState } from "react";
import "./item.css";
import { Text, Image, Box, Button, Input } from "@chakra-ui/react";
import { useDataContext } from "../../context/ContextProvider";

const Item = ({ PId, PName, Price, UpdateToggle }) => {
  const { handleRemove, handleUpdate, handleToggle, handleAddCart } =
    useDataContext();
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  let data;

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    data = { PId: PId, PName: newName, Price: newPrice };
    console.log("submit", data);
    handleUpdate(data);
    handleToggle(PId);
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
      <Button colorScheme="red" onClick={() => handleRemove(PId)}>
        Remove
      </Button>
      <Button mt="10px" colorScheme="blue" onClick={() => handleToggle(PId)}>
        Update
      </Button>

      <Button
        mt="10px"
        type="submit"
        colorScheme="green"
        onClick={() => handleAddCart(PId)}
      >
        Add to Cart
      </Button>
      <Box display={UpdateToggle ? "block" : "none"}>
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
