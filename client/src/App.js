import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Common/Nav";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
