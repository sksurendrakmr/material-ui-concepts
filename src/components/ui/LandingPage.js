import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core'
import Lottie from 'react-lottie'
import animationData from '../../animations/landinganimation/data'
import ButtonArrow from './ButtonArrow'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileIcon from '../../assets/mobileIcon.svg'
import websitesIcon from '../../assets/websiteIcon.svg'
import revolutionBackground from '../../assets/repeatingBackground.svg'
import infoBackground from '../../assets/infoBackground.svg'
const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: '50rem',
    minWidth: '21rem',
    marginTop: '2rem',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem',
    },
  },
  estimateButton: {
    height: 45,
    width: 145,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    marginRight: 20,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1rem',
  },
  learnHeroButton: {
    ...theme.typography.learnButton,
    fontSize: '0,9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2rem',
    },
  },
  mainContainer: {
    marginTop: '5rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  textContainer: {
    minWidth: '21.5rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    color: theme.palette.common.orange,
  },
  icon: {
    marginLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12rem',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    padding: '5rem',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
      paddingBottom: '3rem',
      paddingRight: 0,
      paddingLeft: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  },
}))

const LandingPage = () => {
  const classes = useStyle()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/**Hero Block */}
        <Grid container alignItems='center' direction='row'>
          <Grid item sm className={classes.textContainer}>
            <Typography variant='h2' align='center'>
              Bring West Coast Technology <br /> to the MidWest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnHeroButton}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/**-----------Services Block ----------*/}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '2rem',
              textAlign: matchesSM ? 'center' : undefined,
            }}>
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1'>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celeberation.</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/**-----------IOS/Android Block ----------*/}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}>
            <Typography variant='h4'>IOS/Android App development</Typography>
            <Typography variant='subtitle1'>
              Extend Functionality. Extend Access. Increase Engangement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5rem' }}>
            <img
              className={classes.icon}
              alt='custom software icon'
              src={mobileIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/**-----------Websites Block ----------*/}
      <Grid
        container
        className={classes.serviceContainer}
        justify={matchesSM ? 'center' : undefined}>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '2rem',
            textAlign: matchesSM ? 'center' : undefined,
          }}>
          <Typography variant='h4'>Websites Development</Typography>
          <Typography variant='subtitle1'>
            Reach More. Discover More. Sell More
          </Typography>
          <Typography variant='subtitle1'>
            Optimized for search engines, built for speed
          </Typography>
          <Button variant='outlined' className={classes.learnButton}>
            <span style={{ marginRight: 10 }}> Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt='custom software icon'
            src={websitesIcon}
          />
        </Grid>
      </Grid>
      <Grid item>
        {/**The Revolution Block */}
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ height: '80rem' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant='h3'>The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button variant='outlined' className={classes.learnButton}>
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container style={{ height: '70rem' }} alignItems='center'>
          <Grid
            item
            container
            style={{ position: 'absolute' }}
            direction={matchesXS ? 'column' : 'row'}>
            <Grid item sm style={{ marginLeft: '2rem' }}>
              <Grid Container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal</Typography>
                <Button
                  variant='outlined'
                  className={classes.learnButton}
                  style={{ borderColor: 'white', color: 'white' }}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={10} height={10} fill='white' />
                </Button>
              </Grid>
            </Grid>
            <Grid item sm style={{ marginRight: '2rem', textAlign: 'right' }}>
              <Grid Container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>Hey</Typography>
                <Button
                  variant='outlined'
                  className={classes.learnButton}
                  style={{ borderColor: 'white', color: 'white' }}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={10} height={10} fill='white' />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
