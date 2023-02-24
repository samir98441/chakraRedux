import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/ContextProvider";

import { Box, Flex } from "@chakra-ui/react";
import CartItem from "../../components/cartItem/CartItem";

const CartPage = () => {
  const { cart } = useDataContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    let t = 0;
    cart.forEach((item) => {
      t = t + item.Price * item.quantity;
    });
    setTotal(t);
  }, [cart]);

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
