import React, { useState, useEffect } from "react";

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
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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

  const [state, setState] = React.useState({
    checkedAll: false
    // checkedB: true,
    // checkedF: true,
    // checkedG: true,
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

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
        {/* <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Secondary"
      /> */}
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
        {/* <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange('checkedF')}
            value="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      /> */}

        {/* <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value="checkedG"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            value="checkedI"
          />
        }
        label="Custom size"
      /> */}
      </FormGroup>

      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="Exchange Rates"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.th}>Target Currency</TableCell>
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

                return (
                  <TableRow key={rate[0]}>
                    <TableCell>{rate[0]}</TableCell>
                    <TableCell align="right">{rate[1].toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
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
