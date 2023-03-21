import HomePage from './components/Homepage/Homepage';
import Welcome from './components/Welcome/Welcome';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SavedTeamPage from './components/SavedTeamsPage/SavedTeamsPage';
import SummaryPage from './components/SummaryPage/SummaryPage';

function App() {

  return (
<<<<<<< HEAD
    <>
      <Header />
      <SummaryPage/>
      <Footer/>
    </>

=======
    <Router>

      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/live" element={<SummaryPage />} />
        <Route path="/saved/*" element={<SavedTeamPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {localStorage.getItem('Fav team') ? <Navigate to="/" replace /> : <Navigate to="/welcome" replace />}
    </Router>
>>>>>>> 7528a3004f3dce40eeecc1609839ce5a79091a8f
  );
}

export default App;