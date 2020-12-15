import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@material-ui/core";
import React from "react";

const headCells = [
  { id: "nik", numeric: false, disablePadding: false, label: "NIK" },
  {
    id: "nama_lengkap",
    numeric: false,
    disablePadding: false,
    label: "Nama Lengkap",
  },
  {
    id: "ttl",
    numeric: false,
    disablePadding: false,
    label: "Tempat Tgl. Lahir",
  },
  {
    id: "umur",
    numeric: true,
    disablePadding: false,
    label: "Umur",
  },
  {
    id: "alamat",
    numeric: false,
    disablePadding: false,
    label: "Alamat",
  },
  {
    id: "jenis_kelamin",
    numeric: false,
    disablePadding: false,
    label: "Jenis Kelamin",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

const EnhancedTableHead = ({ ...props }) => {
  const { order, orderBy, classes, setOrder, setOrderBy } = props;

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { EnhancedTableHead };
