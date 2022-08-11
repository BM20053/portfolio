import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { HashLink } from 'react-router-hash-link';
import { useNavigate, Link } from 'react-router-dom';

// const handleClick1 = () => {
//   // 同一タブ内で遷移
//   window.location.href = './works';
// };
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root} class='header'>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> //3本線のメニューバー
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
          portfolio
          </Typography>

          {/* <HashLink to="/works" behavior="smooth">
            <MenuItem >
              Works
            </MenuItem>
          </HashLink> */}

          <Button color="inherit">
            {/* <HashLink to="/works" behavior="smooth"> */}
              <a href='#works'>
              Works
              </a>
              {/* </HashLink> */}
          </Button>
          {/* <Button color="inherit">Aboutme</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Home</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}