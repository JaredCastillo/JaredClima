import React, {useState} from 'react';
import Buscador from './Buscardor.js';
import Card from './Card.js';

const WeatherPanel = () => {

    let Climaapi = "https://api.openweathermap.org/data/2.5/weather?appid=47aa70ca46880d60e8352c72c9c01125&lang=es";
    let Ciudad = "&q="; // para acompletar la busqueda en el link 

    let Pronostico = "https://api.openweathermap.org/data/2.5/forecast?appid=47aa70ca46880d60e8352c72c9c01125&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        Climaapi = Climaapi + Ciudad + loc;

        await fetch(Climaapi).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        Pronostico = Pronostico + Ciudad + loc;

        await fetch(Pronostico).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });        
    }

    return(

        <React.Fragment>
            <Buscador
                newLocation = {getLocation}
            />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );

}

export default WeatherPanel;