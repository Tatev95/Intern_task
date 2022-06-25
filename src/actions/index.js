export const addEmployee = (data) => {
    return {
        type: "ADD_EMPLOYEE",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteEmployee = (id) => {
    return {
        type: "DELETE_EMPLOYEE",
    id
    }
}

export const removeEmployee = () => {
    return {
        type: "REMOVE_EMPLOYEE"
    }
}
