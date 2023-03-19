import './SummaryCard.css'
import {useState} from 'react'

function SummaryCard(props) {
    const { league, children } = props

    const [tabState, setTabState] = useState(false)

    const handleTabClick = () => {
        if(tabState === false) {
            setTabState(true)
        } else if (tabState === true) {
            setTabState(false)
        }
    }

    return (
        <div className="container">
            <div className="card summary-card">
                <ul onClick={handleTabClick} className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className={tabState ? 'nav-link' : 'nav-link active'} aria-current="page" href="#">Table</a>
                    </li>
                    <li className="nav-item">
                        <a className={tabState ? 'nav-link active' : 'nav-link'} href="#">Fixtures</a>
                    </li>
                </ul>
                <h3>{league}</h3>
                <div className='card-body'>
                    <table className={tabState ? 'd-none' : 'table table-hover'}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th className='text-center' scope="col">Club</th>
                                <th scope="col">Played</th>
                                <th scope="col">Won</th>
                                <th scope="col">Drawn</th>
                                <th scope="col">Lost</th>
                                <th scope="col">Goal Diff.</th>
                                <th scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                    <table className={tabState ? 'table table-hover' : 'd-none'}>
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th className='text-center' scope="col">Home Club</th>
                                <th scope="col">Away Club</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default SummaryCard
