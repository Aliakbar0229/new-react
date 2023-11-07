import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Corsi from "./pages/Corsi";
import Tutorial from "./pages/Tutorial";
import Negozi from "./pages/Negozi";
import Navbar from "./navbar/Navbar";
import Bloger from "./pages/Bloger"
import "./style/Main.css"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/corsi" element={<Corsi />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/negozi" element={<Negozi />} />
          <Route path="/bloger" element={<Bloger/>}></Route>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
