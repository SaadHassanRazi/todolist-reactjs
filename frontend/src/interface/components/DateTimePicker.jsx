import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "./css/addTask.css";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function BasicDateTimePicker({ onchange, value }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Due Date"
          className="border-bottom py-2"
          sx={{
            width: "640px",
            // Remove border and box-shadow styles
            "& .MuiInputBase-root": {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove outline border
            },
            "& .MuiInputBase-input": {
              padding: "10px", // Adjust padding if needed
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove outline on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove outline on focus
            },
          }}
          onChange={onchange}
          value={value}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
