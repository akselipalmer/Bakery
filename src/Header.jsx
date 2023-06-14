import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MenuItems from "./MenuItems";
import Logo from "./Logo";

export default function Header() {
  return (
    <Box
      width="auto"
      height={100}
      borderBottom={2}
      mx={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <MenuItems />
      <Button variant="outlined">Sign Up</Button>
    </Box>
  );
}
