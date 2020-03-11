import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    // minWidth: 650
  },
  th: {
    fontWeight: 900
  }
});

interface ExchangeRatesProps {
  data: ExchangeRateLatestResponse;
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="Source Currency"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.th}>Source Currency</TableCell>
              <TableCell className={classes.th}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {data.base}
              </TableCell>
              <TableCell>{data.date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="Exchange Rates"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.th}>Target Currency</TableCell>
              <TableCell className={classes.th}>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data.rates)
              .sort()
              .map(rate => (
                <TableRow key={rate[0]}>
                  <TableCell>{rate[0]}</TableCell>
                  <TableCell>{rate[1]}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const FetchExchangeRateLatest = () => {
  const [data, setData] = useState<ExchangeRateLatestResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  async function fetchMyAPI() {
    const url = "https://api.exchangeratesapi.io/latest?base=GBP";

    const responseJson = await fetch(url);

    const response: ExchangeRateLatestResponse = await responseJson.json();

    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>{data && <ExchangeRates data={data} />}</div>
      )}
    </div>
  );
};

export interface ExchangeRateLatestResponse {
  rates: { [key: string]: number };

  base: string;
  date: Date;
}

export default FetchExchangeRateLatest;
