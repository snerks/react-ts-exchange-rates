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
import { green } from "@material-ui/core/colors";

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

interface ExchangeRatesDateRangeProps {
  data: ExchangeRateDateRangeResponse;
}

const ExchangeRatesDateRange: React.FC<ExchangeRatesDateRangeProps> = ({
  data
}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedAll: false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  // const json = JSON.stringify(data, null, 2);

  const getEndDateRateElement = (
    data: ExchangeRateDateRangeResponse,
    isoCode: string
  ) => {
    return (
      <span>
        {data.end_at &&
          data.rates[data.end_at.toString()] &&
          data.rates[data.end_at.toString()][isoCode].toFixed(4)}
      </span>
    );
  };

  const getDirectionElement = (
    data: ExchangeRateDateRangeResponse,
    isoCode: string,
    startDateRate: number
  ) => {
    return (
      <span>
        {data.end_at &&
          data.rates[data.end_at.toString()] &&
          data.rates[data.end_at.toString()][isoCode] &&
          data.rates[data.end_at.toString()][isoCode] > startDateRate ? (
            <strong>
              <span style={{ color: "green" }}>⯅</span>
            </strong>
          ) : data.end_at &&
            data.rates[data.end_at.toString()] &&
            data.rates[data.end_at.toString()][isoCode] &&
            data.rates[data.end_at.toString()][isoCode] < startDateRate ? (
              <strong>
                <span style={{ color: "red" }}>⯆</span>
              </strong>
            ) : null}
      </span>
    );
  };

  return (
    data && (
      // <pre>{json}</pre>
      <>
        <TableContainer component={Paper}>
          <Table
            // className={classes.table}
            size="small"
            aria-label="Source Currency"
          >
            <TableHead>
              <TableRow>
                <TableCell className={classes.th}>Source Currency</TableCell>
                <TableCell className={classes.th}>Start Date</TableCell>
                <TableCell className={classes.th}>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {data.base}
                </TableCell>
                <TableCell>
                  {data.start_at && data.start_at.toString()}
                </TableCell>
                <TableCell>{data.end_at && data.end_at.toString()}</TableCell>
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
                  Start Date Rate
                </TableCell>

                <TableCell className={classes.th} align="right">
                  End Date Rate
                </TableCell>
                <TableCell className={classes.th} align="center">
                  Direction
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.start_at &&
                data.end_at &&
                data.rates[data.start_at.toString()] &&
                data.rates[data.end_at.toString()] &&
                Object.entries(data.rates[data.start_at.toString()])
                  .sort()
                  .map(rate => {
                    const isoCode = rate[0];
                    const startDateRate = rate[1];

                    const willShow =
                      state.checkedAll ||
                      isoCode === "GBP" ||
                      isoCode === "EUR" ||
                      isoCode === "USD";

                    if (!willShow) {
                      return null;
                    }

                    const currencyMetadata = CurrencyMetadata[isoCode];
                    const symbol = currencyMetadata
                      ? currencyMetadata.symbol
                      : "";
                    const name = currencyMetadata ? currencyMetadata.name : "";

                    return (
                      <TableRow key={isoCode}>
                        {/* <TableCell>{rate[0]}</TableCell> */}
                        <Hidden xsDown>
                          <TableCell>{isoCode}</TableCell>
                        </Hidden>
                        <TableCell style={{ width: 20 }}>{symbol}</TableCell>
                        <TableCell>{name}</TableCell>

                        <TableCell align="right">
                          {rate[1].toFixed(4)}
                        </TableCell>
                        <TableCell align="right">
                          {getEndDateRateElement(data, isoCode)}
                        </TableCell>
                        <TableCell align="center">
                          {getDirectionElement(data, isoCode, startDateRate)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <h1>
          {data.start_at && (
            <span>Start At: {data.start_at.toString() || ""}</span>
          )}
        </h1>
        <pre>
          {data.start_at &&
            JSON.stringify(data.rates[data.start_at.toString()], null, 2)}
        </pre>

        <h1>
          {data.end_at && <span>End At: {data.end_at.toString() || ""}</span>}
        </h1>

        <pre>
          {data.end_at &&
            JSON.stringify(data.rates[data.end_at.toString()], null, 2)}
        </pre> */}
      </>
    )
  );
};

interface FetchExchangeRateLatestProps {
  sourceCurrencyIsoCode: string;
  endDateDaysAgo?: number
}

const FetchExchangeRateLatest = (props: FetchExchangeRateLatestProps) => {

  const getDateFromDaysAgo = (daysAgo: number) => {
    const ONE_DAY = 1000 * 60 * 60 * 24;

    const daysInMilliseconds = ONE_DAY * daysAgo;

    const result = new Date((new Date()).valueOf() - daysInMilliseconds);

    return result;
  }

  const [data, setData] = useState<ExchangeRateLatestResponse | undefined>(
    undefined
  );

  const [endDateDaysAgo, setEndDateDaysAgo] = useState(props.endDateDaysAgo ?? 0);

  // const [previousData, setPreviousData] = useState<
  //   ExchangeRateLatestResponse | undefined
  // >(undefined);

  const [dateRangeData, setDateRangeData] = useState<
    ExchangeRateDateRangeResponse
  >({
    base: "GBP",
    rates: {},
    // start_at: new Date("2020-03-16"),
    // end_at: new Date("2020-03-17")
    start_at: getDateFromDaysAgo(endDateDaysAgo + 1),
    end_at: getDateFromDaysAgo(endDateDaysAgo)
  });

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

  // https://api.exchangeratesapi.io/2020-03-16?base=GBP

  // async function fetchPreviousExchangeRates() {
  //   const currentDate = new Date();
  //   const currentDateIso = currentDate.toISOString();

  //   console.log("fetchPreviousExchangeRates");

  //   // console.log(currentDateIso);

  //   // const datePrevious: string;
  //   const dateIso = "2020-03-16";

  //   console.log(dateIso);

  //   const url = `https://api.exchangeratesapi.io/${dateIso}?base=${sourceCurrencyIsoCodeNormalised}`;

  //   const responseJson = await fetch(url);

  //   const response: ExchangeRateLatestResponse = await responseJson.json();

  //   console.log(currentDateIso);

  //   setPreviousData(response);
  //   setLoading(false);
  // }

  // ExchangeRateDateRangeResponse

  async function fetchExchangeRatesDateRange() {
    const currentDate = new Date();
    // const currentDateIso = currentDate.toISOString();

    console.log("fetchExchangeRatesDateRange");

    // console.log(currentDateIso);

    // const datePrevious: string;
    // const endDateDaysAgo = 2;
    const startDateIso = getDateFromDaysAgo(endDateDaysAgo + 1).toISOString().split("T")[0];
    const endDateIso = getDateFromDaysAgo(endDateDaysAgo).toISOString().split("T")[0];

    console.log(`startDateIso = ${startDateIso}`);
    console.log(`endDateIso = ${endDateIso}`);

    const url = `https://api.exchangeratesapi.io/history?start_at=${startDateIso}&end_at=${endDateIso}&base=${sourceCurrencyIsoCodeNormalised}`;

    // https://api.exchangeratesapi.io/history?start_at=2020-03-16&end_at=2020-03-17&base=GBP

    const responseJson = await fetch(url);

    const response: ExchangeRateDateRangeResponse = await responseJson.json();

    console.log(response);

    setDateRangeData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchExchangeRates();
    // fetchPreviousExchangeRates();
    fetchExchangeRatesDateRange();
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
                {/* <ExchangeRates data={data} /> */}

                <hr></hr>

                <ExchangeRatesDateRange data={dateRangeData} />
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

export interface ExchangeRateMap {
  rates: { [key: string]: number };
}

export interface ExchangeRateDateRangeResponse {
  rates: { [key: string]: { [key: string]: number } };

  base: string;
  start_at: Date;
  end_at: Date;
}

export default FetchExchangeRateLatest;
