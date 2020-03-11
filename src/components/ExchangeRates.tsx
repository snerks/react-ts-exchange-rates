import React, { useState, useEffect } from "react";
// import { useTheme /*, Theme, createStyles */ } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// import withWidth, { WithWidth } from "@material-ui/core/withWidth";

import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import ExchangeRatesForm from "./ExchangeRatesForm";
import { CurrencyMetadata } from "../models/Currencies";

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
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  }
});

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//       flex: '1 0 auto',
//       margin: theme.spacing(1),
//     },
//   }),
// );

interface ExchangeRatesProps {
  data: ExchangeRateLatestResponse;
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ data }) => {
  const classes = useStyles();

  // const theme = useTheme();
  // const breakpoints = theme.breakpoints;

  // console.log("breakpoints", breakpoints);

  const [state, setState] = React.useState({
    checkedAll: false
    // checkedB: true,
    // checkedF: true,
    // checkedG: true,
  });

  // const [
  //   sourceCourrencyIsoCodeNormalised,
  //   setSourceCourrencyIsoCodeNormalised
  // ] = useState(data.base || "GBP");

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  // const handleSourceCurrencyChange = (
  //   event: React.ChangeEvent<{ value: unknown }>
  // ) => {
  //   setSourceCourrencyIsoCodeNormalised(event.target.value as string);
  // };

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

      <FormGroup row style={{ margin: 10 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAll}
              onChange={handleChange("checkedAll")}
              value="checkedAll"
              color="primary"
            />
          }
          label="Show All"
        />
      </FormGroup>

      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="Exchange Rates"
        >
          <TableHead>
            <TableRow>
              <Hidden xsDown>
                <TableCell className={classes.th}>Target Currency</TableCell>
              </Hidden>
              {/* <TableCell className={classes.th}>Target</TableCell> */}
              <TableCell className={classes.th} style={{ width: 20 }}>
                Symbol
              </TableCell>
              <TableCell className={classes.th}>Name</TableCell>

              <TableCell className={classes.th} align="right">
                Rate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data.rates)
              .sort()
              .map(rate => {
                const isoCode = rate[0];

                const willShow =
                  state.checkedAll ||
                  isoCode === "GBP" ||
                  isoCode === "EUR" ||
                  isoCode === "USD";

                if (!willShow) {
                  return null;
                }

                const currencyMetadata = CurrencyMetadata[isoCode];
                const symbol = currencyMetadata ? currencyMetadata.symbol : "";
                const name = currencyMetadata ? currencyMetadata.name : "";

                return (
                  <TableRow key={rate[0]}>
                    {/* <TableCell>{rate[0]}</TableCell> */}
                    <Hidden xsDown>
                      <TableCell>{rate[0]}</TableCell>
                    </Hidden>
                    <TableCell style={{ width: 20 }}>{symbol}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{rate[1].toFixed(4)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

interface FetchExchangeRateLatestProps {
  sourceCurrencyIsoCode: string;
}

const FetchExchangeRateLatest = (props: FetchExchangeRateLatestProps) => {
  const [data, setData] = useState<ExchangeRateLatestResponse | undefined>(
    undefined
  );

  const [loading, setLoading] = useState(true);

  const [
    sourceCurrencyIsoCodeNormalised,
    setSourceCurrencyIsoCodeNormalised
  ] = useState(props.sourceCurrencyIsoCode || "GBP");

  const handleSourceCurrencyChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    // console.log("ExchangeRate: handleSourceCurrencyChange : START");
    setSourceCurrencyIsoCodeNormalised(event.target.value as string);
    // console.log("ExchangeRate: handleSourceCurrencyChange : END");
  };

  async function fetchExchangeRates() {
    const url = `https://api.exchangeratesapi.io/latest?base=${sourceCurrencyIsoCodeNormalised}`;

    const responseJson = await fetch(url);

    const response: ExchangeRateLatestResponse = await responseJson.json();

    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchExchangeRates();
  }, [sourceCurrencyIsoCodeNormalised]);

  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          {data && (
            <>
              <ExchangeRatesForm
                sourceCurrencyIsoCode={sourceCurrencyIsoCodeNormalised}
                handleSourceCurrencyChange={handleSourceCurrencyChange}
              />
              <ExchangeRates data={data} />
            </>
          )}
        </div>
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
