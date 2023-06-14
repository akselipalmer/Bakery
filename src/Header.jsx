import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import MenuItems from "./Header-Components/MenuItems";
import Logo from "./assets/Logo";

export default function Header() {
  return (
    <Grid container width="auto" height={100} borderBottom={2} mx={5}>
      <Grid md={4} item display="flex" flexDirection="row" alignItems="center">
        <Logo />
      </Grid>
      <Grid
        md={4}
        item
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <MenuItems />
      </Grid>
      <Grid
        md={4}
        item
        display="flex"
        flexDirection="row"
        justifyContent="end"
        alignItems="center"
      >
        <Button variant="outlined">Sign Up</Button>
      </Grid>
    </Grid>
  );
}
