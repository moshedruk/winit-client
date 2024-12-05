import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Igame } from "../../interface/game";

export interface gamesState {
    err:string | null;
    // status :DataStatus
    games :null| Igame[]
}
const initdata: gamesState = {
    err: null,
    // status: DataStatus.IDLE,
    games:null
}
export const fetchGetAllGame = createAsyncThunk(
  "allGames",
  async (_, thunkApi) => {
    try {
      const res = await fetch("http://localhost:2233/games");
      if (res.status != 200) {
        return thunkApi.rejectWithValue("Can't get games, please try again");
      }
      const data = await res.json();
      console.log(data)    
      return thunkApi.fulfillWithValue(data);  
      
    } catch (err) {
        return  thunkApi.rejectWithValue("Can't login, please try again");
    }
  }
);
 const gameSlice = createSlice({
    name: "games",
    initialState: initdata,
    reducers: {
      updateGame: (state, action) => {
        Object.assign(state, action.payload);
      },      
    },  
    extraReducers: (builder: ActionReducerMapBuilder<gamesState>) => {
      builder
        .addCase(fetchGetAllGame.pending, (state) => {          
          state.err = null;
          
        })
        .addCase(fetchGetAllGame.fulfilled, (state, action) => {
          // state.status = DataStatus.SUCCESS;
          
          state.err = null;
          state.games = action.payload as unknown as Igame[];
          
        })
        .addCase(fetchGetAllGame.rejected, (state, action) => {
          // state.status = DataStatus.FAILED;
          state.err = action.error as string;
          state.games = null;
        })
    },  
})
export const { updateGame } = gameSlice.actions;
export default gameSlice