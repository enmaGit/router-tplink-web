import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';

const BasicModal = ({ isOpen, onClose, title, children, onOk, onCancel }) => {
  return (
    <Dialog disableBackdropClick open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BasicModal;
