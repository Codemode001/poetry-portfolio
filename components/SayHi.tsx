import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";

const SayHi = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSent(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "default_service_id",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "default_template_id",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <PurpleButton onClick={handleClickOpen}> Say hi!</PurpleButton>
      {!sent ? (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogActions>
            <Button onClick={handleClose}>
              <CloseIcon fontSize="large" style={{ color: "black" }} />
            </Button>
          </DialogActions>
          <Form ref={form} onSubmit={sendEmail}>
            <Input placeholder="Name" name="user_name" />
            <Input placeholder="Email" name="user_email" />
            <Message
              placeholder="Send me a message! I don't bite"
              name="user_message"
            />
            <SendButton type="submit" value="Send">
              Send
            </SendButton>
          </Form>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogActions>
            <Button onClick={handleClose}>
              <CloseIcon fontSize="large" style={{ color: "black" }} />
            </Button>
          </DialogActions>
          <EmailSent>
            <h1>Email sent!</h1>
            <img src="yay.png" />
          </EmailSent>
        </Dialog>
      )}
    </>
  );
};

const EmailSent = styled.div`
  & h1 {
    font-family: var(--formal-font);
  }

  display: flex;
  justify-content: center;

  & img {
    width: 50%;

    height: 100%;
  }
`;

const SendButton = styled.button`
  margin: 3rem 3rem 4rem 3rem;
  background-color: var(--purple);
  border: none;
  height: 3rem;
  font-size: 1.1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Message = styled.input`
  margin: 2rem 3rem 0 3rem;
  height: 6rem;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  font-size: 0.9rem;
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
