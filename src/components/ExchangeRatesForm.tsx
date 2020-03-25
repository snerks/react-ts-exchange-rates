import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  const classes = useStyles();

  const [
    sourceCurrencyIsoCodeNormalised,
    setSourceCurrencyIsoCodeNormalised
  ] = useState(props.sourceCurrencyIsoCode || "GBP");

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

    const result = (
      <span title={name}>
        {isoCode} (<strong>{symbol}</strong>) {name}
      </span>
    );

    return result;
  };

  const supportedCurrencyIsoCodes = Object.keys(CurrencyMetadata);
  // console.log("ExchangeRatesForm", "supportedCurrencyIsoCodes", supportedCurrencyIsoCodes);

  return (
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
            <MenuItem value={isoCode} key={isoCode}>
              {getCurrencyItemDisplayName(isoCode)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormGroup>
  );
};

export default ExchangeRatesForm;
