import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulating a successful login
    console.log("Simulating login...");

    // In a real-world scenario, you would make an API call here
    // and handle the response accordingly.

    // Simulate a successful response
    console.log("Login successful");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography
          component="h2"
          variant="h3"
          color="white"
          sx={{ marginBottom: 4, fontWeight: "bold" }}
        >
          EXPENSE REPORT APP
        </Typography>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "background.paper",
              borderRadius: 2,
              padding: "16px",
            }}
          >
            <Typography
              component="h2"
              variant="h5"
              color="black"
              sx={{ marginTop: 2, fontWeight: "bold" }}
            >
              LOGIN
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange}
                InputProps={{
                  style: { borderRadius: 20 },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                InputProps={{
                  style: { borderRadius: 20 },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                size="large"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </header>
    </div>
  );
}

export default App;
