import React, {memo} from 'react';

import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@/shared/components/Button';

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
      <Button onClick={props.handleClose}>
        Disagree
      </Button>
      <Button onClick={props.handleConfirm || props.handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
));

ConfirmDialog.propTypes = {
  /**
   * close fn (fn that will change the open state)
	*/
  handleClose: PropTypes.func.isRequired,
  /**
   * on confirm function.
	*/
  handleConfirm: PropTypes.func,
  /**
   * is open state.
	*/
  open: PropTypes.bool.isRequired,
  /**
   * Dialog content.
	*/
  content: PropTypes.string,
  /**
   * Dialog title.
	*/
  title: PropTypes.string,
};

export default memo(ConfirmDialog);
