import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  List,
  ListItem,
  Chip,
} from "@mui/material/";
import Autocomplete from "@mui/material/Autocomplete";
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

export default function MainSearch({ criterias, selectedCriteria, onSelect }) {
  // const [searchCriteria] = React.useState("");

  const handleSearchCriteriaChange = (e) => {
    onSelect(e.target.value);
  };
  const [value, setValue] = React.useState([]);

  const [open, setOpen] = React.useState(true);
  return (
    // <div>
      // {/* <h2>Main Search</h2> */}
      <FormControl
        variant="filled"
        size="small"
        // justifyContent="flex-end"
        style={{
          display: "flex",
          // alignItems: "center",
          columnGap: 100,
          minWidth: 300,
        }}
      >
        <InputLabel id="search-criteria-label">
          Select Search Criteria
        </InputLabel>

        <Select
          labelId="search-criteria-label"
          // label="searchCriteria"
          // id="search-criteria"
          // value="searchCriteria"
          // renderValue={(value) => value ? value : <em>Nothing</em>}
          onChange={handleSearchCriteriaChange}
          // style={{ width: 500 }}
          autoWidth={true}
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
          // labelId="search-criteria-label"

          // label="Main criteria"
          // sx={{ width: 200 }}
          select
          // value={searchCriteria}
          onChange={handleSearchCriteriaChange}
          autoWidth={true}
          autoComplete={true}
        >
          {criterias.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField> */}

        {/* <Autocomplete
          // disablePortal
          multiple
          id="main-search" 
          open={open}
          // onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          freesolo
          options={criterias}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              // variant="filled"
              label="Main Search"
              placeholder="Search"
            />
          )}
        ></Autocomplete> */}
      </FormControl>
    // </div>
  );
}
