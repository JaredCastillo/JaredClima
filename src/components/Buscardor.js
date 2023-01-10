import React, {useState} from 'react';
import "./Buscador.css";

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault(); //previene que se recargue la pagina al hacer una peticion
        console.log({city});
        if(city === "" || !city) return; //por si no escribimos nada en el buscador

        newLocation(city);
    }

    return(

        <div className="container d-flex justify-content-start">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 ">
                    <input type="text" className="form-control" placeholder="Busca una Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="boton btn input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;