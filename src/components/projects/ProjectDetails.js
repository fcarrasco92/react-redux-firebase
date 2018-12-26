import React from 'react'

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at iste commodi itaque odio placeat quas adipisci, doloremque earum sequi illo minima inventore quaerat recusandae architecto corrupti magnam a totam.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Felipe Carrasco</div>
          <div>2nd September, 2am</div>
        </div>
        </div>
      </div>
    
  )
}

export default ProjectDetails
