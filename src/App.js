import React from 'react';

// Components
import MenuBar from './components/MenuBar/MenuBar';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  root: {
    // display: 'flex',
    justifyContent: 'center',
  },

}));


export default function App() {

  const classes = useStyles();

  return (

    <div className={classes.root}>

      <MenuBar />

    </div>

  );
}
