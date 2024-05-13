import React, { useEffect, useState } from "react";
import { getCoches, deleteCoche } from "../../services/cocheService";
import { Link } from "react-router-dom";
import DetailCoche from "./DetailCoche";

const ListCoche = () => {
    const [coches, setCoches] = useState([]);
    const [selectedCoche, setSelectedCoche] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await getCoches();
                setCoches(response.data);
            } catch (error) {
                console.error("Error al obtener coches:", error);
            }
        };
        obtenerDatos();
    }, []);

    const deleteCar = async(cocheId) =>{
        try {
            await deleteCoche(cocheId);
            setCoches(coches.filter((coche) => coche.id !== cocheId));
            
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <div className="row mt-5">
            {coches.map((coche, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{coche.nombre}</h5>
                            <p className="card-text">{coche.marca}</p>
                            <p className="card-text">{coche.modelo}</p>
                            <p className="card-text">{coche.color}</p>
                            <Link to={`/coches/?id=${coche.id}`} style={{ margin: "10px" }} className="btn btn-primary" onClick={() => setSelectedCoche(coche)}>Ver detalles</Link>
                            <Link to={`/coches/edit/${coche.id}`} className="btn btn-warning mr-2">Edit</Link>
                            <button className="btn btn-danger" onClick={() => deleteCar(coche.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            {selectedCoche && <DetailCoche coche={selectedCoche} />}
        </div>
    );
};

export default ListCoche;
