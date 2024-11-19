import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interface/user";

export interface userState {
    err:string | null;
    // status :DataStatus
    user :null| Iuser
}
const initdata: userState = {
    err: null,
    // status: DataStatus.IDLE,
    user:null
}
export const fetchLogin = createAsyncThunk(
  "user/login",
  async (user: { username: string; password: string }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:2233/userauth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status != 200) {
        thunkApi.rejectWithValue("Can't login, please try again");
      }
      const data = await res.json();
      // thunkApi.fulfillWithValue(data);
      localStorage.setItem("Authorization", data.token);
      return data;
    } catch (err) {
      thunkApi.rejectWithValue("Can't login, please try again");
    }
  }
);


 const userSlice = createSlice({
    name: "user",
    initialState: initdata,
    reducers: {
      
    },  
    extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
      builder
        .addCase(fetchLogin.pending, (state, action) => {          
          state.err = null;
          state.user = null;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
          // state.status = DataStatus.SUCCESS;
          state.err = null;
          state.user = action.payload as unknown as Iuser;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
          // state.status = DataStatus.FAILED;
          state.err = action.error as string;
          state.user = null;
        })
    },  
})
export default userSlice