import { Box, Typography } from "@mui/material";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";

export default function Logo() {
  return (
    <Box display="flex" flexDirection="row">
      <BakeryDiningIcon />
      <Typography ml={2}>LOGO HERE</Typography>
    </Box>
  );
}
