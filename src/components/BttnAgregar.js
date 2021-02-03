import React , {useState} from 'react'

const BttnAgregar = (props) => { 

const [seleccion, setSelect] = useState ({})
//setSelect(item)
//console.log(seleccion , 'estado')
//console.log(item, 'parametro')
const agregarClick = () => {

}


    return (
        <div>
            <button
             className = 'Add'
             text = 'Agregar'
             onClick={props.onClick } 
             >  
            Agregar
            </button>

        </div>
    )
}

export default BttnAgregar