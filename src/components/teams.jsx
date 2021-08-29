import { Container, Typography } from '@material-ui/core';
import { departments } from '../mocks';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';
import { createTheme } from '@material-ui/system';

const Theme = createTheme()

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
  },
  avatars: {
    display: 'flex',
    margin: 3,
  },
  small: {
    width: Theme.spacing(3),
    height: Theme.spacing(3)
  },
}));

const defaultProps = {
  m: 1,
  // border: 1,
  style: { width: '100%', height: '2rem' },
};

const Teams = ({ match }) => {
  const classes = useStyles();
  let department = departments.find((dep) => dep._id === match.params.id);

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
    <Container className={classes.wrapper}>
      <Card className={classes.root} elevation={3}>
        <CardHeader title={`${teams.title}`} />
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
              <Typography component='span' color='primary'>
                Title:
              </Typography>
              <Typography pl={10} component='h2' variant='h6'>
                {teams.title}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>
                Description:
              </Typography>
              <Typography pl={4} color='warning.main'>
                {teams.description}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>
                Department:
              </Typography>
              <Typography pl={4}>{department.title}</Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>
                Projects:
              </Typography>
              <Typography pl={7}>{project}</Typography>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>
                People:
              </Typography>
              <Box display='flex' flexDirection="row" ml={8}>
                {people}
              </Box>
            </Box>

            <Box display='flex' alignItems='center' {...defaultProps}>
              <Typography component='span' color='primary'>
                Owner:
              </Typography>
              <Typography pl={9} color="warning.main">{teams.owner}</Typography>
            </Box>

          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Teams;
