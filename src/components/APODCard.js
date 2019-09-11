import React from "react";

export default function APODCard(props) {
    return (
        <div className="APODDiv" key="props.title">
            <h2>{props.title}</h2>
            <img className="APODImage" alt="APOD" src={props.url} />
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );
}