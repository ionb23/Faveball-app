import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePageCard from '../HomeCard1/HomeCard1';
import { useState, useEffect } from 'react';
import GenerateNews from './GenerateNews'
import './style.css';
import { Link} from 'react-router-dom';



function HomePage() {
    //setting states
    const [state, setState] = useState({
        stadium: 'stadium',
        capacity: 'capacity',
        teamName: 'TeamName',
        leagueName: 'League name',
        currentPosition: 'current position',
        points: 'current points',
        goals: 'goals in current league',
 });

    
    
    
    
    //using effect for all my api calls
    useEffect(() => {
        fetchLeague()
        fetchTeam()
        fetchStats()
    },[state, setState])
 

    
    //assigning my teams number
    const myTeamId = localStorage.getItem('FavTeam ID');
    const teamName = localStorage.getItem('FavTeam Name');
    //function to fetch team
    function fetchTeam() {
        const url = `https://football-web-pages1.p.rapidapi.com/team.json?team=${myTeamId}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1543a61f73msh4be7f0c4722fae6p15f9c6jsnb197362fcbab',
                'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setState({
                    ...state, stadium: json.team.ground, capacity: json.team.capacity, teamName: json.team.name
                })

            })
            .catch(err => console.error('error:' + err));
    }
    //function to fetch league atm
    function fetchLeague() {
        const url = `https://football-web-pages1.p.rapidapi.com/league-progress.json?team=${myTeamId}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1543a61f73msh4be7f0c4722fae6p15f9c6jsnb197362fcbab',
                'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const currentPosition = json['league-progress'].progress.length - 1
                setState({ ...state, position: json['league-progress'].progress[currentPosition].position, points: json['league-progress'].progress[currentPosition].points })
            })
            .catch(err => console.error('error:' + err));
    }
    //function to fetch stats
    function fetchStats() {
        const url = `https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=${myTeamId}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1543a61f73msh4be7f0c4722fae6p15f9c6jsnb197362fcbab',
                'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setState({ ...state, leagueName: json['league-table'].competition.name, })
            })
            .catch(err => console.error('error:' + err));
    }



 return (
        <section id="homepage">
            <div id="homepage-wrapper">
                <Header />

                <h2 className="text-center display-4 mb-5">{teamName}</h2>

                <div className="d-flex flex-wrap container-fluid justify-content-evenly">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='Stadium'
                            infoName='The stadium name is '
                            info={state.stadium}
                            infoName2='Capacity: '
                            info2={state.capacity}
                            link= {<a className="homecardButton" href="wwww.google.com">team web</a>}/>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='League'
                            infoName='The League name is '
                            info={state.leagueName}
                            infoName2='Current position: '
                            info2={state.currentPosition}
                            link= {<Link  to="/saved/*" className="homecardButton" exact>Compare</Link>}/>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='Stats'
                            infoName='Points in current league '
                            info={state.points}
                            infoName2='Goals in current league: '
                            info2='45'
                            link= {<Link className="homecardButton" to="/live" exact>Go to stats</Link>}/>
                    </div>
                </div>

                <GenerateNews
                    teamNAme={teamNameNews} />

                <Footer />
               
            </div>
        </section>)
}
export default HomePage