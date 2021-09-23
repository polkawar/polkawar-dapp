import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import Chances from "./sections/Chances";
import Spin from "./sections/Spin";
import Results from "./sections/Results";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  section: {
    width: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  title: {
    color: theme.palette.pwar.greyLight,
    fontSize: 28,
    fontWeight: 400,
    textAlign: "left",
    letterSpacing: 2,
  },
  divider: {
    width: 170,
    height: 3,
    background: "linear-gradient(to right, #fdd835, rgba(0, 0, 0, 0.6))",
  },
}));

function Raffle({}) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="container">
        <div className={classes.background}>
          <div className={classes.section}>
            <h1 className={classes.title}>PolkaWar Lucky Draw Raffles </h1>
            <div className={classes.divider} />

            <div className="row mt-4">
              <div className="col-md-8 mb-3">
                <div className="d-flex justify-content-center">
                  <Spin />
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <Chances />
                <div className="mt-3">
                  {" "}
                  <Results />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Raffle);
