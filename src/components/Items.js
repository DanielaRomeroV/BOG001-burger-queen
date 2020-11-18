/*import React, { useEffect, useState} from "react"


function useItems() {

const [items, setItems] = useState([])

useEffect(() => {
    fetch("../products.json")
    .then(response => response.json())
    .then(datos => {
        setItems(datos)
    })
}, [])

      return items

}

export default function Menu() {

    const items = useItems()

    return (

    )
}*/

import React, { Component } from 'react'
import Products from '../products.json'

class MenuItems extends Component {
    render () {
        return (
            <div>
                <h1>prueba menu</h1>
                {Products.map((productDetail, index) => {
                    return <div>
                        <h1>{productDetail.nameMenu}</h1>
                     <p>{productDetail.id}</p>
                        </div>
                })}
            </div>
        )
    }
}

export default MenuItems