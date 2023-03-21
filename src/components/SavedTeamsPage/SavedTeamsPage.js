import React, { useState, useEffect } from 'react';
import SavedTeamsCard from "../SavedTeamsCard/SavedTeamsCard";
import axios from 'axios';

const teamsJSON = require('../../assets/teams-list.json');

let inputTeamID;
let inputTeamComp;

// loops through JSON file to find the team id based on team input name
function findTeamIDByName(inputTeamName) {
    for (let i = 0; i < teamsJSON.competitions.length; i++) {
        for (let j = 0; j < teamsJSON.competitions[i].teams.length; j++) {
            if (teamsJSON.competitions[i].teams[j].name === inputTeamName) {
                inputTeamID = teamsJSON.competitions[i].teams[j].id;
                return inputTeamID;
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
                return inputTeamComp;
            }
        }
    }
}

findTeamIDByName('Manchester United');
findTeamCompByName('Manchester United');

function SavedTeamsPage() {

  const savedTeams = ['Barcelona','Liverpool'];


  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
      async function fetchData() {

        const newTeamData = [];

          savedTeams.forEach(async (team) => {
              const options = {
                  method: 'GET',
                  url: 'https://football-web-pages1.p.rapidapi.com/team.json',
                  params: { team: findTeamIDByName(team) },
                  headers: {
                      'X-RapidAPI-Key': '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca',
                      'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
                  }
              };

              const options2 = {
                  method: 'GET',
                  url: 'https://football-web-pages1.p.rapidapi.com/league-progress.json',
                  params: { team: findTeamIDByName(team) },
                  headers: {
                      'X-RapidAPI-Key': '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca',
                      'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
                  }
              };

              const options3 = {
                method: 'GET',
                url: 'https://football-web-pages1.p.rapidapi.com/records.json',
                params: { team: findTeamIDByName(team) },
                headers: {
                  'X-RapidAPI-Key': '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca',
                  'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
                }
              };

              const options4 = {
                method: 'GET',
                url: 'https://football-web-pages1.p.rapidapi.com/goalscorers.json',
                params: { team: findTeamIDByName(team) },
                headers: {
                  'X-RapidAPI-Key': '536ff355c8mshd9ba3e88969d743p1bde80jsn7f1737cb1dca',
                  'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
                }
              };
              
              try {
                  let groundData = await axios.request(options);

                  let leagueData = await axios.request(options2);

                  let recordsData = await axios.request(options3);

                  let goalscorerData = await axios.request(options4);

                  // const options5 = {
                  //   method: 'GET',
                  //   url: 'https://joj-image-search.p.rapidapi.com/v2/',
                  //   params: {q: 'robert lewandowski portrait'},
                  //   headers: {
                  //     'X-RapidAPI-Key': 'f09425a46emsh01c4f5ed39e351cp1e53f3jsn2869b4c15bef',
                  //     'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
                  //   }
                  // };

                  // let goalscorerImg = await axios.request(options5);


                  // setTeamData([...teamData,
                  newTeamData.push(
                    {
                        teamName: team,
                        teamID: findTeamIDByName(team),
                        ground: {
                            groundName: groundData.data.team.ground,
                            groundCapacity: groundData.data.team.capacity,
                        },
                        league: {
                            leagueName: findTeamCompByName(team),
                            leaguePosition: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].position,
                            leaguePlayed: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].played,
                            leaguePoints: leagueData.data["league-progress"].progress[leagueData.data["league-progress"].progress.length - 1].points
                        },
                        goalscorers: {
                          firstName: goalscorerData.data.goalscorers.players[0]["first-name"],
                          lastName: goalscorerData.data.goalscorers.players[0]["last-name"],
                          playerID: goalscorerData.data.goalscorers.players[0].id,
                          goals: goalscorerData.data.goalscorers.players[0].goals.length
                      },
                        records: {
                            biggestVictory: {
                              description: recordsData.data.records.records[2].description,
                              date: recordsData.data.records.records[2].matches[0].date,
                              matchID: recordsData.data.records.records[2].matches[0].id,
                              attendance: recordsData.data.records.records[2].matches[0].attendance,
                              homeTeamName: recordsData.data.records.records[2].matches[0]["home-team"].name,
                              homeTeamScore: recordsData.data.records.records[2].matches[0]["home-team"].score,
                              awayTeamName: recordsData.data.records.records[2].matches[0]["away-team"].name,
                              awayTeamScore: recordsData.data.records.records[2].matches[0]["away-team"].score,
                            },
                            heaviestDefeat: {
                              description: recordsData.data.records.records[5].description,
                              date: recordsData.data.records.records[5].matches[0].date,
                              matchID: recordsData.data.records.records[5].matches[0].id,
                              attendance: recordsData.data.records.records[5].matches[0].attendance,
                              homeTeamName: recordsData.data.records.records[5].matches[0]["home-team"].name,
                              homeTeamScore: recordsData.data.records.records[5].matches[0]["home-team"].score,
                              awayTeamName: recordsData.data.records.records[5].matches[0]["away-team"].name,
                              awayTeamScore: recordsData.data.records.records[5].matches[0]["away-team"].score,
                            },
                            highestScoring: {
                              description: recordsData.data.records.records[8].description,
                              date: recordsData.data.records.records[8].matches[0].date,
                              matchID: recordsData.data.records.records[8].matches[0].id,
                              attendance: recordsData.data.records.records[8].matches[0].attendance,
                              homeTeamName: recordsData.data.records.records[8].matches[0]["home-team"].name,
                              homeTeamScore: recordsData.data.records.records[8].matches[0]["home-team"].score,
                              awayTeamName: recordsData.data.records.records[8].matches[0]["away-team"].name,
                              awayTeamScore: recordsData.data.records.records[8].matches[0]["away-team"].score,
                            },
                            highestAttendance: {
                              description: recordsData.data.records.records[11].description,
                              date: recordsData.data.records.records[11].matches[0].date,
                              matchID: recordsData.data.records.records[11].matches[0].id,
                              attendance: recordsData.data.records.records[11].matches[0].attendance,
                              homeTeamName: recordsData.data.records.records[11].matches[0]["home-team"].name,
                              homeTeamScore: recordsData.data.records.records[11].matches[0]["home-team"].score,
                              awayTeamName: recordsData.data.records.records[11].matches[0]["away-team"].name,
                              awayTeamScore: recordsData.data.records.records[11].matches[0]["away-team"].score,
                            },
                            lowestAttendance: {
                              description: recordsData.data.records.records[14].description,
                              date: recordsData.data.records.records[14].matches[0].date,
                              matchID: recordsData.data.records.records[14].matches[0].id,
                              attendance: recordsData.data.records.records[14].matches[0].attendance,
                              homeTeamName: recordsData.data.records.records[14].matches[0]["home-team"].name,
                              homeTeamScore: recordsData.data.records.records[14].matches[0]["home-team"].score,
                              awayTeamName: recordsData.data.records.records[14].matches[0]["away-team"].name,
                              awayTeamScore: recordsData.data.records.records[14].matches[0]["away-team"].score,
                            }
                        }
                    });

                    if (newTeamData.length === savedTeams.length) {
                      setTeamData(newTeamData);
                    }

              } catch (error) {
                  console.log(error);
              }
          })
      }
      fetchData();

  }, [])
    

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
<div>
      {
    teamData.map(function (t) {
        return <SavedTeamsCard
            key={t.teamID}
            teamName={t.teamName}

            groundName={t.ground.groundName}
            groundCapacity={t.ground.groundCapacity}

            leagueName={t.league.leagueName}
            leaguePosition={t.league.leaguePosition}
            leaguePlayed={t.league.leaguePlayed}
            leaguePoints={t.league.leaguePoints}

            firstName={t.goalscorers.firstName}
            lastName={t.goalscorers.lastName}
            goals={t.goalscorers.goals}

            WINdescription={t.records.biggestVictory.description}
            WINdate={t.records.biggestVictory.date}
            WINattendance={t.records.biggestVictory.attendance}
            WINhomeTeamName={t.records.biggestVictory.homeTeamName}
            WINhomeTeamscore={t.records.biggestVictory.homeTeamScore}
            WINawayTeamName={t.records.biggestVictory.awayTeamName}
            WINawayTeamScore={t.records.biggestVictory.awayTeamScore}

            LOSSdescription={t.records.heaviestDefeat.description}
            LOSSdate={t.records.heaviestDefeat.date}
            LOSSattendance={t.records.heaviestDefeat.attendance}
            LOSShomeTeamName={t.records.heaviestDefeat.homeTeamName}
            LOSShomeTeamscore={t.records.heaviestDefeat.homeTeamScore}
            LOSSawayTeamName={t.records.heaviestDefeat.awayTeamName}
            LOSSawayTeamScore={t.records.heaviestDefeat.awayTeamScore}

            SCOREdescription={t.records.highestScoring.description}
            SCOREdate={t.records.highestScoring.date}
            SCOREattendance={t.records.highestScoring.attendance}
            SCOREhomeTeamName={t.records.highestScoring.homeTeamName}
            SCOREhomeTeamscore={t.records.highestScoring.homeTeamScore}
            SCOREawayTeamName={t.records.highestScoring.awayTeamName}
            SCOREawayTeamScore={t.records.highestScoring.awayTeamScore}

            HIGHdescription={t.records.highestAttendance.description}
            HIGHdate={t.records.highestAttendance.date}
            HIGHattendance={t.records.highestAttendance.attendance}
            HIGHhomeTeamName={t.records.highestAttendance.homeTeamName}
            HIGHhomeTeamscore={t.records.highestAttendance.homeTeamScore}
            HIGHawayTeamName={t.records.highestAttendance.awayTeamName}
            HIGHawayTeamScore={t.records.highestAttendance.awayTeamScore}

            LOWdescription={t.records.lowestAttendance.description}
            LOWdate={t.records.lowestAttendance.date}
            LOWattendance={t.records.lowestAttendance.attendance}
            LOWhomeTeamName={t.records.lowestAttendance.homeTeamName}
            LOWhomeTeamscore={t.records.lowestAttendance.homeTeamScore}
            LOWawayTeamName={t.records.lowestAttendance.awayTeamName}
            LOWawayTeamScore={t.records.lowestAttendance.awayTeamScore}
        />
    })
}
</div>

</div>
)



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