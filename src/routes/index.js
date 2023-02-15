import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "../Components/Layouts/Default.jsx";
import LayoutBlank from "../Components/Layouts/Blank.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import AppartmentDetail from "../pages/AppartmentDetail/AppartmentDetail.jsx";
import Error from "../pages/Error/Error.jsx";

function App() {
  return (
    <BrowserRouter>
    {/* This route will be used to display the Error component whenever the URL 
    does not match any of the other defined routes. */}
      <Routes>
        <Route element={<LayoutBlank />}>
          <Route path="*" element={<Error />} />
        </Route>
        {/* This route will be used as a wrapper for the other pages in the application */}
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartmentDetail/:id" element={<AppartmentDetail />} />
          {/* dynamic parameter that can change 
          based on the appartment selected by the user */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
