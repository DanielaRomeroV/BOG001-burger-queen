import React , {useState, useEffect} from 'react';
//import { db } from  './firebase'

const AppContext = React.createContext();
const {Provider } = AppContext;

export default function AppProvider({ children }) {
    const [bill, setBill] = useState([]);
    const addProduct = (values) => setBill([...bill, values]);

    const deleteProduct = (id) => {
      const filtered = bill.filter((el) => el.id !== id);
      setBill(filtered);

 };
      return (
        <Provider
          value={{
           // isOpen,
           // clickToOpen,
          // clickToClose,
            bill,
            setBill,
            addProduct,
            deleteProduct,
           // burger,
           // stateBurger,
           // order,
           // idOrder,
            //employee,
            //setEmployee,
          }}
        >
          {children}
        </Provider>
      );

    };
 




export { AppProvider, AppContext };
