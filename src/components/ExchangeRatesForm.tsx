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
          </Select>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default ExchangeRatesForm;
