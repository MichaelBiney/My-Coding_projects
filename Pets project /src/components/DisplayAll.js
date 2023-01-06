import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    
    const { petList, setPetList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log("RES- DISPLAY ALL ===>", res)
                console.log("res.data", res.data);
                setPetList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, [setPetList]);

    const deleteFilter = (idFromBelow) => {
        
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                
                const newList = petList.filter((pet, index) => pet._id !== idFromBelow)
                setPetList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>All Shoes:</header>

            {
            
                petList.map((pet, index) => (
                    <div key={index}>
                        
                        <Link to={`/pet/${pet._id}`}>{pet.name}</Link>
                        <br />

                        
                        <button onClick={() => navigate(`/pet/edit/${pet._id}`)}>
                            Edit
                        </button>

                            
                        <button onClick={() => deleteFilter(pet._id)}>
                            Buy Shoe
                        </button>
                    </div>
                ))
            
            }
        </div>
    );
};

export default DisplayAll;