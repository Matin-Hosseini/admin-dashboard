import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { faIR } from "@mui/x-data-grid/locales";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const columns = [
  // { field: "id", headerName: "شناسه", width: 70 },
  { field: "name", headerName: "نام و نام خانوادگی", width: 180 },
  { field: "phone", headerName: "شماره موبایل", width: 150, editable: true },
  { field: "nationalCode", headerName: "کد ملی", type: "string", width: 120 },
  {
    field: "actions",
    headerName: "حرکات",
    width: 140,
    sortable: false,
    renderCell: (params) => {
      return (
        <div className="flex items-center h-full">
          <FaRegTrashAlt
            className="text-red-500 cursor-pointer"
            onClick={() => console.log(params)}
          />
        </div>
      );
    },
  },
];

const initialRows = [
  {
    id: 1,
    name: "سید متین حسینی",
    phone: "09129323541",
    nationalCode: "0200040431",
  },
  {
    id: 2,
    name: "سارا توحیدیان",
    phone: "09190888127",
    nationalCode: "0200683810",
  },
  {
    id: 3,
    name: "نوید عزیزی",
    phone: "09139284332",
    nationalCode: "0066846390",
  },
  {
    id: 4,
    name: "امین فهیمه امیری",
    phone: "09117645568",
    nationalCode: "0066846390",
  },
  {
    id: 5,
    name: "سید شایان مرتضوی نیک",
    phone: "09028443627",
    nationalCode: "0200040431",
  },
  {
    id: 6,
    name: "مهسا مقیمی",
    phone: "09128767777",
    nationalCode: "0200683810",
  },
  {
    id: 7,
    name: "ریحانه حدادی",
    phone: "09139283654",
    nationalCode: "02005472238",
  },
  {
    id: 8,
    name: "نسترن شکرریز",
    phone: "09124523778",
    nationalCode: "0066846390",
  },
  {
    id: 9,
    name: "دنیا نادری",
    phone: "09190336276",
    nationalCode: "0066846390",
  },
];

export function CustomFooterStatusComponent(props) {
  console.log(props);
  return (
    <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
      <div>Custom Footer Content</div>
      <IconButton onClick={handleDeleteSelected}>
        <FaRegTrashAlt className="text-red-500 cursor-pointer" />
      </IconButton>
    </Box>
  );
}

export default function Table() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState([]);

  const processRowUpdate = (newRow) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? newRow : row))
    );
    return newRow;
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const handleDeleteSelected = () => {
    setRows((prevRows) =>
      prevRows.filter((row) => !selectedRows.includes(row.id))
    );
    setSelectedRows([]);
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
          // footer: () => (
          //   <Box
          //     sx={{ p: 1, display: "flex", justifyContent: "space-between" }}
          //   >
          //     <div>Custom Footer Content</div>
          //     <IconButton
          //       onClick={handleDeleteSelected}
          //       className={`${selectedRows.length === 0 && "hidden"}`}
          //     >
          //       <FaRegTrashAlt className="text-red-500 cursor-pointer text-lg" />
          //     </IconButton>
          //   </Box>
          // ),
        }}
        slotProps={{
          footer: { status },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={processRowUpdate}
      />
    </div>
  );
}
