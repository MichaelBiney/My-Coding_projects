import "./App.css";
//We cannot display two components at the same path so we import a view component that contains the two components we wish to display together
import Main from "./Views/Main";
import OnePets from "./components/OnePets";
import UpdatePets from "./components/UpdatePets";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* Everything inside of our Routes component needs a path */}
                <Routes>
                    {/* Now both components can display from the same path */}
                    <Route path="/" element={<Main />} />
                    {/* :id is a variable added to our path that needs a unique value. We can access and destructure it from the useParams hook */}
                    <Route path="/pet/:id" element={<OnePets />}  />
                    <Route path="/pet/edit/:id" element={<UpdatePets />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;