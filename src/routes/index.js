import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "../Components/Layouts/Defaut.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import AppartmentDetail from "../pages/AppartmentDetail/AppartmentDetail.jsx";
import LayoutBlank from "../Components/Layouts/Blank.jsx";
import Error from "../pages/Error/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LayoutBlank />}>
          <Route path="*" element={<Error />} />
        </Route>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartmentDetail/:id" element={<AppartmentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
