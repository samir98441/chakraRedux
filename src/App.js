import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import MyRoutes from "./MyRoutes";

function App() {
  return (
    <ChakraProvider>
      <MyRoutes />
    </ChakraProvider>
  );
}

export default App;
