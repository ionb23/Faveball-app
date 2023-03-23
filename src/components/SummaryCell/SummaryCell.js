import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './SummaryCell.css'





function SummaryCell(props) {

    const { club, leagueid, clubid, position, played, won, drawn, lost, goalDifference, points, } = props

    const pulledTeams = [localStorage.getItem('saved-teams')]

    const favTeam = localStorage.getItem('NewsInfo')


    // setStatus for changing fav icon color 
    const [status, setStatus] = useState(false);

    // SetClubFav for handling adding a club to favourite 
    const [clubFav, setClubFav] = useState({});

    const [savedTeams, setSavedTeams] = useState(pulledTeams)
    // Function that removes or adds team to local storage and 
    function iconClick(event) {


        const currentRow = event.target.parentNode;
        const clubname = currentRow.dataset.club;
        const clubid = currentRow.dataset.clubid;
        const leagueid = currentRow.dataset.leagueid;
        if (status === false) {


            setStatus(true);
            setClubFav({
                name: clubname,
                clubid: clubid,
                leagueid: leagueid
            });
            pulledTeams.push(clubFav)


            console.log(savedTeams)
            setSavedTeams(pulledTeams)
            // localStorage.setItem('saved-teams', JSON.stringify(pulledTeams));

        } else {

            setStatus(false);
            console.log(status)
            setClubFav({
                name: clubname,
                clubid: clubid,
                leagueid: leagueid
            });
            pulledTeams.pop(clubFav)
            setSavedTeams(pulledTeams)

            // localStorage.setItem('saved-teams', pulledTeams)


        }
    }



    {
        if (club === favTeam) {
            return (


                <tr data-club={club} className="league-table-fav" data-clubid={clubid} data-leagueid={leagueid} key={club} onClick={iconClick} >
                    <th key="position" scope="row">{position}</th>
                    <td className='px-4 text-center'>{club}
                        {/* <FontAwesomeIcon className={status ? "mx-4 text-start icon icon-active text-start" : "mx-4 text-start icon icon-inactive"} icon={faFutbol} id='football-icon' /> */}
                    </td>
                    <td key="played">{played}</td>
                    <td key="won">{won}</td>
                    <td>{drawn}</td>
                    <td>{lost}</td>
                    <td>{goalDifference}</td>
                    <td>{points}</td>
                </tr>
            )
        } else {
            return (


                <tr data-club={club} className="league-table" data-clubid={clubid} data-leagueid={leagueid} key={club} onClick={iconClick} >
                    <th scope="row">{position}</th>
                    <td className='px-4 text-center'>{club}
                        {/* <FontAwesomeIcon className={status ? "mx-4 text-start icon icon-active text-start" : "mx-4 text-start icon icon-inactive"} icon={faFutbol} id='football-icon' /> */}
                    </td>
                    <td >{played}</td>
                    <td >{won}</td>
                    <td>{drawn}</td>
                    <td>{lost}</td>
                    <td>{goalDifference}</td>
                    <td>{points}</td>
                </tr>
            )
        }
    }


}

export default SummaryCell