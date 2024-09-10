import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
