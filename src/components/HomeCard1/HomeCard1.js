function HomeCard1(props) {
    const { stadiumName, capacity, stadiumImage } = props

    return (
        <>
            <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Stadium Name: {stadiumName}</p>
                    <p className="card-text">Capacity: {capacity}</p>
                </div>
            </div>
        </>
    )
}