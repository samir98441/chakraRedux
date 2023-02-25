import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { addToCart, deleteFromCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ PId, PName, Price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <Flex justifyContent="space-around">
      <Box>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
      <Box>
        <Box className="itemName">{PName}</Box>
        <Box className="itemPrice">
          <Text fontSize="20px">Rs.{Price}</Text>
        </Box>
      </Box>

      <Box>
        <Box>Quantity</Box>
        <Flex alignItems="center" gap="5px">
          <Button onClick={() => dispatch(addToCart({ PId, PName, Price }))}>
            +
          </Button>
          {quantity}
          <Button onClick={() => dispatch(deleteFromCart(PId))}>-</Button>
        </Flex>
      </Box>
      <Box>
        <Box>Total</Box>
        <Box>{Price * quantity}</Box>
      </Box>
    </Flex>
  );
};

export default CartItem;
