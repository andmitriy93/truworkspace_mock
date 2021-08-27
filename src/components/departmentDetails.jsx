import React from 'react'
import { departments } from '../mocks';

const DepartmentDetails = ({match}) => {
  const department = departments.find(dep => {
    return (match.params.id)
  }) 


  console.log(department)
  return ( 
    // <div>Department Details {match.params.id}</div>
    <div>
      <p>{department.title}</p>
    </div>
   );
}
 
export default DepartmentDetails;