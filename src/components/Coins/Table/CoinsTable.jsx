// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  TableRow,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  Box,
  Paper,
  TableFooter,
  TablePagination,
  LinearProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCoinsList } from "../../../features/coinsList/coinsList";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoCoinsList from "../../../hooks/coinGecko/useCoinGeckoList";
import TablePaginationActions from "./TabelPaginationActions";
import { compareRank } from "../../../utilities/Sorting/sort";

// Test -------------------------- The current component ----------------------------------
// This component is used for creating the table from the coins data that we get from Cryto API
const CoinsTable = () => {
  // Getting the state of currently selected currency
  const { label, symbol } = useSelector((state) => state.currencyChanger);
  // console.log(label, symbol);

  // For changing the page, when clicked on the table row
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { coinsList, searchValue } = useSelector(
    (state) => state.coinsListHandler
  );
  // console.log(coinsList);

  // Handling the state in the page, for setting the page, and the rows per page
  // const [coinsList, setCoinsList] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  // Getting the coins Data from the API and then listing in the form of the table
  const newCoinsList = useCoinGeckoCoinsList(
    label.toLowerCase(),
    rowsPerPage,
    page + 1
  );

  [...newCoinsList].sort(compareRank);
  // console.log(newCoinsList);
  const length = coinsList.length;

  useEffect(() => {
    dispatch(
      setCoinsList({
        coinsList: newCoinsList.filter(
          (coin) =>
            coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
        ),
      })
    );
    setIsLoading(length === 0);

    // Stops loading the data after 5 sec which means there is no data related to it
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // console.log(coinsList);
    // console.log(newCoinsList, newArray, searchValue);

    return () => {
      console.log("Cleanup function from CoinsTable.jsx");
    };
  }, [length, dispatch, newCoinsList, searchValue]);

  // Storing the heading of the table Rows
  const tableRows = ["Rank", "Coin", "Price", "24hr Change", "Market Cap"];

  const tableRowsComponent = tableRows.map((cell, index) => (
    <TableCell
      key={cell}
      sx={{ backgroundColor: "yellow", fontWeight: "700", textAlign: "left" }}
    >
      {cell}
    </TableCell>
  ));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box width="90%" m="auto">
      {isLoading && (
        <Box width="100%" mb="10px">
          <LinearProgress sx={{ backgroundColor: "yellow" }}></LinearProgress>
        </Box>
      )}
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          m: "30px auto",
          overflowX: "initial",
          // borderRadius: "8px",
        }}
      >
        <Table stickyHeader>
          <TableHead style={{ backgroundColor: "yellow" }}>
            <TableRow>{tableRowsComponent}</TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#020a0a", color: "white" }}>
            {coinsList.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => navigate(`/coins/${row.id}`)}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
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
                        loading="lazy"
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
                <TableCell
                  align="left"
                  sx={{
                    color:
                      row.price_change_percentage_24h >= 0 ? "green" : "red",
                  }}
                >
                  {row.price_change_percentage_24h} %
                </TableCell>
                <TableCell align="left" sx={{ color: "white" }}>
                  {symbol} {row.market_cap}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  50,
                  75,
                  100,
                  125,
                  { label: "All", value: 250 },
                ]}
                colSpan={3}
                count={100 * 250}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              ></TablePagination>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinsTable;
