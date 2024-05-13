// CocheForm.jsx
import React, { useState } from 'react';
import { addCoche, editCoche } from '../../services/cocheService';
import { useParams } from "react-router-dom";

const CocheForm = () => {
  const [coche, setCoche] = useState({
    nombre: '',
    marca: '',
    modelo: '',
    color: '',
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoche((prevCoche) => ({ ...prevCoche, [name]: value }));
  };

  const editCar = (e) => {
  e.preventDefault();
  editCoche(id, coche)  
    .then(() => {
      console.log("El coche fue editado");
    })
    .catch((error) => console.log(error));
};

  const addCar = (e) => {
    e.preventDefault();
    addCoche(coche)
      .then(() => {
        console.log("El coche fue añadido");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-4">
      <br></br>
      <h2>{id ? 'Editar' : 'Añadir'}</h2>

      <form onSubmit={id ? editCar : addCar}>
        <div className="mb-3">
          <label className="form-label">Nombre: </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={coche.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca: </label>
          <input
            type="text"
            className="form-control"
            name="marca"
            value={coche.marca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Modelo: </label>
          <input
            type="text"
            className="form-control"
            name="modelo"
            value={coche.modelo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Color:</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={coche.color}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Editar' : 'Añadir'}
        </button>
      </form>
    </div>
  );
};

export default CocheForm;
