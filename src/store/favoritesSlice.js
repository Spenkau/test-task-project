import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        interactWithFavorite: (state, action) => {
            const {id} = action.payload
            console.log(id)
            const isInFavorites = state.some(item => item.id === id)
            console.log(isInFavorites)
            if (isInFavorites) return state.filter(vac => vac.id !== id)
            else return [...state, action.payload]
        },
        // addFavorite: (state, action) => {
        //     state.push(action.payload);
        // },
        // removeFavorite: (state, action) => {
        //     return state.filter(vac => vac.id !== action.payload)
        // }
    }
})

export const { interactWithFavorite, isEmpty } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites;
export default favoritesSlice.reducer;