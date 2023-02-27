import React, { useEffect, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import CartItem from "../../components/cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../../store/slices/cartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.CartReducer.cart);

  const [total, setTotal] = useState();
  const dispatch = useDispatch();
  let t = 0;

  useEffect(() => {
    cart.forEach((item) => {
      t += item.Price * item.quantity;
    });

    setTotal(t);
  }, [cart]);

  useEffect(() => {
    dispatch(loadCart);
  }, []);

  return (
    <Flex>
      <Box w="80%">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.PId}
              PId={item.PId}
              PName={item.PName}
              Price={item.Price}
              quantity={item.quantity}
            />
          );
        })}
      </Box>
      <Box
        style={{ boxShadow: "5px 5px 10px #8888" }}
        p="20px"
        h="150px"
        mt="50px"
      >
        <Box>
          <Text as="b" fontSize="3xl">
            Subtotal
          </Text>
        </Box>
        <Box>{total}</Box>
      </Box>
    </Flex>
  );
};

export default CartPage;
