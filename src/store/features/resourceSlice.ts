import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/statusType";
import axios from "axios";
import { IMissiles  } from "../../types/userModel";

interface ResourceStateType {
  username: string;
  missiles: IMissiles[];
  organization: string;
  zone?: string | undefined;
  status: Status;
  error: string | null;
}

const initialState: ResourceStateType = {
  username: "",
  missiles: [],
  organization: "Idf",
  zone: undefined,
  status: "idle",
  error: null,
  
};

const BASE_URL = import.meta.env.VITE_BASE_URL;



export const fetchMissiles = createAsyncThunk('resources/fetchmissiles',async (): Promise<any|undefined> => {
  const username = initialState.username;
  const response = await axios.get(`${BASE_URL}/${initialState.organization}/information/${username}`,{
    
    headers:{
      Authorization: "barer " + localStorage.getItem("token")
    }
     
    
  });
      
      console.log( "response", response.data.resources[0] ); 
      return response.data.resources[0];
      
      
    })
    
    


export const recoursesSlice = createSlice({
  name: "recourses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissiles.pending, (state) => {
        state.status = "pending";
        state.error = null
      })
      .addCase(fetchMissiles.fulfilled, (state, action) => {        
        state.status = "fulfilled";
      })
      .addCase(fetchMissiles.rejected, (state) => {
        state.error = "Can't fetch resources";
        state.status = "rejected";  
      })
  },
});

export default recoursesSlice.reducer
