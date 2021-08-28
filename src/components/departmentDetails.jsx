import React from 'react'
import { departments } from '../mocks';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    maxHeight: '70%',
  },
  wrapper: {
    paddingTop: 100,
    paddingBottom: 200,
    paddingLeft: 150,
    paddingRight: 50,
  }

}));

const DepartmentDetails = ({match}) => {
  const classes = useStyles();

  let department = departments.find((dep) => dep._id === match.params.id);



  console.log(department)
  return ( 
    // <div>Department Details {match.params.id}</div>
    <div>
      <p>{department.title}</p>
    </div>
   );
}
 
export default DepartmentDetails;