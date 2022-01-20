import './App.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'
import placeholderRocket from './rocket_placeholder.jpeg'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import {useLounchesDetailed} from './api'
import Header from './Header'

function App() {
  const {data, loading, error} = useLounchesDetailed()
  const {launches} = data
  if (loading) return <p>Loading... </p>
  if (error) return <h2>Error</h2>

  return (
    <div className="App">
      <Header />
      <Container>
        <Box sx={{flexGrow: 1}}>
          <Grid
            container
            spacing={{xs: 2, md: 3}}
            columns={{xs: 2, sm: 8, md: 12}}
          >
            {launches.map(
              ({
                links: {article_link, flickr_images},
                rocket,
                mission_name,
                launch_success,
                details,
                id,
              }) => (
                <Grid item xs={3} sm={4} md={4} key={id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        flickr_images.length > 0
                          ? flickr_images[0]
                          : placeholderRocket
                      }
                      alt={rocket.rocket_name}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          height: 80,
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {mission_name}
                        </Typography>
                        <Chip
                          label={launch_success ? 'Success' : 'Failed'}
                          color={launch_success ? 'success' : 'error'}
                        />
                      </Box>
                      <Box
                        sx={{
                          minHeight: 200,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          // textOverflow="ellipsis"
                          overflow="auto"
                          height={200}
                        >
                          {details ? (
                            details
                          ) : (
                            <Alert severity="warning">
                              <AlertTitle>Information not Available</AlertTitle>
                              This is a warning alert —{' '}
                              <strong>check it out!</strong>
                            </Alert>
                          )}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <CardActions>
                        <Link href={article_link} underline="hover">
                          Learn more
                        </Link>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ),
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default App
