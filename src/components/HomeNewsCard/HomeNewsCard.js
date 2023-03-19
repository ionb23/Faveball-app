function HomeNewsCard({url,title,snippet}){
    return<div className="card homepageNewscard m-3 col-3" >
    <img src={url} className="img-fluid rounded-start" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
            <p className="card-text">{snippet}</p>
      <a href="#" className="btn newsLinks">Full read</a>
    </div>
    </div>
}
export default HomeNewsCard


