import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCar, deleteCar, registerOtherCar } from './carActions'
import { useNavigate } from 'react-router-dom'

const CarComponent = () => {

    const isRegisterFromReducer = useSelector((state) => state.carReducer.isRegister)
    const marcaFromReducer = useSelector((state) => state.carReducer.marca)
    const colorFromReducer = useSelector((state) => state.carReducer.color)
    const matriculaFromReducer = useSelector((state) => state.carReducer.matricula)

    const [carInfo, setCarInfo] = useState(undefined)
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch()

    const setInfoCarHandler = (e) => {
        setCarInfo({
            ...carInfo,
            [e.target.name] : e.target.value,
        })
    }

    const sendData = () => {
        dispatch(createCar(carInfo))
    }

    const deleteButtonHandler = () => {
        dispatch(deleteCar())
    }

    const registerCarHandler = () => {
        dispatch(registerOtherCar())
    }

    const updateCarHandler = () => {
        setIsUpdate(true)
    }


  return (
    <div>
        {isRegisterFromReducer? 
        (<div>
            <h2>marca:  {marcaFromReducer}</h2>
            <h2>color:  {colorFromReducer}</h2>
            <h2>matricula:  {matriculaFromReducer}</h2>
            <div>
                <button onClick={deleteButtonHandler}>borrar</button>
                <button onClick={registerCarHandler}>registrar</button>
                <button onClick={updateCarHandler}>actualizar</button>
                {isUpdate? 
                (<div style={{display: "flex", flexDirection: "column"}}>
                    <div>
                        <label>marca</label>
                        <input type="text" name='marca' placeholder={marcaFromReducer} onChange={(e) => setInfoCarHandler(e)}/>
                    </div>
                    <div>
                        <label>color</label>
                        <input type="text" name='color' placeholder={colorFromReducer} onChange={(e) => setInfoCarHandler(e)}/>
                    </div>
                    <div>
                        <label>matricula</label>
                        <input type="text" name='matricula' placeholder={matriculaFromReducer} onChange={(e) => setInfoCarHandler(e)}/>
                    </div>
                    <button onClick={sendData}>actualizar</button>

                </div>) : (<div></div>)}
            </div>
         </div>): ( <div style={{display: "flex", flexDirection: "column"}}>
        <div>
        <label>marca</label>
        <input type="text" name='marca' onChange={(e) => setInfoCarHandler(e)}/>
        </div>
        <div>
        <label>color</label>
        <input type="text" name='color' onChange={(e) => setInfoCarHandler(e)}/>
        </div>
        <div>
        <label>matricula</label>
        <input type="text" name='matricula' onChange={(e) => setInfoCarHandler(e)}/>
        </div>
        <button onClick={sendData}>enviar</button>
         </div>)}
        
    </div>
  )
}

export default CarComponent