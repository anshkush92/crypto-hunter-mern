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
import { useNavigate } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// Using <Box> </Box> as the wrapper for providing styles to the whole HERO CARD CONTENT
const HeroCaraouselCard = (props) => {
  const { name, image, price, rank, symbol, id } = props;
  const priceSymbol = useSelector((state) => state.currencyChanger.symbol);
  const navigate = useNavigate();

  const coinPage = () => {
    navigate(`/coins/${id}`);
  };

  return (
    <Card
      sx={{
        width: "200px",
        height: "275px",
        maxWidth: "300px",
        // maxHeight: "250px",
        backgroundColor: "#393e46",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="120px"
        image={image}
        sx={{ objectFit: "contain", my: 1 }}
      ></CardMedia>

      <Box backgroundColor="#f7f7f7" height="100%">
        <CardContent sx={{ pb: "8px" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography noWrap variant="body1" sx={{ color: "black" }}>
              {symbol.toUpperCase()}
            </Typography>
            <Typography noWrap variant="body1" sx={{ color: "#393e46" }}>
              Rank - {rank}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography noWrap variant="body1" sx={{ color: "#ff5c8d" }}>
              {name}
            </Typography>
            <Typography noWrap variant="body2" sx={{ color: "#f05454" }}>
              Price - {priceSymbol} {price}
            </Typography>
          </Box>

          <Box mt={1}>
            <Button
              sx={{
                width: "100%",
                color: "black",
                "&:hover": {
                  // color: "white",
                  border: "1px solid",
                  backgroundColor: "transparent",
                },
              }}
              onClick={coinPage}
            >
              Read More
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraouselCard;
