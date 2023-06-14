import { Button, Stack } from "@mui/material";
import React from "react";

export default function MenuItems() {
  return (
    <Stack display="flex" flexDirection="row" justifyContent="center" gap={3}>
      <Button>Item 1</Button>
      <Button>Item 2</Button>
      <Button>Item 3</Button>
    </Stack>
  );
}
