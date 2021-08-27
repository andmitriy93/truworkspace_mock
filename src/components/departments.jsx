import React, { useEffect, useState } from 'react';
import { departments } from '../mocks';
import DepartmentList from './departmentList';

const Departments = () => {
  const [dep, setDep] = useState(departments);


  return (
    <div>
      {
        dep.map(item => {
          return <DepartmentList props={item} key={item.id}/>
        })
      }


    </div>
  ) 
};

export default Departments;
