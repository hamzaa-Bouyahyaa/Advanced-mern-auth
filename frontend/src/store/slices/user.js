import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";

//Thunks
export const signUp = createAsyncThunk(
  "user/signUp",
  async (values, thunkApi) => {
    console.log(values);
    try {
      const { data } = await API.post("/signup", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      console.log("signup", data);
      return data.message;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (values, thunkApi) => {
    try {
      const { data } = await API.post("/login", {
        email: values.email,
        password: values.password,
      });
      console.log("login", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUser = createAsyncThunk("user/getUser", async (_, thunkApi) => {
  try {
    const { data } = await API.get("/user", { withCredentials: true });
    console.log("getuser", data);
    return data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_, thunkApi) => {
    try {
      const { data } = await API.get("/refresh", { withCredentials: true });
      console.log("refresh", data);
      return data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkApi) => {
  try {
    const { data } = await API.post("/logout", null, { withCredentials: true });
    console.log("logout", data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Slice

const slice = createSlice({
  name: "user",
  initialState: {
    signupResponse: {
      message: null,
      status: "ilde",
      error: null,
    },
    loginResponse: {
      message: null,
      status: "ilde",
      error: null,
    },
    logoutResponse: {
      message: null,
      status: "ilde",
      error: null,
    },
    user: null,
    status: "ilde",
    error: null,
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.signupResponse.status = "loading";
    },
    [signUp.fulfilled]: (state, action) => {
      state.signupResponse.status = "success";
      state.signupResponse.message = action.payload;
    },
    [signUp.rejected]: (state, action) => {
      state.signupResponse.status = "failed";
      state.signupResponse.error = action.payload;
    },
    [login.pending]: (state) => {
      state.loginResponse.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.loginResponse.status = "success";
      state.loginResponse.message = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loginResponse.status = "failed";
      state.loginResponse.error = action.payload;
    },
    [getUser.pending]: (state) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [refreshToken.pending]: (state) => {
      state.status = "loading";
    },
    [refreshToken.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [refreshToken.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [logout.pending]: (state) => {
      state.logoutResponse.status = "loading";
    },
    [logout.fulfilled]: (state, action) => {
      state.logoutResponse.status = "success";
      state.logoutResponse.message = action.payload;
      state.user = null;
    },
    [logout.rejected]: (state, action) => {
      state.logoutResponse.status = "failed";
      state.logoutResponse.error = action.payload;
    },
  },
});
export default slice.reducer;
