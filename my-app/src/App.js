
import Home from './Home';
import Booking from './Booking';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/booking' element={<Booking />} />
            </Routes>
        </div>
    );
};

export { App };