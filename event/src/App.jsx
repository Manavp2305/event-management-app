import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Contact from './Components/ContactPage/Contact';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/Signup";
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Event from './Components/Event/Event';
import NavBar from './Components/HomePage/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Event />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
