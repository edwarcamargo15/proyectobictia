
import { initializeApp, analytics } from "firebase";
// Required for side-effects
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDORrOOZ8-jPMp515_J9vrLA_cvy-QjhKU",
    authDomain: "skincare-51c83.firebaseapp.com",
    databaseURL: "https://skincare-51c83.firebaseio.com",
    projectId: "skincare-51c83",
    storageBucket: "skincare-51c83.appspot.com",
    messagingSenderId: "403598528490",
    appId: "1:403598528490:web:18326183fd9be868baec93",
    measurementId: "G-X5ED0PYKE7"
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);
  analytics();
  
  
  var db = firestore();


  function insertar(){
    

  var nombre=document.getElementById('nombre').value;
  var tipo=document.getElementById('tipo').value;
  var numero=document.getElementById('identi').value;
  var edad=document.getElementById('edad').value;
  var genero=document.getElementById('genero').value;
  var celular=document.getElementById('celular').value;
  var servicio=document.getElementById('servicio').value;
  var fecha=document.getElementById('fecha').value;
  var hora=document.getElementById('hora').value;

db.collection("citas").add({
    nombre: nombre,
    tipo:tipo,
    numero:numero,
    edad:edad,
    genero:genero,
    celular:celular,
    servicio:servicio,
    fecha:fecha,
    hora:hora

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';
    document.getElementById('nombre').value='';

})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
  }