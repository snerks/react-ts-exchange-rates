import React from "react";
import Hidden from "@material-ui/core/Hidden";

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

import { CurrencyMetadata } from "../models/Currencies";
import { ExchangeRateHistoricalDateResponse } from "../models/Historical";

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

// interface ExchangeRatesProps {
//   data: ExchangeRateLatestResponse;
// }

// const ExchangeRates: React.FC<ExchangeRatesProps> = ({ data }) => {
//   const classes = useStyles();

//   // const theme = useTheme();
//   // const breakpoints = theme.breakpoints;

//   // console.log("breakpoints", breakpoints);

//   const [state, setState] = React.useState({
//     checkedAll: false
//     // checkedB: true,
//     // checkedF: true,
//     // checkedG: true,
//   });

//   // const [
//   //   sourceCourrencyIsoCodeNormalised,
//   //   setSourceCourrencyIsoCodeNormalised
//   // ] = useState(data.base || "GBP");

//   const handleChange = (name: string) => (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setState({ ...state, [name]: event.target.checked });
//   };

//   // const handleSourceCurrencyChange = (
//   //   event: React.ChangeEvent<{ value: unknown }>
//   // ) => {
//   //   setSourceCourrencyIsoCodeNormalised(event.target.value as string);
//   // };

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table
//           className={classes.table}
//           size="small"
//           aria-label="Source Currency"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell className={classes.th}>Source Currency</TableCell>
//               <TableCell className={classes.th}>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell component="th" scope="row">
//                 {data.base}
//               </TableCell>
//               <TableCell>{data.date}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <FormGroup row style={{ margin: 10 }}>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={state.checkedAll}
//               onChange={handleChange("checkedAll")}
//               value="checkedAll"
//               color="primary"
//             />
//           }
//           label="Show All"
//         />
//       </FormGroup>

//       <TableContainer component={Paper}>
//         <Table
//           className={classes.table}
//           size="small"
//           aria-label="Exchange Rates"
//         >
//           <TableHead>
//             <TableRow>
//               <Hidden xsDown>
//                 <TableCell className={classes.th}>Target Currency</TableCell>
//               </Hidden>
//               {/* <TableCell className={classes.th}>Target</TableCell> */}
//               <TableCell className={classes.th} style={{ width: 20 }}>
//                 Symbol
//               </TableCell>
//               <TableCell className={classes.th}>Name</TableCell>

//               <TableCell className={classes.th} align="right">
//                 Rate
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Object.entries(data.rates)
//               .sort()
//               .map(rate => {
//                 const isoCode = rate[0];

//                 const willShow =
//                   state.checkedAll ||
//                   isoCode === "GBP" ||
//                   isoCode === "EUR" ||
//                   isoCode === "USD";

//                 if (!willShow) {
//                   return null;
//                 }

//                 const currencyMetadata = CurrencyMetadata[isoCode];
//                 const symbol = currencyMetadata ? currencyMetadata.symbol : "";
//                 const name = currencyMetadata ? currencyMetadata.name : "";

//                 return (
//                   <TableRow key={rate[0]}>
//                     {/* <TableCell>{rate[0]}</TableCell> */}
//                     <Hidden xsDown>
//                       <TableCell>{rate[0]}</TableCell>
//                     </Hidden>
//                     <TableCell style={{ width: 20 }}>{symbol}</TableCell>
//                     <TableCell>{name}</TableCell>
//                     <TableCell align="right">{rate[1].toFixed(4)}</TableCell>
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

interface ExchangeRatesDateRangeProps {
  data: ExchangeRateDateRangeResponse;
  // data: ExchangeRateHistoricalDateResponse;
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

  // const dataJson = JSON.stringify(data, null, 2);
  // console.log("ExchangeRatesDateRange", "dataJson", dataJson);

  const getEndDateRateElement = (
    data: ExchangeRateDateRangeResponse,
    // data: ExchangeRateHistoricalDateResponse,
    isoCode: string
  ) => {
    return (
      <span>
        {data.rates &&
          data.rates.keys &&
          data.rates.keys.length > 1 &&
          data.rates[1][isoCode] &&
          data.rates[1][isoCode].toFixed(4)}
        {/* {data.date} */}
      </span>
    );
  };

  const getDirectionElement = (
    startDateRate: number,
    endDateRate: number
  ) => {
    return (
      <>
        <span>
          {endDateRate > startDateRate ? (
            <strong>
              <span style={{ color: "green" }}>⯅</span>
            </strong>
          ) : endDateRate < startDateRate ? (
            <strong>
              <span style={{ color: "red" }}>⯆</span>
            </strong>
          ) : null}
        </span>
      </>
    );
  };

  const getMatchingEndDateRate = (
    data: ExchangeRateDateRangeResponse,
    isoCode: string
  ) => {
    console.log("data.end_at", data.end_at);
    console.log("data.rates.keys", data.rates.keys);
    console.log("data.rates.keys.length", data.rates.keys && data.rates.keys.length);
    console.log("data.rates[Object.keys(data.rates)[1]][isoCode]", data.rates.keys && data.rates.keys.length > 1 && data.rates[Object.keys(data.rates)[1]][isoCode]);

    return (
      data.end_at &&
      data.rates.keys &&
      data.rates.keys.length > 1 &&
      data.rates[Object.keys(data.rates)[1]][isoCode]
    );
  };

  return (
    data && (
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

        {/* Object.entries(data.rates[0]) */}

        {/* <h1>data.rates[Object.keys(data.rates)[1]]</h1>
        <pre>{JSON.stringify(data.rates[Object.keys(data.rates)[1]], null, 2)}</pre> */}

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
                // data.date &&
                // data.date &&
                data.rates &&
                data.rates[Object.keys(data.rates)[0]] &&
                // data.rates[data.date.toString()] &&
                // Object.entries(data.rates[data.date.toString()])
                Object.entries(data.rates[Object.keys(data.rates)[0]]) // Start Date
                  .sort()
                  .map(rate => {
                    // const startDate = ra
                    const isoCode = rate[0];
                    const startDateRate = rate[1];
                    const endDateRate = data.rates[Object.keys(data.rates)[1]][isoCode];

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
                          {/* {getEndDateRateElement(data, isoCode)} */}
                          <span>
                            {endDateRate.toFixed(4)}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                          {getDirectionElement(startDateRate, endDateRate)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  );
};

// export interface ExchangeRateLatestResponse {
//   rates: { [key: string]: number };

//   base: string;
//   date: Date;
// }

export interface ExchangeRateDateRangeResponse {
  rates: { [key: string]: { [key: string]: number } };

  base: string;
  start_at: Date;
  end_at: Date;
}

export default ExchangeRatesDateRange;
