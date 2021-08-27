import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'



const DepartmentList = ({props}) => {
  console.log(props);

  return ( 
    <div>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} alt="" />
      <p>{props.description}</p>
      {/* <p>{props.teams}</p> */}

      <NavLink to={`/projects/${props._id}`}>Projects</NavLink>
    </div>
   );
}
 
export default DepartmentList;
