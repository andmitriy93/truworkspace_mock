import React, { useEffect, useState } from 'react';
import { departments } from '../mocks';
import DepartmentList from './departmentList';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Departments = () => {
  const [dep, setDep] = useState(departments);

  return (
    <Container>
      <Grid container spacing={3}>
        {dep.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={4}>
            <DepartmentList department={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Departments;
