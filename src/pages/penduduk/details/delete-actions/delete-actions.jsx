import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { forwardRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePenduduk } from "../../../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./delete-actions.style";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteActions = ({
  admin,
  params,
  deletePenduduk,
  handleClose,
  open,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Apakah anda yakin ingin menghapus data penduduk ini?"}
          </DialogTitle>
          <Formik
            initialValues={{
              id: params(admin._id),
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log(values);
              const onSuccess = () => history.push("/penduduk");
              deletePenduduk(values.id, onSuccess);
            }}
          >
            {() => (
              <Form>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Data akan dihapus permanen setelah anda menekan tombol
                    delete.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={handleClose}
                    type="submit"
                    className={classes.deleteButton}
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>
      </Box>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePenduduk: (id, onSuccess) => dispatch(deletePenduduk(id, onSuccess)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteActions);
