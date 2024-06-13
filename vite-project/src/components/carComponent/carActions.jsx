export const GET_CAR = "GET_CAR";
export const CREATE_CAR = "CREATE_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const REGISTER_OTHER_CAR = "REGISTER_OTHER_CAR";
export const UPDATE_CAR = "UPDATE_CAR";


export const getCar = () => {
    return{
        type: GET_CAR,
    }
}

export const createCar = ({ marca, color, matricula }) => {
    return{
        type: CREATE_CAR,
        payload: {
            marca,
            color,
            matricula,
        }
    }
}

export const deleteCar = () => {
    return{
        type: DELETE_CAR,
    }
}

export const registerOtherCar = () => {
    return{
        type: REGISTER_OTHER_CAR,
    }
}

export const updateCar = (marca, color, matricula) => {
    return{
        type: UPDATE_CAR,
        payload: {
            marca,
            color,
            matricula,
        }
    }
}