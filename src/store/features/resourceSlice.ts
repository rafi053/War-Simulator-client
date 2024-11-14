import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/statusType";
import axios from "axios";
import { IUser } from "../../types/userModel";
import { UserStateType } from "./usersSlice";


interface Resource {
  _id: string;
  missile: Missile[];
  amount: number;
  __v: number;
}

interface Missile {
  _id: string;
  name: string;
  description: string;
  speed: number;
  intercepts: string[];
  price: number;
}


interface ResourceStateType {
  _id: string;
  recourse: Resource;
  organization: string;
  zone?: string | undefined;
  status: Status;
  error: string | null;
  token: string | null;
}

const initialState: ResourceStateType = {
  _id: "",
  recourse: {} as Resource,
  organization: "Idf",
  zone: undefined,
  status: "idle",
  error: null,
  token: localStorage.getItem('token') || null,
  
};

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetchCurrentUser = createAsyncThunk('users/fetchcurrentuser',
  async (_,{getState}) => {
    const state = getState() as { user: UserStateType };
  
      const response = await axios.get(BASE_URL,{
        headers:{
          Authorization: `Bearer ${state.user.token}`
        }
      });
      return response.data
  
  })
  




export const fetchRecourse = createAsyncThunk('resources/fetchrecourse',async (): Promise<Resource|undefined> => {
  const id = initialState._id;
  const response = await axios.get(`${BASE_URL}/${initialState.organization}/information/${id}`,{
    
    headers:{
      Authorization: `Bearer ${initialState.token}`
    }
     
    
  });
      
      return response.data.resources[0];
      
      
    })

    


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
  },
});

export default recoursesSlice.reducer
