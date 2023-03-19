import {Link} from 'react-router-dom'
import TeamAutoComplete from "../AutoComplete/TeamAutoComplete";



function Welcome() {
const saveMyFavTeam =(item)=>localStorage.setItem('Fav team', item.name);


    return <section style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504016798967-59a258e9386d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')", backgroundSize: "cover", backgrounRepeat: "norepeat", position: "fixed", width: "100%", height: "100%" }}>
        <article style={{ backgroundImage: "linear-gradient(0deg, transparent 0%, #05110090  10%, #051100 50%)", backgroundSize: "cover", backgroundRepeat: "norepeat", position: "fixed", width: "100%", height: "100%" }}>
            <div className="mx-auto my-5 w-25 h-75">
                <h1>hi</h1>
                <hr />
                <h2>Let's get started by picking your favorite football team!</h2>
                <TeamAutoComplete whichPage = {saveMyFavTeam } />
              <Link className="select-button" type="button" to="/home">click</Link>
            </div>
        </article>
    </section>
}
export default Welcome
//  <button onClick={/*() => localStorage.setItem('Fav team', favTeam)*/}>Lets start</button>
