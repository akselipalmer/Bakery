import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function CoffeeMenuOptions() {
  return (
    <Box p={3}>
      <Typography variant="h5" mb={1}>
        COFFEE
      </Typography>
      <Stack gap={0.5} pl={2}>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">
            Single-origin Ethiopian Yirgacheffe
          </Typography>
          <Typography variant="h6">3.00</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">Costa Rican Tarrazu</Typography>
          <Typography variant="h6">3.00</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">Brazilian Cerrado</Typography>
          <Typography variant="h6">3.50</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

function TeaMenuOptions() {
  return (
    <Box px={3} pb={2}>
      <Typography variant="h5" mb={1}>
        SPECIALTIES
      </Typography>
      <Stack gap={0.5} pl={2}>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">Matcha Latte</Typography>
          <Typography variant="h6">3.00</Typography>
        </Stack>
        <Typography variant="body2" mr={10}>
          Ceremonial grade matcha combined with frothy oat milk and a hint of
          honey
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">Cold Brew Creations</Typography>
          <Typography variant="h6">3.25</Typography>
        </Stack>
        <Typography variant="body2" mr={10}>
          Nitro Cold Brew with cascara syrup and a splash of vanilla
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="h6">Herbal Infusions</Typography>
          <Typography variant="h6">4.50</Typography>
        </Stack>
        <Typography variant="body2" mr={10}>
          House-infused hibiscus and ginger tea with a touch of lemongrass
        </Typography>
      </Stack>
    </Box>
  );
}

export { CoffeeMenuOptions, TeaMenuOptions };
