import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './SummaryCell.css'
import { icon } from '@fortawesome/fontawesome-svg-core'




function SummaryCell(props) {

    const { club, leagueid, clubid, position, played, won, drawn, lost, goalDifference, points, } = props



    // setStatus for changing fav icon color 
    const [status, setStatus] = useState(false);

    // SetClubFav for handling adding a club to favourite 
    const [clubFav, setClubFav] = useState({});

    const [savedTeams, setSavedTeams] = useState()
    // Function that removes or adds team to local storage and 
    function iconClick(event) {


        const currentRow = event.target.parentNode;
        const clubname = currentRow.dataset.club;
        const clubid = currentRow.dataset.clubid;
        const leagueid = currentRow.dataset.leagueid;
        if (status === false) {
            const localSavedTeams = [localStorage.getItem('saved-teams')]

            setStatus(true);
            setClubFav({
                name: clubname,
                clubid: clubid,
                leagueid: leagueid
            });

            
            console.log(savedTeams)

            localStorage.setItem('saved-teams', JSON.stringify(clubFav));

        } else {

            setStatus(false);
            console.log(status)
            setClubFav({
                name: clubname,
                clubid: clubid,
                leagueid: leagueid
            });

            localStorage.removeItem('saved-teams', clubFav)


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