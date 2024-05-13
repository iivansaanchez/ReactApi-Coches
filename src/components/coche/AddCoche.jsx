import React, { useState } from 'react';
import { addCoche } from '../../services/cocheService';

const AddCoche = () => {
    //En primer lugar creamos un useState para controlar los cambios
    const [coche, setCoche] = useState({
        nombre: '',
        marca: '',
        modelo: '',
        color: '',
    })

    //Creamos otra variable de estado para el mensaje de exito
    const [msgSuccess, setMsgSuccess] = useState(false);

    //Hacemos la peticion post a la API
    const addCar = async(e) =>{
        e.preventDefault();
        try {
            await addCoche(coche);
            console.log("El coche se ha añadido con exito.");
            //Una vez que se ha añadido con exito el coche restablecemos el estado para que el formulario se vacié
            setCoche({
                nombre: '',
                marca: '',
                modelo: '',
                color: '',
            }) 
            setMsgSuccess(true);
        } catch (error) {
            console.error(error);
        }
    }
    

    //Por ultimo creamos la funcion handleChange
    const handleChange = (e) => {
        //En cada input se llama a este evento con la funcion de que se pueda extraer lo que ha introducido el usuario
        //Del elemento target se extrar "name" y "value" por lo tanto tenemos el nombre que le hemos asignado
        //al input y el valor que ha introducido el usuario
        const { name, value } = e.target;
        //Llamamos al set coches y al prevCoche le hacemos una copia la cual ya tiene el campo que hemos introducido actualizado
        setCoche((prevCoche) => ({ ...prevCoche, [name]: value }));
      };

    return(
        <div>
            {msgSuccess && (
                <div className="alert alert-success" role="alert">
                    El coche se ha añadido con éxito.
                </div>
            )}
            <form onSubmit={addCar}>
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
            Add
            </button>
            </form>

        </div>

    )
}
export default AddCoche;
