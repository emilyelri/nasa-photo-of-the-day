import React from "react";

export default function APODCard(props) {
    return (
        <div className="APODDiv" key="props.title">
            <img className="APODImage" alt="APOD" src={props.url} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <p>Date: {props.date}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );
}