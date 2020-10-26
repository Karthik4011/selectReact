import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("East");

  var costs = [
    {
      EastCost: "20",
      WestCost: "30",
      NorthCost: "40",
    },
    {
      EastCost: "50",
      WestCost: "60",
      NorthCost: "70",
    },
    {
      EastCost: "80",
      WestCost: "90",
      NorthCost: "140",
    },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="East">East</MenuItem>
          <MenuItem value="West">West</MenuItem>
          <MenuItem value="North">North</MenuItem>
        </Select>
        <div Style="margin-top:20px">
          <Typography>costs of {age}</Typography>
          {costs.map((cost, index) =>
            age == "East" ? (
              <Typography>{cost.EastCost}</Typography>
            ) : age == "West" ? (
              <Typography>{cost.WestCost}</Typography>
            ) : (
              <Typography>{cost.NorthCost}</Typography>
            )
          )}
        </div>
      </FormControl>
    </div>
  );
}
