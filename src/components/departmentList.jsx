import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 100,
    height: 100,
  }
})

const DepartmentList = ({props}) => {
  console.log(props);
  const classes = useStyles();

  return ( 
    <Container>
      <Typography variant="h6" component="h2">
        {props.title}
      </Typography>
      <p>{props.description}</p>
      <NavLink to={`/department/${props._id}`}>Teams</NavLink>
      <NavLink to={`/department/${props._id}`}>Projects</NavLink>
      <img className={classes.img} src={props.imageUrl} alt="" />
    </Container>
   );
}
 
export default DepartmentList;
