import React from "react";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const SayHi = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PurpleButton onClick={handleClickOpen}> Say hi!</PurpleButton>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon fontSize="large" style={{ color: "black" }} />
          </Button>
        </DialogActions>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Message placeholder="Send me a message! I don't bite" />
          <SendButton>Send</SendButton>
        </Form>
      </Dialog>
    </>
  );
};

const SendButton = styled.button`
  margin: 3rem 3rem 4rem 3rem;
  background-color: var(--purple);
  border: none;
  height: 3rem;
  font-size: 1.1rem;
  color: white;
  border-radius: 5px;
`;

const Message = styled.input`
  margin: 2rem 3rem 0 3rem;
  height: 6rem;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  font-size: 1.2rem;
  padding: 0 0 0 1rem;
`;

const Input = styled.input`
  margin: 2rem 3rem 0 3rem;
  height: 4rem;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  font-size: 1.2rem;
  padding: 0 0 0 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const PurpleButton = styled.div`
  background-color: var(--purple);
  font-size: 1rem;
  width: 8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--prof-font);
  font-weight: 600;
  border-radius: 5px;
  color: white !important;

  &:hover {
    cursor: pointer;
  }
`;

export default SayHi;
