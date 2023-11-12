import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    // const { data } = await fetch("https://jsonplaceholder.typicode.com/users");
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("this data", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
});
