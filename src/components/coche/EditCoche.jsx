import { editCoche, getCochesId } from "../../services/cocheService";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const EditCoche = () => {
    //Creamos el objeto con el que trabaremos
    const [coche, setCoche] = useState({
        nombre: '',
        marca: '',
        modelo: '',
        color: '',
    });

    const [msgSuccess, setMsgSuccess] = useState(false);

    //Rescatamos el id de la URL usando useParams()
    const { id } = useParams();
    
    //Funcion para agregar los cambios que haga el usuario al objeto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoche((prevCoche) => ({ ...prevCoche, [name]: value }));
    };

    //Peticion al servidor para editar
    const editCar = async(e) => {
        e.preventDefault();
        try {
            await editCoche(id, coche);
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

    //Peticion al servidor para obtener el coche por su id
    //Con el useEffect controlamos que esta funcion se ejecute solo cuando el id cambie, mientras tanto solo se 
    //ejecutara 1 vez
    useEffect(() =>{
        const cocheEditar = async() =>{
            try {
                const response = await getCochesId(id);
                setCoche(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    
        cocheEditar();
    }, [id]);

    return (
        <div>
            {msgSuccess && (
                <div className="alert alert-success" role="alert">
                    El coche se ha editado con éxito.
                </div>
            )}
            <form onSubmit={editCar}>
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
            Edit
            </button>
            </form>

        </div>
    )
}

export default EditCoche;