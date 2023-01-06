import React, { useState } from "react";
import axios from "axios";

const CreatePet = (props) => {
    
    const { petList, setPetList } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills1, setskills1] = useState("");
    const [skills2, setskills2] = useState("");
    const [skills3, setskills3] = useState("");
    const [errors, setErrors] = useState({});
    

    const submitHandler = (e) => {
        e.preventDefault();
        

        axios
            .post("http://localhost:8000/api/pets", {
                name, 
                type,
                description,
                skills1,
                skills2,
                skills3
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                setPetList([...petList, res.data]);
                setName("");
                setType("");
                setDescription("");
                setskills1("");
                setskills2("");
                setskills3("");

            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.errors)
            });
            
    };

    return (
        <div>
         {errors.name ? <p>{errors.name.message}</p> :null}
            <header>Sneaker Heads</header>

            <form onSubmit={submitHandler}>
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
                    <label>Shoe Name:</label>
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
                    <label>Shoe size</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>
                <br />

                <div className="form-fields">
                    <label>Shoe color</label>
                    <input
                        onChange={(e) => setskills1(e.target.value)}
                        value={skills1}
                        name="skills1"
                        type="text"
                    />
                </div>
            <br />

                

                <div className="form-fields">
                    <label>Shoe Year </label>
                    <input
                        onChange={(e) => setskills2(e.target.value)}
                        value={skills2}
                        name="skills2"
                        type="text"
                    />
                </div>
                <br />

                <div className="form-fields">
                    <label>Shoe type</label>
                    <input
                        onChange={(e) => setskills3(e.target.value)}
                        value={skills3}
                        name="skills3"
                        type="text"
                    />
                </div>
                <br />
                
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreatePet;