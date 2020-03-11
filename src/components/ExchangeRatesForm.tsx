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
    minWidth: 120
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

  return (
    <>
      {/* <h1>
        ExchangeRatesForm.sourceCurrencyIsoCodeNormalised = [
        {sourceCurrencyIsoCodeNormalised}]
      </h1> */}
      <FormGroup row style={{ margin: 10 }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Source</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sourceCurrencyIsoCodeNormalised}
            onChange={handleSourceCurrencyChangeLocal}
          >
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>

            <MenuItem value={"AUD"}>AUD</MenuItem>
            <MenuItem value={"BGN"}>BGN</MenuItem>
            <MenuItem value={"BRL"}>BRL</MenuItem>
            <MenuItem value={"CAD"}>CAD</MenuItem>
            <MenuItem value={"CHF"}>CHF</MenuItem>
            <MenuItem value={"CNY"}>CNY</MenuItem>
            <MenuItem value={"CZK"}>CZK</MenuItem>
            <MenuItem value={"DKK"}>DKK</MenuItem>
            <MenuItem value={"HKD"}>HKD</MenuItem>
            <MenuItem value={"HRK"}>HRK</MenuItem>
            <MenuItem value={"HUF"}>HUF</MenuItem>
            <MenuItem value={"IDR"}>IDR</MenuItem>
            <MenuItem value={"ILS"}>ILS</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"ISK"}>ISK</MenuItem>
            <MenuItem value={"JPY"}>JPY</MenuItem>
            <MenuItem value={"KRW"}>KRW</MenuItem>
            <MenuItem value={"MXN"}>MXN</MenuItem>
            <MenuItem value={"MYR"}>MYR</MenuItem>
            <MenuItem value={"NOK"}>NOK</MenuItem>
            <MenuItem value={"NZD"}>NZD</MenuItem>
            <MenuItem value={"PHP"}>PHP</MenuItem>
            <MenuItem value={"PLN"}>PLN</MenuItem>
            <MenuItem value={"RON"}>RON</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
            <MenuItem value={"SGD"}>SGD</MenuItem>
            <MenuItem value={"THB"}>THB</MenuItem>
            <MenuItem value={"TRY"}>TRY</MenuItem>
            <MenuItem value={"ZAR"}>ZAR</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default ExchangeRatesForm;
