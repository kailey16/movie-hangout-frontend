import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Navbar = () => {  

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {/* <Link className="item" to="/movies"><Tab label="Movies" /></Link>
        <Link className="item" to="/profile"><Tab label="My Movies" /></Link>
        <Link className="item" to="/login"><Tab label="Logout" /></Link> */}
        <Tab label="Movies" />
        <Tab label="My Movies" />
        <Tab label="Logout" />
      </Tabs>
    </Paper>
  );
}

export default Navbar


