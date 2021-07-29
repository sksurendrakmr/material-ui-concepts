import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
    },
  },
  logo: {
    height: '7rem',
    [theme.breakpoints.down('md')]: {
      height: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    marginRight: '25px',
    marginLeft: '50px',
    borderRadius: '50px',
    height: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
}))

const Header = (props) => {
  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0)
  const [openMenu, setOpenMenu] = useState(false) //visibility of the menu
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  //this state stores whichever component we clicked on and where
  //we want the menu to be rendered.
  //so here this state is going to contain the services
  //tab where the menu will be rendered

  //anchorEl tells  the menu where to show itself on the screen and which
  //component to latch on to on the DOM

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile Application Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Websites Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ]

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ]
  useEffect(() => {
    ;[...routes, ...menuOptions].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break
        default:
          break
      }
    })
    // switch (window.location.pathname) {
    //   case '/':
    //     if (value !== 0) {
    //       setValue(0)
    //     }
    //     break
    //   case '/services':
    //     if (value !== 1) {
    //       setValue(1)
    //       setSelectedIndex(0)
    //     }
    //     break
    //   case '/customsoftware':
    //     if (value !== 1) {
    //       setValue(1)
    //       setSelectedIndex(1)
    //     }
    //     break
    //   case '/mobileapps':
    //     if (value !== 1) {
    //       setValue(1)
    //       setSelectedIndex(2)
    //     }
    //     break
    //   case '/websites':
    //     if (value !== 1) {
    //       setValue(1)
    //       setSelectedIndex(3)
    //     }
    //     break
    //   case '/revolution':
    //     if (value !== 2) {
    //       setValue(2)
    //     }
    //     break
    //   case '/about':
    //     if (value !== 3) {
    //       setValue(3)
    //     }
    //     break
    //   case '/contact':
    //     if (value !== 4) {
    //       setValue(4)
    //     }
    //     break
    //   case '/estimate':
    //     if (value !== 5) {
    //       setValue(5)
    //     }
    //     break
    //   default:
    //     break
    // }
  }, [value, routes, menuOptions, selectedIndex])

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
    //e.currentTarget=>contain the element that just been clicked
    //when we pass it to setAnchorEl ==> tell menu where we want to be rendered
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const tabs = (
    <React.Fragment>
      <Tabs
        indicatorColor='primary'
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}>
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
        {/* <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onMouseOver={(e) => handleClick(e)}
          className={classes.tab}
          component={Link}
          to='/services'
          label='Services'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/revolution'
          label='The Revolution'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/about'
          label='About us'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/contact'
          label='Contact us'
        /> */}
      </Tabs>
      <Button
        component={Link}
        to='/estimate'
        color='secondary'
        variant='contained'
        className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        onClose={handleClose}>
        {/* <MenuItem
              onClick={() => {
                handleClose()
                setValue(1)
              }}
              classes={{ root: classes.menuItem }}
              component={Link}
              to='/customsoftware'>
              Custom Software Development
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                setValue(1)
              }}
              classes={{ root: classes.menuItem }}
              component={Link}
              to='/mobileapps'>
              Mobile App Development
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                setValue(1)
              }}
              classes={{ root: classes.menuItem }}
              component={Link}
              to='/websites'>
              Website Development
            </MenuItem> */}
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, index)
              setValue(1)
              handleClose()
            }}
            selected={index === selectedIndex && value === 1}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}>
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.activeIndex)
              }}
              // selected={value === route.activeIndex}
              className={classes.drawerItem}
              component={Link}
              to={route.link}>
              <ListItemText disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}
          {/* <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false)
              setValue(0)
            }}
            component={Link}
            selected={value === 0}
            to='/'>
            <ListItemText
              disableTypography
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false)
              setValue(1)
            }}
            component={Link}
            selected={value === 1}
            to='/services'>
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false)
              setValue(2)
            }}
            component={Link}
            selected={value === 2}
            to='/revolution'>
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false)
              setValue(3)
            }}
            component={Link}
            selected={value === 3}
            to='/about'>
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false)
              setValue(4)
            }}
            component={Link}
            selected={value === 4}
            to='/contact'>
            <ListItemText
              disableTypography
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }>
              Contact Us
            </ListItemText>
          </ListItem> */}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <AppBar position='fixed'>
        <Toolbar disableGutters>
          <Button
            disableRipple
            component={Link}
            to='/'
            onClick={() => setValue(0)}
            className={classes.logoContainer}>
            <img alt='Company Logo' className={classes.logo} src={logo} />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
