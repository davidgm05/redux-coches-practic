import { CREATE_CAR, DELETE_CAR, REGISTER_OTHER_CAR, UPDATE_CAR } from "./carActions"

const initialState = {
    isRegister: false,
    marca: undefined,
    color: undefined,
    matricula: undefined,
}

const carReducers = ( state = initialState, action) => {
    switch(action.type){
        case CREATE_CAR:
            return{
              ...state,
              isRegister: true,
              marca: action.payload.marca,
              color: action.payload.color,
              matricula: action.payload.matricula, 
            }
        case DELETE_CAR:
            return{
                ...state,
                isRegister: true,
                marca: undefined,
                color: undefined,
                matricula: undefined,
            }
        case REGISTER_OTHER_CAR:
            return{
                ...state,
                isRegister: false,
            }
        case UPDATE_CAR: 
            return{
                ...state,
                isRegister: true,
                marca: action.payload.marca,
                color: action.payload.color,
                matricula: action.payload.matricula,
            }
        default: 
        return state
    }
}

export default carReducers