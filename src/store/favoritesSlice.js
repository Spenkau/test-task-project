import {createSlice} from "@reduxjs/toolkit";

const favs = JSON.parse(localStorage.getItem('favs'))

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: favs || [],
    reducers: {
        setFavorites: (state, action) => {
            return action.payload
        },
        interactWithFavorite: (state, action) => {
            const {id} = action.payload
            const isInFavorites = state.some(item => item.id === id)
            if (isInFavorites) return state.filter(vac => vac.id !== id)
            else return [...state, action.payload]
        },
    }
})

export const { interactWithFavorite, setFavorites } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites;
export default favoritesSlice.reducer;