import AutoComplete from "../AutoComplete/TeamAutoComplete.js";
import React from "react";

function SavedTeamsCard(props) {
  return (
    <>
      <div className="card-group me-5 ms-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.teamName}</h5>
            <p className="card-text">Home ground: {props.groundName}</p>
            <p className="card-text">Capacity: {props.groundCapacity} people</p>
            <p className="card-text">League: {props.leagueName}</p>
            <p className="card-text">League position: {props.leaguePosition}</p>
            <p className="card-text">Games played: {props.leaguePlayed}</p>
            <p className="card-text">Current points: {props.leaguePoints}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Records</h5>
            <p className="card-text">{props.WINdescription}:</p>
            <p className="card-text">
              {props.WINhomeTeamName} ({props.WINhomeTeamscore}) - ({props.WINawayTeamScore}) {props.WINawayTeamName}
            </p>
            <p className="card-text">
              Date: {props.WINdate}. Attendance: {props.WINattendance}
            </p>
            <p className="card-text">{props.LOSSdescription}:</p>
            <p className="card-text">
              {props.LOSShomeTeamName} ({props.LOSShomeTeamscore}) - ({props.LOSSawayTeamScore}) {props.LOSSawayTeamName}
            </p>
            <p className="card-text">
              Date: {props.LOSSdate}. Game attendance: {props.LOSSattendance}
            </p>
            <p className="card-text">{props.SCOREdescription}:</p>
            <p className="card-text">
              {props.SCOREhomeTeamName} ({props.SCOREhomeTeamscore}) - ({props.SCOREawayTeamScore}) {props.SCOREawayTeamName}
            </p>
            <p className="card-text">
              Date: {props.SCOREdate}. Game attendance: {props.SCOREattendance}
            </p>
            <p className="card-text">{props.HIGHdescription}:</p>
            <p className="card-text">
              {props.HIGHhomeTeamName} ({props.HIGHhomeTeamscore}) - ({props.HIGHawayTeamScore}) {props.HIGHawayTeamName}
            </p>
            <p className="card-text">
              Date: {props.HIGHdate}. Game attendance: {props.HIGHattendance}
            </p>
            <p className="card-text">{props.LOWdescription}:</p>
            <p className="card-text">
              {props.LOWhomeTeamName} ({props.LOWhomeTeamscore}) - ({props.LOWawayTeamScore}) {props.LOWawayTeamName} 
            </p>
            <p className="card-text">
              Date: {props.LOWdate}. Game attendance: {props.LOWattendance}
            </p>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Top Goalscorer</h5>
            <p className="card-text">
              {props.firstName} {props.lastName}
            </p>
            <p className="card-text">Goals scored: {props.goals}</p>
          </div>
        </div>
      </div>
      {/* remove bottom border rounding from team card and remove top border rounding from the comparison div below*/}
      <div className="card card-footer me-5 ms-5 d-flex flex-row">
        <small className="text-muted">
          Choose a team to compare your favourite team against:
        </small>
        <AutoComplete />
      </div>

      {/* <div className="card">
                <h4>{name}</h4>
                <img src={iconSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <p>League: {league}</p>
                    <p className="card-text">League Position: {leaguePosition}</p>
                    <p className="card-text">Current Points: {currentPoints}</p>
                    <p className="card-text">Goals For: {goalsFor}</p>
                    <p className="card-text">Goals Against: {goalsAgainst}</p>
                    <p className="card-text">Goals Difference: {goalDifference}</p>
                    <hr />
                    <h5>News</h5>
                    <p className="card-text">{newsArticle1}</p>
                    <p className="card-text">{newsArticle2}</p>
                    <p className="card-text">{newsArticle3}</p>
                </div>
            </div> */}
    </>
  );
}

export default SavedTeamsCard;
