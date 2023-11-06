import { Autocomplete, Chip, TextField, createFilterOptions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";


// to limit the number of shown options in the dropdown
// const OPTIONS_LIMIT = 2;
// const filterOptions = createFilterOptions({
//   limit: OPTIONS_LIMIT
// });


// const SciTable = (props) => {
export default function SciTable(props) {
    const [value, setValue] = useState([]);

    const [open, setOpen] = useState(true);
    return (
    //   <DataGrid
    //     // autoPageSize="true"
    //     density={props.density}
    //     // autoHeight="true"
    //     rows={props.rows}
    //     columns={props.columns}
    //     pageSize={12}
    //     pageSizeOptions={[5, 10]}
    //     checkboxSelection
    //     // disableColumnMenu='true'
    //     disableColumnSelector="true"
    //     // loading='true'
    //     disableRowSelectionOnClick="true"
    //     onRowSelectionModelChange={(ids) => props.handleSelection(ids)}
    //   />
      <Autocomplete
            // filterOptions={filterOptions}
            
            disablePortal
            multiple
            id={props.id }
            // open={open}
            disableCloseOnSelect
            // onOpen={() => setOpen(true)}
            // onClose={() => setOpen(false)}
            onChange={(event, newValue) => {
            console.log("NEW_VALIE:"+newValue)
              setValue(newValue);
              props.handleSelection(newValue);
            }}
            freesolo
            options={props.rows.map(row=>row.name)}
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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
                {...params}
                // variant="filled"
                label={props.columns[0].headerName}
                placeholder="Search"
              />
            )}
          ></Autocomplete>
    );
  };