import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<div></div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
