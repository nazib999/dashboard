import React from "react";
import "./table.scss";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "email", headerName: "Email", width: 230 },
  { field: "address", headerName: "Address", width: 230 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "age",
    headerName: "Age",

    width: 180,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 34,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "First",
    age: 15,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    email: "nazibullah@gamil.com",
    address: "New York, Us",
    status: "Pending",
  },
];

const TableView = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default TableView;
