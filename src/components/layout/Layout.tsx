import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

type Props = {};

const Layout = ({}: Props) => {
  return (
    <Box sx={{ backgroundColor: "#F2EED7" }} >
      <Navbar />
      <Box mt={8} height={"100%"} flex={1} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
