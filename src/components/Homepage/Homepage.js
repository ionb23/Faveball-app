import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePageCard from '../HomeCard1/HomeCard1';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
import GenerateNews from './AxiosCall'
import './style.css';

/*
const options = {
  method: 'GET',
  url: 'https://football-web-pages1.p.rapidapi.com/team.json',
  params: {team: '1'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
  }
};*/





function HomePage() {
    const [state, setState] = useState({
        stadium: 'stadium',
        capacity: 'capacity',
        teamName: 'TeamName',
    });
    //getting data from football web pages for information
    /* useEffect(() =>{
     axios.request(options).then(function (response) {
        console.log(response.data);
       setState({...state,
       stadium:'staddm',
       capacity: 'capacity',
       teamName: 'TeamName'},)
    }).catch(function (error) {
        console.error(error);
    })} );*/

    //GETTING DATA FOR NEWS
    /* const [news, setNews] = useState({
         //for card one
         imgURLOne: 'https://th.bing.com/th/id/OIP.G12T_MUuIKWw7XklDIqzhwHaE8?pid=ImgDet&rs=1',
         titleOne: 'title',
         snippetOne: 'snippesnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippett',
         //for card two
         imgURLTwo: 'https://th.bing.com/th/id/OIP.G12T_MUuIKWw7XklDIqzhwHaE8?pid=ImgDet&rs=1',
         titleTwo: 'title',
         snippetTwo: 'snisnippetsntsnippetsniptsnippetsnipippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetppet',
         //for card three
         imgURLThree: 'https://th.bing.com/th/id/OIP.G12T_MUuIKWw7XklDIqzhwHaE8?pid=ImgDet&rs=1',
         titleThree: 'title',
         snippetThree: 'snsnippetsnippetsnippetsnippetsniptsnippetsniptsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetsnippetippet'
     })*/
 
 
 
  

    return (
        <section id="homepage">
            <div id="homepage-wrapper">
                <Header />

                <h2 className="text-center display-4 mb-5">{'state.teamName'}</h2>

                <div className="d-flex container-fluid justify-content-evenly">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='Stadium'
                            infoName='The stadium name is '
                            info={"state.stadium"}
                            infoName2='Capacity: '
                            info2={"state.capacity"} />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='League'
                            infoName='The League name is '
                            info='league name ill pull'
                            infoName2='Current position: '
                            info2='position that ill pull' />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <HomePageCard
                            title='Stats'
                            infoName='Points in current league '
                            info='42389568'
                            infoName2='Goals in current league: '
                            info2='45' />
                    </div>
                </div>

                <GenerateNews />

                <Footer />
            </div>
        </section>)
}
export default HomePage