import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/statusType";
import axios from "axios";
import { IUser } from "../../types/userModel";

interface ResourceStateType {
  currentUser: IUser | null;
  username: string;
  recourse: any;
  organization: string;
  zone?: string | undefined;
  status: Status;
  error: string | null;
  token: string | null;
}

const initialState: ResourceStateType = {
  currentUser: null,
  username: "",
  recourse: [],
  organization: "Idf",
  zone: undefined,
  status: "idle",
  error: null,
  token: localStorage.getItem('token') || null,
  
};

const BASE_URL = import.meta.env.VITE_BASE_URL;



export const fetchRecourse = createAsyncThunk('resources/fetchrecourse',async (): Promise<any|undefined> => {
  const username = initialState.username;
  const response = await axios.get(`${BASE_URL}/${initialState.organization}/information/${username}`,{
    
    headers:{
      Authorization: `Bearer ${initialState.token}`
    }
     
    
  });
      
      console.log( "response", response.data.resources[0] ); 
      return response.data.resources[0];
      
      
    })

    export const fetchCurrentUser = createAsyncThunk('users/fetchcurrentuser',
      async (_,{getState}) => {
        const state = getState() as { user: ResourceStateType };
      
          const response = await axios.get(`${BASE_URL}/idf/information/users`,{
            headers:{
              Authorization: `Bearer ${state.user.token}`
            }
          });
          
          console.log('response', response.data);
          
          return response.data.users

      
      })
    console.log('base url', `${BASE_URL}/idf/information/users`);
    
    


export const recoursesSlice = createSlice({
  name: "recourses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecourse.pending, (state) => {
        state.status = "pending";
        state.error = null
      })
      .addCase(fetchRecourse.fulfilled, (state, action) => {
        if (action.payload) state.recourse = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchRecourse.rejected, (state) => {
        state.error = "Can't fetch recourse";
        state.status = "rejected";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        if (action.payload) state.currentUser = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.currentUser = null
        state.error = "Can't fetch current user";
        state.status = "rejected";
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "pending";
        state.error = null
      })

  },
});

export default recoursesSlice.reducer
