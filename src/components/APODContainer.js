import React, {useState, useEffect} from "react";
import axios from "axios";
import APODCard from "./APODCard";

export default function APODContainer() {

    const [APODImage, setAPODImage] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            const APOD = response.data;
            console.log(APOD)
            setAPODImage(APOD);
        })
        .catch(error => {
            console.log("Not able to fetch APOD.", error)
        });
    }, []);

    return (
        <div className="container">
            <APODCard id={APODImage.title} url={APODImage.url} title={APODImage.title} explanation={APODImage.explanation} date={APODImage.date} copyright={APODImage.copyright}/>
        </div>
    )
}