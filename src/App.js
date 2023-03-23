import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Wrapper from './components/Wrapper/Wrapper';
function App() {
  return (
    <>
      <Routes>
        <Route element={<Wrapper />}>
          <Route
            index
            path="/"
            element={<HomePage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
