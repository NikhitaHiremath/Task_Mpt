import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowBlog from "./pages/ShowBlog"; // ✅ added import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show" element={<ShowBlog />} /> {/* ✅ fixed path */}
    </Routes>
  );
}

export default App;
