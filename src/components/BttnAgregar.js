import React , {useState} from 'react'

const BttnAgregar = (item) => {

const [seleccion, setSelect] = useState ({})
//setSelect(item)
console.log(seleccion , 'estado')
console.log(item, 'parametro')
const agregarClick = () => {
//console.log(seleccion.item.name,seleccion.item.price,seleccion.item.id)
//console.log(seleccion.item.name)
}


    return (
        <div>
            <button className = 'Add' onClick={() => console.log(item.item.name) } value={item}>   Agregar </button>
        </div>
    )
}

export default BttnAgregar