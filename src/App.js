import HomePage from './components/Homepage/Homepage';
import Welcome from './components/Welcome/Welcome';
import {HashRouter as Router ,Route, Routes, Navigate} from 'react-router-dom'
import SavedTeamPage from './components/SavedTeamsPage/SavedTeamsPage';
import SummaryPage from './components/SummaryPage/SummaryPage';

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://football-web-pages1.p.rapidapi.com/match.json',
  params: {match: '407893'},
  headers: {
    'X-RapidAPI-Key': '57819f5f43mshbc3a6f975f0fbeep1fa157jsn0811a1b4ba57',
    'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


function App() {
const pickedTeam = localStorage.getItem('Fav team')


  return (<>
  <Router>
     {pickedTeam ?<Navigate to="/home" />:  <Navigate to="/" /> }

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
