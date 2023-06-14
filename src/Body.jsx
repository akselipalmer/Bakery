import { Grid } from "@mui/material";
import React from "react";
import Title from "./Body-Components/Title";
import Menu from "./Body-Components/Menu";
import AtmosphereImage from "./Body-Components/AtmosphereImage";
export default function Body() {
  return (
    <Grid container px={5}>
      <Grid
        xs={12}
        md={6}
        item
        borderRight={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title />
      </Grid>
      <Grid xs={12} md={6} item>
        <Menu />
      </Grid>
      <Grid item xs={12}>
        <AtmosphereImage />
      </Grid>
    </Grid>
  );
}
