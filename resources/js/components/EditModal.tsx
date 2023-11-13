import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  inputValues: {
    name: string;
    issuer: string;
    date: string;
    amount: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

const EditModal = ({
  open,
  onClose,
  inputValues,
  onInputChange,
  onSave,
}: EditModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          p: 4,
          bgcolor: "#fff",
          boxShadow: 24,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          align="center"
          color="black"
          sx={{ fontWeight: "bold", paddingBottom: 2 }}
        >
          Edit Expense
        </Typography>
        <TextField
          margin="normal"
          variant="filled"
          size="small"
          required
          fullWidth
          id="edit-name"
          label="Name"
          name="name"
          value={inputValues.name}
          onChange={onInputChange}
        />
        <TextField
          margin="normal"
          variant="filled"
          required
          fullWidth
          id="edit-issuer"
          label="Issuer"
          name="issuer"
          value={inputValues.issuer}
          onChange={onInputChange}
        />
        <TextField
          margin="normal"
          variant="filled"
          required
          fullWidth
          id="edit-date"
          label="Date"
          name="date"
          value={inputValues.date}
          onChange={onInputChange}
        />
        <TextField
          margin="normal"
          variant="filled"
          required
          fullWidth
          id="edit-amount"
          label="Amount"
          name="amount"
          value={inputValues.amount}
          onChange={onInputChange}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          fullWidth
          onClick={onSave}
          sx={{ marginTop: 2 }}
        >
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
