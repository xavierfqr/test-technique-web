import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { useDispatch } from 'react-redux';
import { fetchEquipments } from './actions/equipmentsActions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEquipments());
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}>
          </Route>
          <Route path="/:id" element={<DetailsPage/>}></Route>

        {/* <Route path="/equipment/:id" element={<EquipmentPage/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
