import React, { useEffect, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";
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
      <Box>
        <Box>Subtotal</Box>
        <Box>{total}</Box>
      </Box>
    </Flex>
  );
};

export default CartPage;
