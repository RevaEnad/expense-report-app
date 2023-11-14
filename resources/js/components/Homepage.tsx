import TextField from "@mui/material/TextField";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import EditIcon from "@mui/icons-material/Edit";
import Header from "./Header";
import "../../css/app.css";
import EditModal from "./EditModal";
import {
    Button,
    Grid,
    IconButton,
    Typography,
    Modal,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Box,
} from "@mui/material";
import { useServiceAuthContext } from "../hooks/context/AuthServiceContext";
import useExpenseState from "../hooks/states/useExpenseState";

function createData(
    name: string,
    issuer: string,
    date: string,
    status: string,
    amount: number
) {
    return {
        name,
        issuer,
        date,
        status,
        amount,
    };
}
const initialRows = [
    createData(
        "Tokyo Trip",
        "reva.enad@jg-coporation.com",
        "01/20/2023",
        "Approved",
        4321.0
    ),
    createData(
        "Tokyo Trip",
        "reva.enad@jg-coporation.com",
        "01/20/2023",
        "Approved",
        4234.3
    ),
    createData(
        "Tokyo Trip",
        "reva.enad@jg-coporation.com",
        "01/20/2023",
        "Approved",
        6564.0
    ),
    createData(
        "Tokyo Trip",
        "reva.enad@jg-coporation.com",
        "01/20/2023",
        "Approved",
        4232.3
    ),
    createData(
        "Tokyo Trip",
        "reva.enad@jg-coporation.com",
        "01/20/2023",
        "Approved",
        334.9
    ),
];

function App() {
    const { expenses, handleStore, handleDelete, handleShow, handleUpdate } =
        useExpenseState();
    const [inputValues, setInputValues] = useState({
        name: "",
        issuer: "",
        date: "",
        amount: "",
    });
    const [editIndex, setEditIndex] = useState(-1);
    const [rows, setRows] = useState(initialRows);
    const { handleLogout } = useServiceAuthContext();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        await handleStore(inputValues);

        setInputValues({
            name: "",
            issuer: "",
            date: "",
            amount: "",
        });
    };

    const handleEdit =  async (index: number) => {
        const res = await handleShow(index);
        if (res) {
            setInputValues({
                name: res.name,
                issuer: res.issuer,
                date: res.date,
                amount: res.amount.toString(),
            });
            setEditIndex(index);
        }
    };

    const handleUpdateBtn = async () => await handleUpdate(inputValues, editIndex);

    const handleModalClose = () => {
        setEditIndex(-1);
        setInputValues({
            name: "",
            issuer: "",
            date: "",
            amount: "",
        });
    };
    const isEditModalOpen = editIndex !== -1;

    return (
        <>
            <Header onLogoutClick={handleLogout} />
            <div className="App">
                <Typography
                    variant="h6"
                    component="div"
                    align="left"
                    color="white"
                    sx={{ paddingTop: 3, marginLeft: 18 }}
                >
                    Add Expense
                </Typography>
                <Grid
                    container
                    sx={{
                        marginLeft: 11,
                        textAlign: "center",
                        paddingBottom: 3,
                    }}
                >
                    <Grid item xs={2}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            size="small"
                            required
                            id="name"
                            label="Name"
                            name="name"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            InputProps={{
                                style: { borderRadius: 3, background: "white" },
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            required
                            size="small"
                            id="issuer"
                            label="Issuer"
                            name="issuer"
                            value={inputValues.issuer}
                            onChange={handleInputChange}
                            InputProps={{
                                style: { borderRadius: 3, background: "white" },
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            required
                            id="date"
                            size="small"
                            label="Date"
                            name="date"
                            value={inputValues.date}
                            onChange={handleInputChange}
                            InputProps={{
                                style: { borderRadius: 3, background: "white" },
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            margin="normal"
                            variant="filled"
                            required
                            id="amount"
                            size="small"
                            label="Amount"
                            name="amount"
                            value={inputValues.amount}
                            onChange={handleInputChange}
                            InputProps={{
                                style: { borderRadius: 3, background: "white" },
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>

                <TableContainer
                    component={Paper}
                    sx={{ width: "85%", margin: "auto" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    NAME
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    ISSUER
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    DATE
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    STATUS
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    AMOUNT
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {expenses.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.issuer}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.date}
                                    </TableCell>
                                    {/* <TableCell align="center">
                    <Chip label={row.status} color="success" />
                  </TableCell> */}
                                    <TableCell align="center">
                                        {row.amount}
                                    </TableCell>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => handleDelete(row.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="edit"
                                        onClick={() => handleEdit(row.id)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <EditModal
                    open={isEditModalOpen}
                    onClose={handleModalClose}
                    inputValues={inputValues}
                    onInputChange={handleInputChange}
                    onSave={handleUpdateBtn}
                />
            </div>
        </>
    );
}

export default App;