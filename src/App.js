import { Box } from "@material-ui/core";
import React from "react";
import Navigations from "./routes/navigation";

const App = () => {
  return (
    <React.Fragment>
      <Box className="App">
        <Navigations />
      </Box>
    </React.Fragment>
  );
};

export default App;
