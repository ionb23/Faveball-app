import AutoComplete from "../AutoComplete/AutoComplete.js";


function SavedTeamsCard(props) {
    const { name, league, leaguePosition, currentPoints, goalsFor, goalsAgainst, goalDifference, newsArticle1, newsArticle2, newsArticle3, iconSrc } = props

    return (
        <>
            <div className="card-group me-5 ms-5">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Arsenal</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Records</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Top Goalscorer</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
            {/* remove bottom border rounding from team card and remove top border rounding from the comparison div below*/}
            <div className="card card-footer me-5 ms-5">
                <small className="text-muted">Choose a team to compare your favourite team against:</small>
                <AutoComplete />
            </div>


            <div className="card">
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
            </div>



        </>
    )
}

export default SavedTeamsCard