import SavedTeamsCard from "../SavedTeamsCard/SavedTeamsCard";

function SavedTeamPage() {
   
    return (

        <Container id="projects-section">
          <h1 id="projects-title">Projects</h1>
    
          {projects.map((project, index) => {
            // const image = require(screenshotLink)
    
            return (
    
              <SavedTeamsCard
                key={index}
                name={project.name}
                description={project.description}
                deployedLink={project.deployedApp}
                repoLink={project.githubRepo}
                screenshot={project.screenshot} />
            );
            
          })}
    
        </Container>
    
      )



}
export default SavedTeamPage