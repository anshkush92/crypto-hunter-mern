// Test -------------------------- Importing the Packages ---------------------------------
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { useSelector } from "react-redux";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// Using <Box> </Box> as the wrapper for providing styles to the whole HERO CARD CONTENT
const HeroCaraouselCard = (props) => {
  const { name, image, price, rank, symbol } = props;
  const priceSymbol = useSelector((state) => state.currencyChanger.symbol);

  return (
    <Card
      sx={{
        width: "200px",
        maxWidth: "300px",
        maxHeight: "300px",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="120px"
        image={image}
        sx={{ objectFit: "contain" }}
      ></CardMedia>

      <Box backgroundColor="#ebebeb">
        <CardContent sx={{ pb: "8px" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" sx={{ color: "black" }}>
              {symbol.toUpperCase()}
            </Typography>
            <Typography variant="body1" sx={{ color: "#2a3d85" }}>
              Rank - {rank}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variant="body1" sx={{ color: "#136563" }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#cf2626" }}>
              Price - {priceSymbol} {price}
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ pt: "0" }}>
          <Button>Read More</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraouselCard;
