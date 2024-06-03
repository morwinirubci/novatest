import { createSlice } from "@reduxjs/toolkit";
import data from "../../mock.json";

type Actor = {
  id: number;
  actor: string;
  role: string;
  roleInfo: string;
  image: string;
};

type ActorsState = {
  actors: Actor[];
};

const initialState: ActorsState = {
  actors: data.actors,
};

const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
});

export default actorsSlice.reducer;
