function SavedTeamsCard(props) {
    const { name, league, leaguePosition, currentPoints, goalsFor, goalsAgainst, goalDifference, newsArticle1, newsArticle2, newsArticle3, iconSrc } = props

    return (
        <>
            <div class="card">
                <h4>{name}</h4>
                <img src= {iconSrc} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Statistics</h5>
                        <p>League: {league}</p>
                        <p class="card-text">League Position: {leaguePosition}</p>
                        <p class="card-text">Current Points: {currentPoints}</p>
                        <p class="card-text">Goals For: {goalsFor}</p>
                        <p class="card-text">Goals Against: {goalsAgainst}</p>
                        <p class="card-text">Goals Difference: {goalDifference}</p>
                        <hr/>
                        <h5>News</h5>
                        <p class="card-text">{newsArticle1}</p>
                        <p class="card-text">{newsArticle2}</p>
                        <p class="card-text">{newsArticle3}</p>
                       
                    </div>
            </div>
        </>
    )
}

export default SavedTeamsCard