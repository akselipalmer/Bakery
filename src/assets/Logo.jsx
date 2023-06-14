import { Box, Typography } from "@mui/material";
import CoffeeMakerSharpIcon from "@mui/icons-material/CoffeeMakerSharp";

export default function Logo() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <CoffeeMakerSharpIcon sx={{ fontSize: "40px" }} />
      <Typography ml={1} variant="h4">
        The Brew Haven
      </Typography>
    </Box>
  );
}
