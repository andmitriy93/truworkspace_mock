import React from 'react'
import { departments } from '../mocks';

const Projects = ({match}) => {
  console.log(match)
  const department = departments.find(dep => {
    return (match.params.id)
  }) 
  const projects = department.projects
  console.log(department)
  console.log(projects)

  return (
    <div>
      
    </div>
  );
}
 
export default Projects;