import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import GenerateCards from './GenerateCards';
import GenerateNews from './GenerateNews'
import {Navigate} from 'react-router-dom'
import './style.css';



function HomePage() {
    const teamName = localStorage.getItem('NewsInfo');
 
    
    
    


 return (
        <section id="homepage">
             {localStorage.getItem('Fav team') ? <Navigate to="/home" replace /> : <Navigate to="/" replace />}
            <div id="homepage-wrapper">
                <Header />

                <h2 className="text-center display-4 mb-5">{teamName}</h2>
                <GenerateCards/>
                <h2 className="text-center display-4 m-5">Latest...</h2>
                <GenerateNews
                    teamName={teamName} />
                
                <Footer />
               
            </div>
        </section>)
}
export default HomePage