import { Card, CardMedia, CardHeader, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Box } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const DepartmentList = ({ department }) => {
  console.log(department);
  return (
    <Card elevation={3}>
      <CardHeader
        action={
            <Link href={`/departments/${department._id}`} variant='body1'>
              <ArrowForwardIcon fontSize="medium" color="primary.main" />
            </Link>
        }
        title={department.title}
      />

      <CardMedia
        component='img'
        style={{ height: 200, width: '100%', paddingTop: '1%' }}
        src={department.imageUrl}
      ></CardMedia>

      <CardContent>
        <Typography color='textSecondary'>{department.description}</Typography>
        <Box component='span'>
          <Link href={`/departments/${department._id}`} variant='body1'>
            Teams
          </Link>
        </Box>
        <Box component='span' pl={27}>
          <Link href={`/projects/${department._id}`} variant='body1'>
            Projects
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DepartmentList;
