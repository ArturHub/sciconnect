import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material/";
import PropTypes from "prop-types";

// Select.propTypes = {
//   /**
//    * The components used for each slot inside the Select.
//    * Either a string to use a HTML element or a component.
//    * @default {}
//    */
//   slots: PropTypes.shape({
//     listbox: PropTypes.elementType,
//     popper: PropTypes.func,
//     root: PropTypes.elementType,
//   }),
// };

export default function MainSearch({
  criterias,
  selectedCriteria,
  onSelect,
}) {
  // const [searchCriteria] = React.useState("");

  const handleSearchCriteriaChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: 8 }}>
      <h2>Main Search</h2>
      <FormControl variant="filled" size="small">
        <InputLabel id="search-criteria-label">
          Select Search Criteria
        </InputLabel>

        <Select
          labelId="search-criteria-label"
          // label={searchCriteria? "searchCriteria" :""}
          // id="search-criteria"
          // value={searchCriteria}
          // renderValue={(value) => value ? value : <em>Nothing</em>}
          onChange={handleSearchCriteriaChange}
          style={{ width: 500 }}
          autoWidth={false}
          // MenuProps={{PaperProps:{sx:{left:`10px !importatnt`}}}}
        >
          {criterias.map((name) => (
            <MenuItem key={name} value={name} onChange={() => onSelect(name)}>
              {name}
            </MenuItem>
          ))}
          <FormHelperText sx={{ marginLeft: 0 }}> main search </FormHelperText>
        </Select>

        {/* <TextField
          size="small"
          labelId="search-criteria-label"

          label="Main criteria"
          sx={{ width: 200 }}
          select
          // value={searchCriteria}
          onChange={handleSearchCriteriaChange}
          autoWidth={true}
          autoComplete={true}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField> */}
      </FormControl>
    </div>
  );
}
