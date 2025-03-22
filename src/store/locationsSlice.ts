import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationsState {
  locations: string[];
}

const loadLocationsFromLocalStorage = (): string[] => {
  if (typeof window !== "undefined") {
    const storedLocations = localStorage.getItem("locations");
    return storedLocations ? JSON.parse(storedLocations) : [];
  }
  return [];
};

const initialState: LocationsState = {
  locations: loadLocationsFromLocalStorage(),
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<string>) => {
      if (!state.locations.includes(action.payload)) {
        state.locations.push(action.payload);
      }
    },
    removeLocation: (state, action: PayloadAction<string>) => {
      state.locations = state.locations.filter((loc) => loc !== action.payload);
    },
  },
});

export const { addLocation, removeLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
