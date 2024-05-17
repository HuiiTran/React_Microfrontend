import { Box } from "@chakra-ui/react";
import React from "react";
import CounterAppOne from "./components/CounterAppOne";

const App = () => (
  <Box margin="1.2rem">
    <Box>Catalog Item</Box>
    <Box>
      <CounterAppOne />
    </Box>
  </Box>
);

export default App;
