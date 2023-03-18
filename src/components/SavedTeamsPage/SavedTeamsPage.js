import SavedTeamsCard from "../SavedTeamsCard/SavedTeamsCard";
const teamsJSON = require('../../assets/teams-list.json');


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://football-web-pages1.p.rapidapi.com/match.json',
//   params: {match: '407893'},
//   headers: {
//     'X-RapidAPI-Key': '57819f5f43mshbc3a6f975f0fbeep1fa157jsn0811a1b4ba57',
//     'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// works but we need the array to contain objects of team+id
// const teamArray = [];

// for (let i = 0; i < teamsJSON.competitions.length; i++) {
//     for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
//         teamArray.push(teamsJSON.competitions[i].teams[j].name)
//     }
// }

// const teamArray = [];

// for (let i = 0; i < teamsJSON.competitions.length; i++) {
//     for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
//       let teamObj = {
//         name: teamsJSON.competitions[i].teams[j].name,
//         id: teamsJSON.competitions[i].teams[j].id
//       }
//         teamArray.push(teamObj);
//     }
// }

// console.log(teamArray);


let inputTeamID;
let inputTeamComp;

// loops through JSON file to find the team id based on team input name
function findTeamIDByName(inputTeamName) {
    for (let i = 0; i < teamsJSON.competitions.length; i++) {
        for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
            if (teamsJSON.competitions[i].teams[j].name === inputTeamName) {
                inputTeamID = teamsJSON.competitions[i].teams[j].id;
                console.log(inputTeamID);
            }
        }
    }
}

// loops through JSON file to find the team competition based on team input name
function findTeamCompByName(inputTeamName) {
    for (let i = 0; i < teamsJSON.competitions.length; i++) {
        for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
            if (teamsJSON.competitions[i].teams[j].name === inputTeamName) {
                inputTeamComp = teamsJSON.competitions[i].fullName;
                console.log(inputTeamComp);
            }
        }
    }
}

findTeamIDByName('Manchester United');
findTeamCompByName('Manchester United');



function SavedTeamsPage() {
  return (
  <div>

{/* navbar */}
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://github.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* saved teams buttons */}
<nav className="navbar bg-light me-5 ms-5">
  <form className="container-fluid justify-content-start">
    {/* change to loop through local storage saved teams array to create a button for each team */}
    <button className="btn btn-outline-success me-2" type="button">Team 1</button>
    <button className="btn btn-outline-success me-2" type="button">Team 2</button>
    <button className="btn btn-outline-success me-2" type="button">Team 3</button>
    <button className="btn btn-outline-success me-2" type="button">Team 4</button>
    <button className="btn btn-outline-success me-2" type="button">Team 5</button>
  </form>
</nav>

{/* change to loop through local storage saved teams array to create a card for each team */}
<SavedTeamsCard />


</div>
)



}
export default SavedTeamsPage;



  // <Container id="projects-section">
        //   <h1 id="projects-title">Projects</h1>
    
        //   {projects.map((project, index) => {
        //     // const image = require(screenshotLink)
    
        //     return (
    
        //       <SavedTeamsCard
        //         key={index}
        //         name={project.name}
        //         description={project.description}
        //         deployedLink={project.deployedApp}
        //         repoLink={project.githubRepo}
        //         screenshot={project.screenshot} />
        //     );
            
        //   })}
    
        // </Container>