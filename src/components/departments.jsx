import React, { useEffect, useState } from 'react';
import { departments } from '../mocks';
import DepartmentList from './departmentList';
import { Container } from '@material-ui/core';

const Departments = () => {
  const [dep, setDep] = useState(departments);

  return (
    <Container>
      {
        dep.map(item => {
          return <DepartmentList props={item} key={item.id}/>
        })
      }


    </Container>
  ) 
};

export default Departments;
