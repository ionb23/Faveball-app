import HomePage from './components/Homepage/Homepage';
import Welcome from './components/Welcome/Welcome';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SavedTeamPage from './components/SavedTeamsPage/SavedTeamsPage';
import SummaryPage from './components/SummaryPage/SummaryPage';
import { useState, useEffect } from 'react';

function App() {
  const [pickedTeam, setPickedTeam] = useState(localStorage.getItem('Fav team'));

  useEffect(() => {
    setPickedTeam(localStorage.getItem('Fav team'));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/live" element={<SummaryPage />} />
        <Route path="/saved/*" element={<SavedTeamPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {pickedTeam ? <Navigate to="/home" replace /> : <Navigate to="/" replace />}
    </Router>
  );
}

export default App;
