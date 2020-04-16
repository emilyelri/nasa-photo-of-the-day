import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
max-width: 70%;
`;

export default function APODCard(props) {
    return (
        <div key="props.title">
            <h2>{props.title}</h2>
            <StyledImage alt="APOD" src={props.url} />
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );
}