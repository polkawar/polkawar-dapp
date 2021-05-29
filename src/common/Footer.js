import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 70,
    height: '200px',
    [theme.breakpoints.down('md')]: {
      padding: 10,
    },
  },

  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: 'white',
  },

  highlight: {
    color: theme.palette.pbr.primary,
    paddingLeft: 5,
  },

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container text-center">
        <div>
          <img src="images/polkawar.png" alt="logo" height="50px" />
        </div>
        <p className={classes.para}>
          Copyright 2021 <span className={classes.highlight}>PolkaWar</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
