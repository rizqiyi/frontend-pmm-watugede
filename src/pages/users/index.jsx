import React, { useEffect, useState } from "react";
import axios from "axios";
import KartuKeluargaTableBodyComponent from "./table-body/table-body";
import {
  Divider,
  Table,
  TableContainer,
  Paper,
  Box,
  Typography,
  TablePagination,
  CircularProgress,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { KartuKeluargaTableHeadComponent } from "./table-head/table-head";
import { Field, Form, Formik } from "formik";
import { useStyles } from "./index.style";
import deleteDataImage from "../../assets/images/delete-data.svg";
import {
  PasswordField,
  TextFormField,
} from "../../components/styled-textfield/styled-textfield";
import { SelectFormField } from "../../components/select-menus/select-menus";

const Index = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  const [rowDetail, setRowDetail] = useState({});
  const [idToDelete, setIdToDelete] = useState("");
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);

      try {
        const resp = await axios.get(`${process.env.REACT_APP_ADMIN_URI}/all`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });

        setRows(resp.data.data);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    doFetch();
  }, []);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="10rem auto 0px auto"
    >
      <CircularProgress color="primary" />
    </Box>
  ) : (
    <div>
      <Paper>
        <Box p={3}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">Daftar Pengguna</Typography>
            </Box>
            <Box>
              <Button
                color="primary"
                className={classes.textButton}
                variant="contained"
                onClick={() => setOpenDialogInsert(true)}
              >
                Tambah Pengguna
              </Button>
            </Box>
          </Box>

          <TableContainer style={{ marginTop: "10px" }}>
            <Divider />
            <Table aria-labelledby="tableTitle" aria-label="enhanced table">
              <KartuKeluargaTableHeadComponent
                order={order}
                orderBy={orderBy}
                setOrder={setOrder}
                setOrderBy={setOrderBy}
                rowCount={rows.length}
              />
              <KartuKeluargaTableBodyComponent
                rows={rows}
                order={order}
                orderBy={orderBy}
                page={page}
                rowsPerPage={rowsPerPage}
                emptyRows={emptyRows}
                setRowDetail={setRowDetail}
                setOpenDialogEdit={setOpenDialogEdit}
                setIdToDelete={setIdToDelete}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>
      <Dialog
        open={Boolean(idToDelete)}
        onClose={(e) => {
          e.preventDefault();
          setIdToDelete("");
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{
            id: idToDelete,
          }}
          enableReinitialize={true}
          onSubmit={async (values) => {
            setLoading(true);

            try {
              await axios.delete(
                `${process.env.REACT_APP_ADMIN_URI}/delete/${values.id}`,
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              const resp = await axios.get(
                `${process.env.REACT_APP_ADMIN_URI}/all`,
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              setRows(resp.data.data);

              setLoading(false);
            } catch (err) {
              setLoading(false);
            }

            setIdToDelete("");
          }}
        >
          {() => (
            <Form>
              <Box
                p={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box display="flex" justifyContent="center">
                  <img
                    src={deleteDataImage}
                    style={{ height: "130px", width: "auto" }}
                    alt="Delete Data"
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  maxWidth={400}
                  marginTop={3}
                  marginBottom={0.8}
                >
                  <Typography className={classes.questionText}>
                    APAKAH ANDA YAKIN INGIN MENGHAPUS PENGGUNA INI ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus permanen setelah anda menekan tombol
                    hapus.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setIdToDelete("");
                    }}
                    className={classes.backButton}
                  >
                    Batal
                  </Button>
                  <Box marginRight={1} marginLeft={1}></Box>
                  <Button
                    color="primary"
                    type="submit"
                    className={classes.deleteButton}
                  >
                    Hapus
                  </Button>
                </DialogActions>
              </Box>
            </Form>
          )}
        </Formik>
      </Dialog>
      <Dialog
        open={openDialogEdit}
        onClose={(e) => {
          e.preventDefault();
          setOpenDialogEdit(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{
            id: rowDetail._id || "",
            nama_lengkap: rowDetail.nama_lengkap || "",
            username: rowDetail.username || "",
            role: rowDetail.role || "",
            password: "",
          }}
          enableReinitialize={true}
          onSubmit={async (values) => {
            setLoading(true);

            try {
              await axios.put(
                `${process.env.REACT_APP_ADMIN_URI}/update/${values.id}`,
                {
                  nama_lengkap: values.nama_lengkap,
                  username: values.username,
                  role: values.role,
                  ...(values.password !== ""
                    ? { password: values.password }
                    : {}),
                },
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              const resp = await axios.get(
                `${process.env.REACT_APP_ADMIN_URI}/all`,
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              setRows(resp.data.data);

              setLoading(false);

              setOpenDialogEdit(false);
            } catch (err) {
              setLoading(false);

              setOpenDialogEdit(false);
            }
          }}
        >
          {() => (
            <Form>
              <Box
                p={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  maxWidth={400}
                  marginTop={3}
                  marginBottom={0.8}
                >
                  <Typography className={classes.questionText}>
                    Perbarui Pengguna
                  </Typography>
                </Box>
                <DialogContent>
                  <Field
                    component={TextFormField}
                    label="Nama Lengkap"
                    id="nama_lengkap"
                    name="nama_lengkap"
                    fullWidth
                    size="small"
                    variant="filled"
                  />
                  <Field
                    style={{ marginTop: "10px" }}
                    component={TextFormField}
                    label="Nama Pengguna"
                    id="username"
                    name="username"
                    fullWidth
                    size="small"
                    variant="filled"
                  />
                  <Field
                    name="role"
                    component={SelectFormField}
                    size="small"
                    fullWidth
                    id="role"
                    label="Role"
                    style={{ marginTop: "10px" }}
                    options={[
                      { label: "Super Admin", value: "Super Admin" },
                      { label: "Admin", value: "Admin" },
                    ]}
                  />
                  <Field
                    component={PasswordField}
                    label="Password"
                    style={{ marginTop: "10px" }}
                    name="password"
                    fullWidth
                    id="password"
                    size="small"
                    variant="filled"
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDialogEdit(false);
                    }}
                    className={classes.backButton}
                  >
                    Batal
                  </Button>
                  <Box marginRight={1} marginLeft={1}></Box>
                  <Button type="submit" className={classes.deleteButton}>
                    Perbarui
                  </Button>
                </DialogActions>
              </Box>
            </Form>
          )}
        </Formik>
      </Dialog>
      <Dialog
        open={openDialogInsert}
        onClose={(e) => {
          e.preventDefault();
          setOpenDialogInsert(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{
            nama_lengkap: "",
            username: "",
            role: "",
            password: "",
          }}
          enableReinitialize={true}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              await axios.post(
                `${process.env.REACT_APP_ADMIN_URI}/register`,
                {
                  nama_lengkap: values.nama_lengkap,
                  username: values.username,
                  role: values.role,
                  password: values.password,
                },
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              const resp = await axios.get(
                `${process.env.REACT_APP_ADMIN_URI}/all`,
                {
                  headers: {
                    "x-auth-token": localStorage.getItem("token"),
                  },
                }
              );

              setRows(resp.data.data);
              setLoading(false);
              setOpenDialogInsert(false);
            } catch (err) {
              setLoading(false);
              setOpenDialogInsert(false);
            }
          }}
        >
          {() => (
            <Form>
              <Box
                p={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  maxWidth={400}
                  marginTop={3}
                  marginBottom={0.8}
                >
                  <Typography className={classes.questionText}>
                    Tambah Pengguna
                  </Typography>
                </Box>
                <DialogContent>
                  <Field
                    component={TextFormField}
                    label="Nama Lengkap"
                    id="nama_lengkap"
                    name="nama_lengkap"
                    fullWidth
                    size="small"
                    variant="filled"
                  />
                  <Field
                    style={{ marginTop: "10px" }}
                    component={TextFormField}
                    label="Nama Pengguna"
                    id="username"
                    name="username"
                    fullWidth
                    size="small"
                    variant="filled"
                  />
                  <Field
                    name="role"
                    component={SelectFormField}
                    size="small"
                    fullWidth
                    id="role"
                    label="Role"
                    style={{ marginTop: "10px" }}
                    options={[
                      { label: "Super Admin", value: "Super Admin" },
                      { label: "Admin", value: "Admin" },
                    ]}
                  />
                  <Field
                    component={PasswordField}
                    label="Password"
                    style={{ marginTop: "10px" }}
                    name="password"
                    fullWidth
                    id="password"
                    size="small"
                    variant="filled"
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDialogInsert(false);
                    }}
                    className={classes.backButton}
                  >
                    Batal
                  </Button>
                  <Box marginRight={1} marginLeft={1}></Box>
                  <Button type="submit" className={classes.primaryButton}>
                    Tambah
                  </Button>
                </DialogActions>
              </Box>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default Index;
