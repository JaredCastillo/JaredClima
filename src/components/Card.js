import React from 'react';
import Spinner from './Spinner';
import "./Card.css";
import {BsFillCloudFog2Fill} from "react-icons/bs";
import {WiHumidity} from "react-icons/wi";
import {BsThermometerHalf, BsThermometerSnow, BsThermometerSun} from "react-icons/bs";


const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var icono = "";

    var icono3 = "";
    var icono6 = "";
    var icono9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return  <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        icono = url + weather.weather[0].icon + ".png";
        icono3 = url + forecast.list[1].weather[0].icon + ".png";
        icono6 = url + forecast.list[2].weather[0].icon + ".png";
        icono9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto text-white">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={icono} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://source.unsplash.com/500x800/?nature,clouds" className="img-fluid rounded-start border-0" alt="..."/>
                                </div>
                                <div className="col-md-8">

                                    <div className="row mt-4 justify-content-center">
                                        <div className="carta card col text-light">
                                            <p>{forecastDate3}h</p>
                                            <p className="description"><img src={icono3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="carta card col text-light">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={icono6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="carta card col text-light">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={icono9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="card-body row mt-4 text-center mt-2">
                                        <h5 className="card col text-light">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC <BsThermometerSun/></h5>
                                        <h5 className="card col text-light">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC <BsThermometerSnow/></h5>
                                        <h5 className="card col text-light">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC <BsThermometerHalf/></h5>
                                        <h5 className="card col text-light">Humedad: {weather.main.humidity}% <WiHumidity/></h5>
                                        <h5 className="card col text-light">Velocidad del viento: {weather.wind.speed}m/s <BsFillCloudFog2Fill/></h5>
                                        //<button onClick={weather.main.temp_max + 273.15} className='btn btn-white input-group-text Farenheit'></button>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                    </div>

                ):(
                    <h2 className="text-light">Sin datos</h2>
                )
            }



        </div>

    );
}

export default Card;