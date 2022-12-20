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
  Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCoinsList } from "../../../features/coinsList/coinsList";

// Test -------------------------- Importing the styles / other components ----------------
import TablePaginationActions from "./TabelPaginationActions";
// import { compareRank } from "../../../utilities/Sorting/sort";
import Loader from "../../../components/Loader/Loader";

// Test -------------------------- The current component ----------------------------------
// This component is used for creating the table from the coins data that we get from Cryto API
const CoinsTableFav = ({ newCoinsList, count }) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // Getting the state of currently selected currency
  const { label, symbol } = useSelector((state) => state.currencyChanger);
  const lowerLabel = label.toLowerCase();
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

  // [...newCoinsList].sort(compareRank);
  const newCoinList = newCoinsList.slice(0, count);
  console.log(newCoinList, newCoinsList, count);
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
      align="left"
      sx={{
        backgroundColor: "#393E46",
        fontWeight: "700",
        border: "0px",
        color: "#F7F7F7",
      }}
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
    <Box width="100%" px="5%" backgroundColor="black">
      {isLoading && (
        <Box width="100%" my="10px">
          <Loader></Loader>
        </Box>
      )}
      {coinsList.length === 0 && !isLoading && (
        <Box
          sx={{
            my: "20px",
            display: "flex",
            width: "100%",
            color: "#f05454",
            fontSize: "2rem",
            justifyContent: "center",
          }}
        >
          No Favorite Cryptocurrency Found
        </Box>
      )}
      {coinsList.length !== 0 && (
        <Box
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            mt: "1rem",
            color: "#ff5c8d",
          }}
        >
          Favorite Coins
        </Box>
      )}
      {coinsList.length > 0 && (
        <Grid container>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              sx={{
                width: "100%",
                m: "30px auto",
              }}
            >
              <Table stickyHeader>
                <TableHead style={{ backgroundColor: "#F7F7F7" }}>
                  <TableRow>{tableRowsComponent}</TableRow>
                </TableHead>
                <TableBody
                  sx={{ backgroundColor: "#020a0a", color: "#F7F7F7" }}
                >
                  {newCoinList.map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={() => navigate(`/coins/${row.id}`)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#1a1a1a",
                        },
                      }}
                    >
                      <TableCell sx={{ color: "#F7F7F7" }}>
                        {row.market_cap_rank}
                      </TableCell>

                      <TableCell
                        align="left"
                        sx={{
                          color: "#F7F7F7",
                        }}
                      >
                        <Box display="flex" alignItems="center" gap="15px">
                          <>
                            <Box
                              component="img"
                              src={row.image.large}
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
                            <Typography variant="subtitle2">
                              {row.name}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="left" sx={{ color: "#F7F7F7" }}>
                        {symbol} {row.market_data.current_price[lowerLabel]}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          color:
                            row.market_data.market_cap_change_percentage_24h >=
                            0
                              ? "#50D890"
                              : "#f05454",
                        }}
                      >
                        {row.market_data.market_cap_change_percentage_24h !==
                        null
                          ? row.market_data.market_cap_change_percentage_24h
                          : "0"}{" "}
                        %
                      </TableCell>
                      <TableCell align="left" sx={{ color: "#F7F7F7" }}>
                        {symbol} {row.market_data.market_cap[lowerLabel]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter sx={{ backgroundColor: "#f7f7f7" }}>
                  <TableRow sx={{ border: "0px" }}>
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
                      colSpan={9999}
                      count={count}
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
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinsTableFav;
