import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminData } from "../redux/adminSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.admin);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAdminData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <Alert severity="error" style={{ margin: "20px" }}>
        {error}
      </Alert>
    );
  }

  return (
    <TableContainer component={Paper} style={{ margin: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPanel;
