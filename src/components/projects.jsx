import { departments } from '../mocks';
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

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

const defaultProps = {
  m: 1,
  // border: 1,
  style: { width: '100%', height: '2rem' },
};

const Projects = ({ match }) => {
  const classes = useStyles();

  let department = departments.find((dep) => dep._id === match.params.id);

  const projects = department.projects[0];

  return (
    <Container className={classes.wrapper}>
      <Card className={classes.root} elevation={3}>
        <CardHeader title={`${department.title}` + ' ' + 'Projects'} />

        <Box display='flex' flexDirection='row'>
          <Box pl={2} py={2}>
            <CardMedia
              component='img'
              style={{ height: 250, width: 250, paddingTop: '1%' }}
              src={department.imageUrl}
            ></CardMedia>
          </Box>

          <Box pl={2} py={2} justifyContent='center'>
            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>Title:</Typography>
              <Typography pl={10} component='h2' variant='h6'>
                {projects.title}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>Description:</Typography>
              <Typography pl={4} color="warning.main">
                {projects.description}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>Status:</Typography>
              <Typography pl={9}>
                {projects.status}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>Percent Complete:</Typography>
              <Typography pl={2}>
                {projects.percentComplete}%
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>Deadline:</Typography>
              <Typography pl={7}>
              {projects.deadline}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Projects;
