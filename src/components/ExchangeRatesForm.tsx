import React, { useState /*, useEffect */ } from "react";
import {
  FormGroup,
  FormControl,
  Select,
  MenuItem,
  //   FormControlLabel,
  //   Checkbox,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CurrencyMetadata } from "../models/Currencies";
// import classes from "*.module.css";

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
    minWidth: 160
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  }
});

interface ExchangeRatesFormProps {
  sourceCurrencyIsoCode: string;

  handleSourceCurrencyChange: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
}

const ExchangeRatesForm: React.FC<ExchangeRatesFormProps> = (
  props: ExchangeRatesFormProps
) => {
  console.log("ExchangeRatesForm.props", props);

  const classes = useStyles();
  const [
    sourceCurrencyIsoCodeNormalised,
    setSourceCurrencyIsoCodeNormalised
  ] = useState(props.sourceCurrencyIsoCode || "GBP");

  // setSourceCurrencyIsoCodeNormalised(props.sourceCurrencyIsoCode || "GBP");
  const handleSourceCurrencyChangeLocal = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSourceCurrencyIsoCodeNormalised(event.target.value as string);
    props.handleSourceCurrencyChange(event);
  };

  const getCurrencyItemDisplayName = (isoCode: string) => {
    const currencyMetadata = CurrencyMetadata[isoCode];
    const symbol = currencyMetadata ? currencyMetadata.symbol : "";
    const name = currencyMetadata ? currencyMetadata.name : "";

    // const result = `${isoCode} (${symbol}) ${name}`;
    const result = (
      <span title={name}>
        {isoCode} (<strong>{symbol}</strong>) {name}
      </span>
    );

    return result;
  };

  const supportedCurrencyIsoCodes = [
    "GBP",
    "EUR",
    "USD",

    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",

    "DKK",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",

    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",

    "SEK",
    "SGD",
    "THB",
    "TRY",
    "ZAR"
  ];

  return (
    <>
      {/* <h1>
        ExchangeRatesForm.sourceCurrencyIsoCodeNormalised = [
        {sourceCurrencyIsoCodeNormalised}]
      </h1> */}
      <FormGroup row style={{ margin: 10 }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Source Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sourceCurrencyIsoCodeNormalised}
            onChange={handleSourceCurrencyChangeLocal}
          >
            {supportedCurrencyIsoCodes.map(isoCode => (
              <MenuItem value={isoCode}>
                {getCurrencyItemDisplayName(isoCode)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default ExchangeRatesForm;
