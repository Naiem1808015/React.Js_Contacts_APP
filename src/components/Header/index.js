import React,{useContext} from 'react'
import {Menu, Sidebar, Segment, Checkbox, Grid, Input, Image, Button, Icon} from "semantic-ui-react"
import logo from "../../assets/images/logo.jpg"
import {Link, useLocation, useHistory} from 'react-router-dom'
import logout from '../../context/actions/auth/logout'
import {GlobalContext} from '../../context/Provider'
import isAuthenticated from "../../utils/isAuthenticated";
import searchContacts from '../../context/actions/contacts/searchContacts'

import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
}));







const Header = () => {
    // const location = useLocation();
    // console.log('location:>>>>', location)
    const {pathname} = useLocation();
    console.log("PATH:>>", pathname)

    const history = useHistory();

    const { contactsDispatch: dispatch } = useContext(GlobalContext);

    const [visible, setVisible] = React.useState(false)

    const handleUserLogout = () => {
        logout(history)(dispatch);
    }

    const onChange = (e, {value}) => {
        const searchText = value.trim().replace(/" "/g, "");

        searchContacts(searchText)(dispatch);
    };




  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


    return (
       <>
       <div className="responsiveNavbarDesktop">
        <Menu secondary pointing>
            <Image as={Link} to="/" src={logo} width={50} height={50} style={{alignSelf: 'center', marginLeft:'20px'}}/>
            <Menu.Item as={Link} to="/" style={{fontSize: 24, fontWeight: 'bold'}}>AlFoysalContacts</Menu.Item>


            {isAuthenticated() && pathname === "/" && (
            <Menu.Item position="right" style={{alignSelf: 'center', justifyContent: 'center'}}>
                <Input 
                    style={{width: "350px",}}  
                    placeholder="Search Contacts..." 
                    onChange={onChange} 
                    icon='search'
                />
            </Menu.Item>
            )}


            {/* pathname === "/" && ( */}
                {isAuthenticated() && (
                    <Menu.Item position="right" style={{alignSelf: 'center', justifyContent: 'center'}}>
                    <Button as={Link} to="/contacts/create" primary basic icon>
                        <Icon name="add"></Icon>
                        Create Contact
                    </Button>
                    </Menu.Item>
                )}

            {/* {pathname === "/" && ( */}
                {isAuthenticated() && (
                    <Menu.Item style={{alignSelf: 'center', justifyContent: 'center'}}>
                    {" "}
                    <Button onClick={handleUserLogout} color="red" basic icon>
                        <Icon name="log out"></Icon>
                        Logout
                    </Button>
                    </Menu.Item>
                )}
        </Menu>
       </div>



       <div className="responsiveNavbarMobile">
       <div style={{marginTop:"80px"}}>
       <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar >

            {isAuthenticated() && pathname === "/" && (
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                
                <MenuIcon style={{color:"black"}}/>
            </IconButton>)}
            
            <div className={classes.title} variant="h6" noWrap>
              <Image as={Link} to="/" src={logo} width={50} height={50} style={{alignSelf: 'center', marginLeft:'20px'}}/>
            </div>
            
            
            {isAuthenticated() && pathname === "/" && (
            <div className={classes.SearchBar}>
                <Input
                    style={{width: "230px",}}  
                    placeholder="Search Contacts..." 
                    onChange={onChange} 
                    icon='search'
                />
            </div>
            )}
             
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            {/* <List> */}
                {isAuthenticated() && (
                    <Menu.Item position="right" style={{alignSelf: 'center', marginTop:"50px", justifyContent: 'center'}}>
                    <Button as={Link} to="/contacts/create" primary basic icon>
                        <Icon name="add"></Icon>
                        Create Contact
                    </Button>
                    </Menu.Item>
                )}
            {/* </List> */}
            {/* <List> */}
            {isAuthenticated() && (
                    <Menu.Item style={{alignSelf: 'center', marginTop:"20px", justifyContent: 'center'}}>
                    {" "}
                    <Button onClick={handleUserLogout} color="red" basic icon>
                        <Icon name="log out"></Icon>
                        Logout
                    </Button>
                    </Menu.Item>
                )}
            {/* </List> */}
        </Drawer>
        
        </div>
        </div>
      </div>
       </>
    )
}

export default Header


