// Test -------------------------- Importing the Packages ---------------------------------
import {
  TableContainer,
  TableRow,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoCoinsList from "../../../hooks/coinGecko/useCoinGeckoList";
import { useSelector } from "react-redux";

// Test -------------------------- The current component ----------------------------------
// This component is used for creating the table from the coins data that we get from Cryto API
const CoinsTable = () => {
  // Getting the state of currently selected currency
  const { label, symbol } = useSelector((state) => state.currencyChanger);
  console.log(label, symbol);

  // Getting the coins Data from the API and then listing in the form of the table
  const coinsList = useCoinGeckoCoinsList(label.toLowerCase(), "100", "1");
  console.log(coinsList);

  return (
    <TableContainer
      sx={{ backgroundColor: "lavender", width: "90%", m: "auto" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "yellow" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "700" }}>Rank</TableCell>
            <TableCell align="left" sx={{ fontWeight: "700" }}>
              Coin
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "700" }}>
              Price
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "700" }}>
              24h Change
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "700" }}>
              MarketCap
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "black", color: "white" }}>
          {coinsList.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ color: "white" }}>
                {row.market_cap_rank}
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                <Box display="flex" alignItems="center" gap="15px">
                  <>
                    <Box
                      component="img"
                      src={row.image}
                      alt={row.name}
                      height="50px"
                    ></Box>
                  </>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography variant="h6">
                      {row.symbol.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle2">{row.name}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {symbol} {row.current_price}
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {row.price_change_percentage_24h}
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                {symbol} {row.market_cap}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinsTable;
