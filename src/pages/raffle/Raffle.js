import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, Grow } from "@material-ui/core";
import Chances from "./sections/Chances";
import Spin from "./sections/Spin";
import Results from "./sections/Results";
import UserTickets from "./sections/UserTickets";
import { ArrowDownward, ArrowDropDown } from "@material-ui/icons";
import Rules from "./sections/Rules";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 25,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  section: {
    width: 1000,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      width: "100%",
    },
  },
  title: {
    color: theme.palette.pwar.greyLight,
    fontSize: 28,
    fontWeight: 400,
    textAlign: "left",
    letterSpacing: 2,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  divider: {
    width: 170,
    height: 3,
    background: "linear-gradient(to right, #fdd835, rgba(0, 0, 0, 0.6))",
  },
  ruleButton: {
    borderRadius: "50px",
    // background: `linear-gradient(to bottom,yellow, orange)`,
    backgroundColor: "rgba(41, 42, 66, 0.3)",
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    marginTop: 5,
    marginLeft: 10,
    color: theme.palette.pwar.greyLight,
    padding: "8px 12px 8px 12px",
    fontWeight: 300,
    fontSize: 16,
    textTransform: "none",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.pwar.black,
    },
    border: "1px solid #212121",
    [theme.breakpoints.down("md")]: {
      padding: "8px 16px 8px 16px",
      fontSize: 12,
    },
  },
}));

function Raffle({}) {
  const classes = useStyles();
  const [box, setBox] = useState({
    rules: false,
    tickets: false,
    results: false,
  });

  const handleBox = (value) => {
    let tempStates = { rules: false, tickets: false, results: false };
    if (box[value] === true) {
      tempStates[value] = false;
    } else {
      tempStates[value] = true;
    }

    setBox(tempStates);
  };
  return (
    <Fragment>
      <div className="container">
        <div className={classes.background}>
          <div className={classes.section}>
            <div className="d-flex justify-content-between">
              <div>
                <h1 className={classes.title}>PolkaWar Lucky Draw Raffles </h1>
                <div className={classes.divider} />
              </div>
              <div className="d-none d-lg-block d-xl-block">
                <Button
                  variant="contained"
                  className={classes.ruleButton}
                  onClick={() => handleBox("rules")}
                  style={{ color: "white" }}
                >
                  Rules & rewards <ArrowDropDown />
                </Button>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-3 d-block d-lg-none">
              <Button
                variant="contained"
                className={classes.ruleButton}
                onClick={() => handleBox("rules")}
              >
                Rules{" "}
                <ArrowDropDown
                  style={{ padding: 0, margin: 0, fontSize: 16 }}
                />
              </Button>
              <Button
                variant="contained"
                className={classes.ruleButton}
                onClick={() => handleBox("tickets")}
              >
                Your Tickets
                <ArrowDropDown
                  style={{ padding: 0, margin: 0, fontSize: 16 }}
                />
              </Button>
              <Button
                variant="contained"
                className={classes.ruleButton}
                onClick={() => handleBox("results")}
              >
                Results
                <ArrowDropDown
                  style={{ padding: 0, margin: 0, fontSize: 16 }}
                />
              </Button>
            </div>
            <div>
              {box.rules && (
                <Grow in={true} timeout={300}>
                  <div className="d-flex justify-content-center mt-3 d-block d-lg-none">
                    <Rules />
                  </div>
                </Grow>
              )}
              {box.tickets && (
                <Grow in={true} timeout={300}>
                  <div className="d-flex justify-content-center mt-3">
                    <UserTickets />
                  </div>
                </Grow>
              )}
              {box.results && (
                <Grow in={true} timeout={300}>
                  <div className="d-flex justify-content-center mt-3">
                    <Results />
                  </div>
                </Grow>
              )}
            </div>
            <div className="row mt-4">
              <div className="col-xl-8 mb-3">
                <div className="d-flex justify-content-center">
                  <Spin />
                </div>
              </div>
              <div className="col-xl-4 mb-3 d-none d-lg-none d-xl-block">
                {box.rules && (
                  <Grow in={true} timeout={300}>
                    <div className="d-flex justify-content-end">
                      <Rules />
                    </div>
                  </Grow>
                )}
                <div>
                  <Chances />
                </div>
                <div className="mt-3">
                  {" "}
                  <UserTickets />
                </div>
                <div className="mt-3">
                  {" "}
                  <Results />
                </div>
                <div className="mt-3"> </div>
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
