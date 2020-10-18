import { FormControl, InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.12)",
      },
      "&:hover fieldset": {
        borderColor: "#ff0000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffff00",
      },
    },
  },
  outline: {
    borderColor: fade("#000", 0.12),
    "&:hover": {
      borderColor: "#ff0000 !important",
    },
  },
  inputRoot: {
    paddingRight: "10px !important",
    "&:hover fieldset": {
      borderColor: "rgba(0,0,0,0.30) !important",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: fade("#000", 0.3),
        border: "solid 1px",
      },
    },
  },
}));

interface Props {}

export default function SearchTicker(props: Props) {
  const classes = useStyles();

  return (
    <Autocomplete
      style={{ width: "50vw" }}
      multiple
      id="tags-standard"
      freeSolo
      options={tickers}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <FormControl fullWidth ref={params.InputProps.ref}>
          <OutlinedInput
            inputProps={params.inputProps}
            {...params.InputProps}
            classes={{
              root: classes.inputRoot,
              notchedOutline: classes.outline,
            }}
            placeholder="Digite o(s) ativos para análise, exemplo: COGN3"
            id="standard-adornment-password"
            // value={values.password}
            // onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      )}
    />
  );
}

const tickers = [
  { name: "MOVI3", key: "movi3" },
  { name: "COGN3", key: "cogn3" },
];
