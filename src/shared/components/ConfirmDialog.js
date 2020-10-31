import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// base design only!
// if you need to add something just override it in your own component
// const CustomStyledInput = styled(Input)``;
// const StyledDialog = styled(DialogBone)``;

// see possible properties
// https://material-ui.com/components/text-fields/
const ConfirmDialog = React.forwardRef((props, ref) => (
  <Dialog
    ref={ref}
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {props.content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        Disagree
      </Button>
      <Button onClick={props.handleConfirm || props.handleClose} color="primary" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
));

ConfirmDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func,
  open: PropTypes.bool.isRequired,
  content: PropTypes.string,
  title: PropTypes.string,
};

export default memo(ConfirmDialog);
