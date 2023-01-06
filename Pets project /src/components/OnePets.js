import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OnePet = (props) => {
    
    const { id } = useParams();
    const [onePet, setOnePet] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res.data);
                setOnePet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    return (
        <div className="oneProduct-component">
            <h2>{onePet.name}</h2>
            <p>Shoe name:{onePet.type}</p>
            <p>Shoe size: {onePet.description}</p>
            <p>Shoe color: {onePet.skills1}</p>
            <p>Shoe year: {onePet.skills2}</p>
            <p>Show type: {onePet.skills3}</p>
        </div>
    );
};

export default OnePet;