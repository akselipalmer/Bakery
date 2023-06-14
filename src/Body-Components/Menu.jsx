import { Box, Typography } from "@mui/material";
import React from "react";
import { CoffeeMenuOptions, TeaMenuOptions } from "./MenuOptions";

export default function Menu() {
  return (
    <>
      <Box borderBottom={2} borderRight={2}>
        <Typography variant="h4" ml={3} py={1}>
          MENU
        </Typography>
      </Box>
      <CoffeeMenuOptions />
      <TeaMenuOptions />
    </>
  );
}
