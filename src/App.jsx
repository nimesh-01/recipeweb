import React from "react";
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="py-10 px-4 md:px-[10%] text-white font-thin">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;