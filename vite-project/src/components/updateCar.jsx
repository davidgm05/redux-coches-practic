import React from 'react'
import { useSelector } from 'react-redux'

const UpdateCar = () => {

    const marca = useSelector((state) => state.carReducer.marca)
    const color = useSelector((state) => state.carReducer.color)
    const matricula = useSelector((state) => state.carReducer.matricula)

  return (
    <div>
        <input type="text" name='marca' value={marca} onChange={(e)}/>
        <input type="text" name='color' value={color} onChange={(e)}/>
        <input type="text" name='matricula' value={matricula} onChange={(e)}/>
    </div>
  )
}

export default UpdateCar