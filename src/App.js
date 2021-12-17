import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { useDispatch } from 'react-redux';
import { fetchEquipments } from './actions/equipmentsActions';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEquipments());
  }, [dispatch])

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
