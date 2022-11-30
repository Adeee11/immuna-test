import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout, Layout } from "Components";
import { Login, Dashboard } from "Pages";
import { theme } from "theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/" element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
