import { useState } from "react"

const initialState = {
    list: []
}


const addReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case "DELETE_EMPLOYEE":
              const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }


            case "REMOVE_EMPLOYEE": return {
                ...state,
                list: []
            }
            
            default: return state
    }
} 

export default addReducers;