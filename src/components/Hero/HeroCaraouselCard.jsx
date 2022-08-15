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

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const HeroCaraouselCard = () => {
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
        alt="random"
        height="120px"
        // width="50px"
        image="https://assets.coingecko.com/coins/images/16801/large/ufo.png?1644048038"
      ></CardMedia>

      <CardContent sx={{ pb: "8px" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1">BTC</Typography>
          <Typography variant="body1">Rank - 230</Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography variant="body2">Bitcoin</Typography>
          <Typography variant="body2">Price - $55</Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ pt: "0" }}>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraouselCard;
