import { NavLink } from 'react-router-dom';
import { Card, CardMedia, CardHeader, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const DepartmentList = ({ department }) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={department.title}
        />

        <CardMedia
          component='img'
          style={{ height: 200, width: '100%', paddingTop: '1%', }}
          src={department.imageUrl}
        ></CardMedia>

        <CardContent>
          <Typography variant="body2">
            {department.description}
          </Typography>
        </CardContent>
        <NavLink to={`/departments/${department._id}`}>Teams</NavLink>
        <NavLink to={`/departments/${department._id}`}>Projects</NavLink>
      </Card>
    </div>
  );
};

export default DepartmentList;
