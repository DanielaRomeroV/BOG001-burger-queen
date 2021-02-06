  import firebase from 'firebase/app'
  import  'firebase/firestore'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDBVpZAlLQ4Z6vxmZAAfZaJjLCDm81ZuCs",
    authDomain: "burguer-queen-b485d.firebaseapp.com",
    databaseURL: "https://burguer-queen-b485d.firebaseio.com",
    projectId: "burguer-queen-b485d",
    storageBucket: "burguer-queen-b485d.appspot.com",
    messagingSenderId: "702282847571",
    appId: "1:702282847571:web:72704f4a6c9b4e2d41fda6",
    measurementId: "G-H0YW7W727V"
  };
 
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore()
const updateOrder = async (id, fields) => {
  try {
    await db.collection('orders').doc(id).update(fields);
  } catch (error) {
    console.log(error);
  }
};

function addBill(data) {   //crea o agrega a la coleccion order el objeto que reciba por parametros, la orden que se envia a chef
  db.collection('orders').add(data);
}
export { db, addBill, firebase, updateOrder };




