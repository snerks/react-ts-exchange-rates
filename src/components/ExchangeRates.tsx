import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
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
    minWidth: 650
  }
});

interface ExchangeRatesProps {
  data: ExchangeRateLatestResponse;
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="Source Currency">
        <TableHead>
          <TableRow>
            <TableCell>Source Currency ISO Code</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{data.base}</TableCell>
            <TableCell>{data.date}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className={classes.table} aria-label="Exchange Rates">
        <TableHead>
          <TableRow>
            <TableCell>Target Currency ISO Code</TableCell>
            <TableCell>Rate</TableCell>
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
    </Paper>
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

// Generated by https://quicktype.io

// export interface BlogPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface CurrencyIsoCodeRateMap {
//     [currencyIsoCode: string]: number;
// }

export interface ExchangeRateLatestResponse {
  rates: { [key: string]: number };

  base: string;
  date: Date;
}

export default FetchExchangeRateLatest;
