import HomePage from './components/Homepage/Homepage'
import Welcome from './components/Welcome/Welcome';
import {HashRouter as Router ,Route, Routes, Navigate} from 'react-router-dom'
import SavedTeamPage from './components/SavedTeamsPage/SavedTeamsPage';
import SummaryPage from './components/SummaryPage/SummaryPage';


function App() {
const pickedTeam = localStorage.getItem('Fav team')


  return (<>
  <Router>
     {pickedTeam ? <Navigate to="/home" /> :  <Navigate to="/" /> }
<Routes>
<Route path="/" element={<Welcome />} />
<Route path="/home" element={<HomePage />} />
<Route path="live" element={<SummaryPage />} />
<Route path="saved/*" element={<SavedTeamPage />} />
</Routes>
</Router>
  </>

  );
}

export default App;
