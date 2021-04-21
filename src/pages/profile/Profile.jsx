import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Share } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import CustomButton from '../../components/CustomButton';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.pbr.textPrimary,
    textAlign: 'left',
    fontSize: '2.08vw',
    lineHeight: '41.4px',
    fontWeight: 800,
    verticalAlign: 'middle',
  },
  categoryTab: {
    display: 'inline',
    border: '1px solid #616161',
    borderRadius: '20px',
    fontSize: 14,
    fontWeight: 500,
    padding: '6px 18px 6px 18px',
    minWidth: '60px',
    marginLeft: '16px',
    marginRight: '12px',
    height: '40px',
  },
  cover: {
    // backgroundImage: `url('https://miro.medium.com/max/800/1*AGOVtVmLpx_1qrK04zI6Dg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // height: 300,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    borderRadius: '50%',
    border: '5px solid #ffffff',
    height: 150,
    width: 150,
    objectFit: 'cover',
    // marginTop: -80,
    marginBottom: 10,
  },
  title: {
    verticalAlign: 'baseline',
    textAlign: 'center',
    color: theme.palette.pbr.textPrimary,
    fontWeight: 800,
    letterSpacing: 0.5,
    fontSize: 16,
    lineHeight: '20.7px',
  },
  subheading: {
    verticalAlign: 'baseline',
    textAlign: 'center ',
    color: theme.palette.pbr.textSecondary,
    fontWeight: 500,
    fontSize: 14,
    width: '300px',
  },
  buttonWrapper: {
    padding: 20,
  },
  button: {
    color: 'black',
    backgroundColor: 'white',
    textTransform: 'none',
    borderRadius: '50px',
    background: 'linear-gradient(73.28deg,#ffffff 88.45%, #e6e6e6 6.51% )',
  },
  buttonCustom: {
    color: 'white',
    backgroundColor: 'white',
    textTransform: 'none',
    borderRadius: '50px',
    padding: '8px 16px 8px 16px',
    fontWeight: 600,
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
  },
  tabWrapper: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabs: {
    maxWidth: 1000,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '97%',
    },
  },
  tab: {
    backgroundColor: 'black',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className={classes.cover}>
        {/* <div className={classes.buttonWrapper}>
          <Button variant="contained" className={classes.button}>
            Add Cover
          </Button>
        </div> */}
      </div>
      <div className="text-center mt-5">
        <img
          src="https://i.pinimg.com/originals/b1/92/4d/b1924dce177345b5485bb5490ab3441f.jpg"
          height="100px"
          alt="profile"
          className={classes.avatarWrapper}
        />
      </div>
      <h6 className={classes.title}>Dorrein Nil Jaan</h6>
      <div className="d-flex justify-content-center">
        <div className={classes.buttonWrapper}>
          <Button variant="contained" className={classes.button}>
            Edit Profile
          </Button>
        </div>
        <div className={classes.buttonWrapper}>
          <Button variant="contained" className={classes.button}>
            Share
            <Share />
          </Button>
        </div>
      </div>
      <div className={classes.tabWrapper}>
        <Paper square className={classes.tabs}>
          <Tabs
            style={{ color: 'black' }}
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Character" className={classes.tab} />
            <Tab label="On Sale" className={classes.tab} />
            <Tab label="Equipment Bag" className={classes.tab} />
            <Tab label="History battle" className={classes.tab} />
            <Tab label="Activity" className={classes.tab} />
          </Tabs>
        </Paper>
        <div style={{ maxWidth: 1000 }}>
          {' '}
          <TabPanel value={value} index={0}>
            <div className="text-center">
              <div className="my-3">
                <img src="images/character.png" height="100px" alt="character" />
              </div>
              <div className="text-center">
                <h6 className={classes.title}>No items found</h6>
                <div className="d-flex justify-content-center">
                  <p className={classes.subheading}>
                    Come back soon! Or try to browse something for you on our marketplace
                  </p>
                </div>
              </div>
              <div className={classes.buttonWrapper}>
                <CustomButton title="Browse marketplace" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="text-center">
              <div className="my-3">
                <img src="images/man.png" height="100px" alt="sale" />
              </div>
              <div className="text-center">
                <h6 className={classes.title}>No items found</h6>
                <div className="d-flex justify-content-center">
                  <p className={classes.subheading}>
                    Come back soon! Or try to browse something for you on our marketplace
                  </p>
                </div>
              </div>
              <div className={classes.buttonWrapper}>
                <CustomButton title="Put on sale" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="text-center">
              <div className="my-3">
                <img src="images/dice.png" height="100px" alt="equipment" />
              </div>
              <div className="text-center">
                <h6 className={classes.title}>No items found</h6>
                <div className="d-flex justify-content-center">
                  <p className={classes.subheading}>
                    Come back soon! Or try to browse something for you on our marketplace
                  </p>
                </div>
              </div>
              <div className={classes.buttonWrapper}>
                <CustomButton title="Browse marketplace" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="text-center">
              <div className="my-3">
                <img src="images/battle.png" height="100px" alt="battle" />
              </div>
              <div className="text-center">
                <h6 className={classes.title}>No items found</h6>
                <div className="d-flex justify-content-center">
                  <p className={classes.subheading}>
                    Come back soon! Or try to browse something for you on our marketplace
                  </p>
                </div>
              </div>
              <div className={classes.buttonWrapper}>
                <CustomButton title="Challenge players" alt="battle" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="text-center">
              <div className="my-3">
                <img src="images/flag.png" height="100px" alt="activity" />
              </div>
              <div className="text-center">
                <h6 className={classes.title}>No Activity found</h6>
                <div className="d-flex justify-content-center">
                  <p className={classes.subheading}>
                    Come back soon! Or try to browse something for you on our marketplace
                  </p>
                </div>
              </div>
              <div className={classes.buttonWrapper}>
                <CustomButton title="Join battle" />
              </div>
            </div>
          </TabPanel>
        </div>
      </div>

      <div></div>
    </Fragment>
  );
}