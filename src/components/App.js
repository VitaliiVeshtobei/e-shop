import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "./Layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
