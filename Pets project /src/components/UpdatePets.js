import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdatePet = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setskills1] = useState("");
    const [skills2,setskills2] = useState(""); 
    const [skills3,setskills3] = useState(""); 
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();

    

    const [headerName, setHeaderName] = useState("");

    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log("THEN-USE-EFFCT RES ===>", res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setskills1(res.data.skills1);
                setskills2(res.data.skills2);
                setskills3(res.data.skills3);
                setHeaderName(res.data.name);
            })
            .catch((err) => console.log("GET ERROR====>",err));
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${id}`, { 
                name, 
                type,
                description,
                skills1,
                skills2,
                skills3

            })
            .then((res) => {
        
                console.log("res==>",res);
                console.log("res.data=>>",res.data);
                if (res.data.error){
                   console.log("res.data.errors")
                   
                } else{
                    navigate("/"); 
                }
        
            })
            .catch((err) => {
                console.log("CATCH ERROR==>", err);
                console.log(err)
                setErrors(err.response.data.errors)

            });
    };

    return (
        <div>
            <header>Edit {headerName}</header>
            {errors.name ? <p>{errors.name.message}</p> :null}
            
            <form onSubmit={updateHandler}>
                <div className="form-fields">
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        name="name"
                        type="text"
                    />
                </div>

                <br />
                 {errors.type ? <p>{errors.type.message}</p> :null} 

                <div className="form-fields">
                    <label>Shoe Name</label>
                    <input
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        name="type"
                        type="text"
                    />
                </div>

                <br />
                {errors.description ? <p>{errors.description.message}</p> :null}

                <div className="form-fields">  
                    <label>shoe size</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                    <br />
                <div className="form-fields">
                    <label>shoe color</label>
                    <input
                        onChange={(e) => setskills1(e.target.value)}
                        value={skills1}
                        name="skills1"
                        type="text"
                    />
                </div>

                <br />

                < div className="form-fields">
                    <label>Shoe Year</label>
                    <input 
                    onChange={(e) => setskills2(e.target.value)}
                    value={skills2}
                    name="skills2"
                    type="text"
                    />
                </div>
                <br />
                < div className="form-fields">
                    <label>Shoe Type</label>
                    <input 
                    onChange={(e) => setskills3(e.target.value)}
                    value={skills3}
                    name="skills3"
                    type="text"
                    />
                </div>
        
                <br />
              
                <button className="submit-input" type="submit"> Update!</button>
            </form>
        </div>
    );
};

export default UpdatePet;