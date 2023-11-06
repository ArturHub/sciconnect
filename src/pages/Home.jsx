import {
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import MainSearch from "../components/MainSearch";
// import MainSearch from "../components/MainSearch2";
import data from "../assets/data";
import { DataGrid } from "@mui/x-data-grid";
import SciTable from "../components/SciTable";
// const criterias = [
//   "institutions",
//   "analysis",
//   "researchers",
//   "microorganisms",
//   "instruments",
// ];

const SciPaper = styled(Paper)(({ theme }) => ({
  // width: 120,
  // height: 120,
  // padding: theme.spacing(2),
  // ...theme.typography.body2,
  // textAlign: 'center',
  // sx={{
  // height: 400,
  width: 300,
  backgrou2ndColor: (theme) =>
    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // }}
}));



// const CustomChip = ({ label, onDelete }) => {
//   return (
//     <Chip
//       variant="outlined"
//       color="secondary"
//       label={label}
//       onDelete={onDelete}
//     />
//   );
// };

function get_columns(name) {
  return [{ 
    field: "name", 
    headerName: name, width: 200,
    // headerClassName: 'super-app-theme--header',
  }];
}
// const columns = [
//   // { field: 'id', headerName: 'ID' },
//   { field: 'name', headerName: 'Title', width: 300 },
// ]

export default function Home() {
  const [spacing, setSpacing] = useState(2);
  const [dense, setDense] = useState(false);
  const [debug, setDebug] = useState(false);

  const criterias = data.connections.map((con) => con.name);
  const [mainFilter, setMainFilter] = useState("");
  const [otherFilters, setOtherFilters] = useState([]);
  const [mainRows, setMainRows] = useState([]);
  const [mainColumns, setMainColumns] = useState([]);
  const [otherColumns, setOtherColumns] = useState([]);
  const [otherRows, setOtherRows] = useState([]);

  const [selection, setSelection] = useState([]);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
    console.log("dense: " + dense);
  };
  const handleDebug = (event) => {
    setDebug(event.target.checked);
    console.log("dense: " + dense);
  };

  const handleCriteria = (criteria) => {
    setMainFilter(criteria);

    let criteria_id = data.connections.find((c) => c.name === criteria);
    let others = criteria_id.connected.map((id) =>
      data.connections.find((c) => c.id == id)
    );
    setOtherFilters(others);

    // setOtherCriteria([
    //   ...new Set(dataModel.institutions.map((institution) => institution.name)),
    // ])

    setMainColumns(get_columns(criteria));
    console.log(
      mainColumns.length != 0 && mainColumns.map((f) => f.headerName + ", ")
    );

    setMainRows(data[criteria_id.colname]);
    console.log(
      "mainRows: " + mainRows.length != 0 && mainRows.map((f) => f.name + ", ")
    );

    setOtherColumns(otherFilters.map((o) => get_columns(o.name)));
    console.log(otherColumns);

    let colnames = others.map((o) => o.colname);
    console.log("colnames: " + colnames);
    console.log(data[colnames[1]]);
    setOtherRows(colnames.map((c) => data[c]));
    console.log(otherRows);
  };

  const handleSelection = (ids) => {
    console.log("handleSelection:" + ids);
    // local vars set to unfiltered other rows for new filter to apply
    let colnames = otherFilters.map((o) => o.colname);
    let tempOtherRows = colnames.map((c) => data[c]);

    console.log("colnames:" + colnames.map((o) => o));
    setOtherRows(colnames.map((c) => data[c]));
    if (ids.length > 0) {
      // *** alternative
      // const selectedIDs = new Set(ids);
      // const selectedRowData = mainRows.filter(
      //   (row) => selectedIDs.has(row.id)
      // )
      const selectedRowData = ids.map((id) =>
        // mainRows.find((row) => row.id === id) => in case of table return 
        mainRows.find((row) => row.name === id)

      );
      setSelection(selectedRowData);
      console.log("selectedRowData:" + selectedRowData.map((i) => i.name));
      console.log(tempOtherRows);
      // filter based on selected items
      let filteredRows = tempOtherRows.map((or, colId) =>
        or.filter((o) => {
          let hasit = false;
          hasit = selectedRowData.some((sel) =>
            sel[colnames[colId]].includes(o.id)
          );
          // *** alternative
          // hasit = selectedRowData
          //   .flatMap((sel) => sel[colnames[colId]])
          //   .includes(o.id);
          // *** alternative
          // selectedRowData.forEach(function(sel,i2){
          //   console.log("selectedRowData[i2]:" +sel.name+"["+i2+"]")
          //   // console.log("or[colId]: "+or.map(orr=>orr.name)+ "["+colId+"]");
          console.log("o:" + o.name);
          //   console.log("colindex:" +colnames[colId]);
          //   console.log("colindex:" +sel[colnames[colId]]);
          //   console.log("iuncludes:" + sel[colnames[colId]].includes(o.id))
          //   hasit = hasit || sel[colnames[colId]].includes(o.id)
          // })

          console.log("hasit:" + hasit);
          return hasit;
        })
      );

      setOtherRows(filteredRows);
      console.log(
        "flatmap:" + selectedRowData.flatMap((sel) => sel[colnames[0]])
      );
      console.log("otherRows:" + otherRows[0]);
    }
  };

  const handleOtherSelection = (ids) => {};

  const filteredResearchers = data.researchers.filter(
    (researcher) => researcher.institution === mainFilter
  );

  return (
    // <div>Home Page</div>
    <>
      <Grid item xs='auto'>
      <Grid padding={1}>
        <MainSearch
          criterias={criterias}
          selectedCriteria={mainFilter}
          onSelect={(criteria) => handleCriteria(criteria)}
        />
        {/* <FormControlLabel
          control={
            <Switch
              id="denseSwitch"
              checked={dense}
              onChange={handleChangeDense}
            />
          }
          label="Dense padding"
        />
        <FormControlLabel
          control={
            <Switch id="debugSwitch" checked={debug} onChange={handleDebug} />
          }
          label="Debug"
        /> */}
        </Grid>
        {/* <MainSearch2 /> */}
        {debug && (
          <Grid>
            <Typography>mainFilter: {mainFilter}</Typography>
            <Typography>
              otherFilters: {otherFilters.map((f) => f.name + ", ")}{" "}
            </Typography>
            <Typography>
              mainColumns.headerName:{" "}
              {mainColumns.length != 0 &&
                mainColumns.map((f) => f.headerName + ", ")}
            </Typography>
            <Typography>
              mainRows:{" "}
              {mainRows.length != 0 && mainRows.map((f) => f.name + ", ")}
            </Typography>
            <Typography>
              otherRows.header:{" "}
              {otherRows.name != 0 &&
                otherRows.map((f) => f.map((g) => g.name) + ", ")}
            </Typography>
            <Typography>select.: {selection.map((s) => s.name)}</Typography>
            <Typography>MYDATA{data["analysis"][0].id}</Typography>
          </Grid>
        )}
        <Grid container justifyContent="center" spacing={spacing}>
          <Grid key={mainFilter} item>
            {mainFilter !== "" && (
              <SciPaper
                // variant="outlined"
                elevation="5"
              >
                {/* <Typography>{selectedCriteria}</Typography> */}
                <SciTable
                  id='-1'
                  rows={mainRows}
                  columns={mainColumns}
                  density={dense ? "compact" : "confortable"}
                  handleSelection={handleSelection}
                />
              </SciPaper>
            )}
          </Grid>
          {otherRows.map((value, index) => (
            <Grid key={index} item>
              <SciPaper>
                {/* <Typography>{value.name}</Typography> */}
                <SciTable
                  id={index}
                  rows={value}
                  columns={get_columns(otherFilters[index].name)}
                  density={dense ? "compact" : "confortable"}
                  handleSelection={handleOtherSelection}
                />
              </SciPaper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
