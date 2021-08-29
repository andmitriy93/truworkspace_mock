import { departments } from '../mocks';
import { makeStyles } from '@material-ui/styles';
import { Container, Paper, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { CardMedia, CardHeader, Card } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { createTheme } from '@material-ui/system';

const Theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    paddingTop: 50,
    // paddingBottom: 50,
  },
  wrapper: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: '2%',
  },
  paper: {
    padding: 10,
  },
  box: {
    borderRadius: '20%',
  },
  avatars: {
    display: 'flex',
    margin: 3,
  },
  small: {
    width: Theme.spacing(3),
    height: Theme.spacing(3),
  },
}));

const defaultProps = {
  border: 1,
  style: { height: '100%' },
};

const DepartmentDetails = ({ match }) => {
  const classes = useStyles();
  let department = departments.find((dep) => dep._id === match.params.id);
  const projects = department.projects[0];
  let teams = department.teams[0];
  let project = teams.projects[0].title;
  let people = teams.people.map((p) => {
    return (
      <div className={classes.avatars}>
        <Avatar className={classes.small}>{p}</Avatar>
      </div>
    );
  });

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Box
        display='flex'
        className={classes.wrapper}
        alignItems='flex-start'
        flexWrap='wrap'
        {...defaultProps}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          alignSelf='flex-start'
        >
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h3' component='h2'>
              {department.title}
            </Typography>
          </Paper>
        </Box>

        <Box
          pl={2}
          py={2}
          display='flex'
          justifyItems='center'
          alignSelf='flex-end'
          position='relative'
          left='45%'
        >
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h5' component='h6'>
              {department.description}
            </Typography>
          </Paper>
        </Box>

        <Box pl={2} py={2} display='flex' justifyItems='center'>
          <Paper elevation={3} className={classes.paper}>
            <CardMedia
              component='img'
              style={{ height: 300, width: '100%', paddingTop: '1%' }}
              src={department.imageUrl}
            ></CardMedia>
          </Paper>
        </Box>

        <Box>
          <Paper elevation={3} className={classes.paper}>
            <CardHeader title='Projects' />
            <Box display='flex' alignItems='center' >
              <Typography component='span' color='primary'>
                Description:
              </Typography>
              <Typography pl={4} color='warning.main'>
                {projects.description}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' >
              <Typography component='span' color='primary'>
                Status:
              </Typography>
              <Typography pl={9}>{projects.status}</Typography>
            </Box>

            <Box display='flex' alignItems='center' >
              <Typography component='span' color='primary'>
                Percent Complete:
              </Typography>
              <Typography pl={2}>{projects.percentComplete}%</Typography>
            </Box>

            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Deadline:
              </Typography>
              <Typography pl={7}>{projects.deadline}</Typography>
            </Box>
          </Paper>
        </Box>

        <Box style={{width: '60%'}} position="relative" left={50}>
          <Paper elevation={3} className={classes.paper}>
            <CardHeader title='Teams' />
            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Title:
              </Typography>
              <Typography pl={10} component='h2' variant='h6'>
                {teams.title}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Description:
              </Typography>
              <Typography pl={4} color='warning.main'>
                {teams.description}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Department:
              </Typography>
              <Typography pl={4}>{department.title}</Typography>
            </Box>

            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Projects:
              </Typography>
              <Typography pl={7}>{project}</Typography>
            </Box>

            <Box display='flex' alignItems='center' >
              <Typography component='span' color='primary'>
                People:
              </Typography>
              <Box display='flex' flexDirection='row' ml={8}>
                {people}
              </Box>
            </Box>

            <Box display='flex' alignItems='center'>
              <Typography component='span' color='primary'>
                Owner:
              </Typography>
              <Typography pl={9} color='warning.main'>
                {teams.owner}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default DepartmentDetails;
