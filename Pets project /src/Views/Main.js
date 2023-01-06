import React, {useState, } from "react";
import CreatePets from "../components/CreatePets";
import DisplayAll from "../components/DisplayAll";


const Main = (props) => {
    
    const [petList, setPetList] = useState([]);

    return (
        <div>
            
            <CreatePets
                petList={petList}
                setPetList={setPetList}
            />
                        
            <DisplayAll
                petList={petList}
                setPetList={setPetList}
            />
        </div>
    );
};

export default Main;