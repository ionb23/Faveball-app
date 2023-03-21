import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './SummaryCell.css'
import { icon } from '@fortawesome/fontawesome-svg-core'




function SummaryCell(props) {

    const { club, leagueid, clubid, position, played, won, drawn, lost, goalDifference, points, } = props

    const pulledTeams = [localStorage.getItem('saved-teams')]

    

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
            localStorage.setItem('saved-teams', JSON.stringify(pulledTeams));

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

            localStorage.setItem('saved-teams', pulledTeams)


        }



    }

    console.log(status)
    console.log(clubFav);



    return (
        <tr data-club={club} data-clubid={clubid} data-leagueid={leagueid} onClick={iconClick} >
            <th scope="row">{position}</th>
            <td className='px-4 text-center'><FontAwesomeIcon className={status ? "mx-4 text-start icon-active" : "mx-4 text-start icon-inactive"} icon={faFutbol} id='football-icon' />{club} </td>
            <td >{played}</td>
            <td >{won}</td>
            <td>{drawn}</td>
            <td>{lost}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
        </tr>
    )
}

export default SummaryCell