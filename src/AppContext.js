import React , {useState, useEffect} from 'react';
import { db } from  './firebase'

const AppContext = React.createContext();  //Informacion que compartire entre componentes 
const {Provider } = AppContext;

export default function AppProvider({ children }) {
    
  const [bill, setBill] = useState([]);  //estado que tiene la cantidad de los productos
  
  const addProduct = (values) => setBill([...bill, values]);

  const [order, setOrder ] = useState([]) 

  const deleteProduct = (id) => {
      const filtered = bill.filter((el) => el.id !== id);
      setBill(filtered);
 };

 useEffect(() => {   //funcion que envia desde firebase los pedidos al chef
   db.collection('orders')
   .orderBy('date' , 'desc')
   .onSnapshot((querySnapshot) => {
      const arrayData = []
      querySnapshot.forEach((doc) => {
        arrayData.push({id : doc.id,...doc.data()})
      })
      setOrder(arrayData);
   })
 }, [])
      return (
        <Provider
          value={{
            bill,
            setBill,
            addProduct,
            deleteProduct,
            order,
          }}
        >
          {children}
        </Provider>
      );

    };
 




export { AppProvider, AppContext };
