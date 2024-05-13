import axios from "axios";

const url = "http://localhost:3000";


const getCoches = () => axios.get(`${url}/coches`);
const getModeloCoche = (modelo) => axios.get(`${url}?modelo=${modelo}`);
const getCochesId = (id) => axios.get(`${url}/coches/${id}`);
const addCoche = (coche) => axios.post(`${url}/coches`, coche);
const editCoche = (id, coche) => axios.put(`${url}/coches/${id}`, coche);
const deleteCoche = (id) => axios.delete(`${url}/coches/${id}`);


export {
    getCoches,
    getModeloCoche,
    getCochesId,
    addCoche,
    editCoche,
    deleteCoche
}