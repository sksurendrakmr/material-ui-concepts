import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import footerAdornment from '../../assets/Footer Adornment.svg'
import { Link } from 'react-router-dom'
const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25rem',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15rem',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontSize: '0.75rem',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3rem',
  },
}))

const Footer = () => {
  const classes = useStyle()
  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to='/'>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to='/services'>
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/customSoftware'>
              Custom Software Developement
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/mobileapps'>
              Mobile Developement
            </Grid>
            <Grid item className={classes.link} component={Link} to='/websites'>
              Websites Developement
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'>
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'>
              Visions
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'>
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to='/revolution'>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to='/about'>
              About us
            </Grid>
            <Grid item className={classes.link} component={Link} to='/about'>
              History
            </Grid>
            <Grid item className={classes.link} component={Link} to='/about'>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to='/contact'>
              Contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={footerAdornment} alt='footer' className={classes.adornment} />
    </footer>
  )
}

export default Footer
