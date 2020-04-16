import React, {useState, useEffect} from "react";
import axios from "axios";
import APODCard from "./APODCard";
import SelectDate from "./selectDate";
import styled from "styled-components";

export default function APODContainer() {

    const [APODImage, setAPODImage] = useState({});
    const [date, setDate] = useState("");

    let newDate = new Date()
    const firstDate = `&date=1995-06-16`;

    let month = "";
    let day = "";
    let year = "";

    //styled components
    const StyledDiv = styled.div`
        background-color: black;
        color: white;
        width: 70%;
        margin-left: 10%;
        padding: 0 5% 15px;
        text-align: center;
    `;

    const StyledH1 = styled.h1`
        font-size: 2rem;
        font-family: Verdana;
        padding-top: 5px;
    `;

    const Button = styled.button`
        font-size: 1.2rem;
        background-color: #212121;
        color: white;
        padding: 6px 10px;
        margin: 10px;
        border: none;
        border-radius: 3px;
    `;

    const InputContainer = styled.span`
        margin:10px;
    `;

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
        <StyledDiv>
            <div>
                <StyledH1>NASA's Astronomy Picture of the Day</StyledH1>
            </div>
            <APODCard id={APODImage.title} url={APODImage.url} title={APODImage.title} explanation={APODImage.explanation} date={APODImage.date} copyright={APODImage.copyright}/>

            <Button onClick={e => setDate(firstDate)}>Beginning</Button>
            <Button onClick={e => setDate(``)}>Previous</Button>
            <InputContainer>
                <SelectDate />
            </InputContainer>
            <Button onClick={e => setDate(``)}>Next</Button>
            <Button onClick={e => setDate(``)}>Today</Button>
        </StyledDiv>
    )
}