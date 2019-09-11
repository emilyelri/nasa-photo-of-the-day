import React, {useState, useEffect} from "react";
import axios from "axios";
import APODCard from "./APODCard";
import SelectDate from "./selectDate";

export default function APODContainer() {

    const [APODImage, setAPODImage] = useState({});
    const [date, setDate] = useState("");

    let newDate = new Date()
    let todayDate = newDate.getDate();
    let todayMonth = newDate.getMonth() + 1;
    let todayYear = newDate.getFullYear();
    
    let month = "";
    let day = "";
    let year = "";

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=nzEVJvLJt6tVpRO4vqgIYL0zwPAcnzIBm8UGT65o${date}`)
        .then(response => {
            const APOD = response.data;
            console.log(APOD)
            setAPODImage(APOD);
        })
        .catch(error => {
            console.log("Not able to fetch APOD.", error)
        });
    }, [date]);

    return (
        <div className="container">
            <div class="topbar">
                <h1>NASA's Astronomy Picture of the Day</h1>
            </div>
            <APODCard id={APODImage.title} url={APODImage.url} title={APODImage.title} explanation={APODImage.explanation} date={APODImage.date} copyright={APODImage.copyright}/>

            <button onClick={e => setDate(`&date=1995-06-16`)}>Beginning</button>
            <button onClick={e => setDate(``)}>Previous</button>

            <SelectDate />

            <button onClick={e => setDate(``)}>Next</button>
            <button onClick={e => setDate(``)}>Today</button>
        </div>
    )
}