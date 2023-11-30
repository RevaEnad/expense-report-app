import React, { useState } from "react";
import Header from "./Header";
import "../../css/app.css";
import {
    IconButton,
    Paper,
    TableRow,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Chip,
    TableHead,
    Button,
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

function AdminPage() {
    const { expenses, handleStore, handleDelete, handleShow, handleUpdate } =
        useExpenseState();
    const [inputValues, setInputValues] = useState({
        name: "",
        issuer: "",
        date: "",
        amount: "",
    });
    const [editIndex, setEditIndex] = useState(-1);
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
            <div className="App"  style={{ marginTop: 100, marginLeft: 18 }}>

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
                                <TableCell
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    ACTION
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
                                    <TableCell align="center">
                                    <Chip
                                        label={row.status}
                                        color={row.status === 'pending' ? 'warning' : 'success'}
                                    />
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.amount}
                                        </TableCell>
                                    <TableCell align="center">
                                    <Button
                                        aria-label="delete"
                                        variant="contained"
                                        color="success"
                                        size="medium"
                                        // onClick={() => handleAccept(row.id)}
                                        sx={{}}
                                    >
                                    Accept
                                    </Button>
                                    </TableCell>
                                   
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default AdminPage;