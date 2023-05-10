import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import { useState } from "react";
import { Form } from "react-bootstrap";
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import Swal from "sweetalert2";

export const CartCountainer = () => {
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const order = {
      buyer: formData,
      items: cartList.map(({ id, title, price }) => ({ id, title, price })),
      total: precioTotal(),
    };
    const db = getFirestore();

    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => {
        setId(resp.id);
        vaciarCarrito();
        Swal.fire({
          icon: "success",
          title: "¡Gracias por la compra!",
          text: `Su numero de compra es: ${resp.id}`,
          showConfirmButton: true,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return cartList.length == 0 ? (
    <div className="seccion-cart">
      <h3>Su carrito esta vacio</h3>
      <Link to="/productos">
        <button className="button">Ver productos</button>
      </Link>
    </div>
  ) : (
    <div className="seccion-cart">
      {cartList.map((product) => (
        <li className="item-cart" key={product.id}>
          <img src={product.image} alt="imagen" className="w-25" />
          <div className="descripcion-cart">
            <h4>{product.title}</h4>
            <hr></hr>
            <p>Precio: ${product.price}</p>
            <p>Cantidad : {product.quantity}</p>
          </div>

          <button
            className="buttoneliminar button"
            onClick={() => eliminarProducto(product.id)}
          >
            X
          </button>
        </li>
      ))}
      <h3>Precio Total: ${precioTotal()}</h3>
      <button className="btn btn-danger" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
      <div className="div-form">
        <Form
          onSubmit={handleSubmit}
          className="d-flex row justify-content-center"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ejemplo@gmail.com"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder=""
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder=""
              value={formData.phone}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <button className="w-50 btn btn-success" variant="primary">
            Terminar compra
          </button>
        </Form>
      </div>
    </div>
  );
};
