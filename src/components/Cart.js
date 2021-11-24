import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./Cart.css";
import { getFirestore } from "../firebase/index";
import "firebase/firestore";
//import {firebase} from "firebase/app";
import { collection , addDoc } from "firebase/firestore";
import Trash from "../assets/trash.png";

export const Cart = () => {
  let pesosArg = Intl.NumberFormat("ar-AR", {
    style: "currency",
    currency: "ARG",
  });

  const [flagCompra, setFlagCompra]=useState(false);
  const [success, setSucces]=useState(false);
  const [codigo, setCodigo]=useState();

  const { cart, clearCart, removeItem } = useContext(CartContext);
  //const [order, setOrder] = useState({});
  const cambiar = ()=>{
    setFlagCompra(!flagCompra);
  }
  let total = 0;
  cart.forEach(function (a) {
    total += parseInt(a.product.precio) * a.product.qty;
  });

  const [usuario, setUsuario] = useState({});
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");  
  const [mail, setMail] = useState("");  
  const [tel, setTel] = useState("");  
  const [obs, setObs] = useState("");  

  const handleNombre = (e) => setNombre(e.target.value);
  const handleMail = (e) => setMail(e.target.value);
  const handleTel = (e) => setTel(e.target.value);
  const handleApellido = (e) => setApellido(e.target.value);
  const handleObs = (e) => setObs(e.target.value);

  function verif(mail, nombre, apellido, tel, obs) {
    if(mail!=='' && nombre !== ''  && tel !== ''){
    setUsuario({
      nombre: nombre,
      apellido: apellido,
      email: mail,      
      tel: tel,
      obs: obs,
    });}
    else{
      alert('Complete los campos obligatorios')
    }
  }

    function crearOrden() {
      const db = getFirestore();
      const orders = collection(db, "orders");
      verif(mail, nombre, apellido, tel, obs);
      const newOrder = {
        buyer: usuario,
        items: cart,
        //date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: total,
      };
      addDoc(orders, newOrder).then(({id})=>{
        setCodigo(id);
      });
      }

  function buy() {    
    crearOrden();    
    clearCart();
    setSucces(true);
  }


  return (
    <>
    
      {(!flagCompra && !success && cart.length !== 0) ? <div className="cartProduct">
        <div className="product fw-bold m-3">
          <p> Producto </p> <p> Cant. </p> <p> Precio U </p> <p> Subtotal </p>
          <p> id </p>
        </div>
        {cart !== [] ? (
          cart.map((producto, index) => (
            <div key={index}>
              <div className="product m-3">
                <p> {producto.product.nombre} </p>
                <p> {producto.product.qty} </p>
                <p> $ {pesosArg.format(producto.product.precio)} </p>
                <p> {producto.product.precio * producto.product.qty} </p>
                <p> {producto.product.id} </p>
                <button className="btn btn-danger btnDel" onClick={() => removeItem(index)}>
                  <img src={Trash} className="trash" alt="trash"></img>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div> El carrito está vacío </div>
        )}
        <div className="fw-bold"> Total Compra: $ {pesosArg.format(total)} </div>
        {cart !== [] ? (
          <>            
            <button className="btn btn-success m-3" onClick={cambiar}> Terminar Compra </button>
            <button className="btn btn-info m-3" onClick={clearCart}> Limpiar Carro </button>
          </>
        ) : (
          <p> na pa borrar </p>
        )}
      </div> : <div><h1>El carro está vacio</h1>
      <button className="btn btn-info m-3"><Link to={"/list"}>Ir a Productos</Link></button></div>}
    
      {flagCompra && !success && <div className="container-fluid">
        <h2>Confirmación de Compra</h2>
        <form>
        <div className="input-group mb-3 mt-3">  
          <input type="text"
            placeholder="Nombre"
            onChange={handleNombre}
            value={nombre}
            className="form-control"></input>
        </div>
        <div className="input-group mb-3 mt-3">  
          <input type="text" 
          className="form-control" 
          placeholder="Apellido" 
          onChange={handleApellido} 
          value={apellido}></input>
        </div>

        <div className="input-group mb-3">
          <input type="tel" 
          className="form-control" 
          placeholder="Teléfono" 
          onChange={handleTel} 
          value={tel}></input>
        </div>

        <div className="input-group mb-3">
          <input type="email"
            placeholder="Email"
            onChange={handleMail}
            value={mail}
            className="form-control"
            required></input>
        </div>            

        <div className="input-group">
          <textarea className="form-control" 
          placeholder="Observaciones" 
          onChange={handleObs} 
          value={obs}></textarea>
        </div>        
        <button  type="button" className="btn btn-info m-3" onClick={cambiar}>Ver Carro</button>                    
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{verif(mail, nombre, apellido, tel, obs)}}>
          Confirmar Datos
        </button>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Tu Compra</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                                {cart !== [] ? (
                                    cart.map((producto, index) => (
                                      <div key={index}>
                                        <div className="product m-3">
                                          <p> {producto.product.nombre} </p>
                                          <p> {producto.product.qty} </p>
                                          <p> $ {pesosArg.format(producto.product.precio)} </p>
                                          <p> {producto.product.precio * producto.product.qty} </p>                                                                                   
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div> El carrito está vacío </div>
                                  )}
                                  <div className="fw-bold"> Total Compra: $ {pesosArg.format(total)} </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={buy}>Confirmar</button>
                  </div>
                </div>
              </div>
            </div>
        </form>
      </div>}
      {success && <div>
        <h2>Compra realizada con Éxito</h2>
        <h3>{usuario.nombre}:</h3>
        <p>Su compra se registró correctamente con el código de órden:</p>
        <p><strong>{codigo}</strong></p>
        <button className="btn btn-info"><Link to={"/"}> Volver al Home </Link></button>
        </div>}
        
    </>
  );
};
