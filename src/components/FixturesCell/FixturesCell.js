import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './FixturesCell.css'
import { icon } from '@fortawesome/fontawesome-svg-core'



// Function to generate table row for fixtures part of summary page 
function FixturesCell(props) {

    const { date, homeclub, awayclub, leagueid, homeclubid, awayclubid} = props



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
        <tr data-homeclub={homeclub} data-awayclub={awayclub} data-homeclubid={homeclubid} data-awayclubid={awayclubid} data-leagueid={leagueid} onClick={iconClick} >
            <th scope="row">{date}</th>
            <td className='px-4 text-center'><FontAwesomeIcon className={status ? "mx-4 text-start icon-active" : "mx-4 text-start icon-inactive"} icon={faFutbol} id='football-icon' />{homeclub}</td>
            <td >-</td>
            <td className='px-4 text-center'><FontAwesomeIcon className={status ? "mx-4 text-start icon-active" : "mx-4 text-start icon-inactive"} icon={faFutbol} id='football-icon' />{awayclub}</td>
            
        </tr>
    )
}

export default FixturesCell