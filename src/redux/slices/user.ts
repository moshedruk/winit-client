import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interface/user";

export interface userState {
    err:string | null;
    // status :DataStatus
    user : Iuser
}
const initdata: userState = {
    err: null,
    // status: DataStatus.IDLE,
    user:{
        _id:'klkl',
        username:'moshe'
    }
}



 const userSlice = createSlice({
    name: "user",
    initialState: initdata,
    reducers: {
      logout: (state) => {
        state.user.username = ';klkl';
      },
    },    
})
export default userSlice