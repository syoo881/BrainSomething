import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Game1 from "./components/Game1";
import ColourPuzzle from "./components/ColourPuzzle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="colourpuzzle" element={<ColourPuzzle />} />
            {/*// <Route path="/game1" element={<Game1 />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
