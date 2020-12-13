import React , {useState} from 'react'

const BttnAgregar = (item) => {

const [seleccion, setSelect] = useState (item)
console.log(seleccion)
console.log(item)
const agregarClick = () => {
//console.log(seleccion.item.name,seleccion.item.price,seleccion.item.id)
console.log(seleccion.item.name)
}


    return (
        <div>
            <button className = 'Add' onClick={agregarClick} value={item}>   Agregar </button>
        </div>
    )
}

export default BttnAgregar
