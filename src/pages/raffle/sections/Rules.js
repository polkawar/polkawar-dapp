import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 120,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 30,
    color: theme.palette.pwar.greyLight,

    backgroundColor: "rgba(41, 42, 66, 0.5)",
    // background:
    //   "radial-gradient(160% 150% at 108% -9%, #ffffff 0%, #757575 100%)",
    border: "1px solid #212121",
    marginBottom: 10,
    filter: "drop-shadow(0 0 0.5rem #212121)",
    [theme.breakpoints.down("sm")]: {
      minHeight: 200,
      height: "100%",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    paddingLeft: 5,

    color: theme.palette.pwar.greyLight,
  },
  logoWrapper: {
    height: 30,
    width: 30,
  },
  logo: {
    height: 30,
    width: 30,
  },
  para: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 13,
    color: theme.palette.pwar.greyLight,

    fontFamily: "Work Sans",
  },

  earn: {
    textAlign: "center",
    color: theme.palette.pwar.greyLight,

    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Work Sans",
  },
}));
export default function Rules({ account }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}>
      <div className={classes.title}>Rules and Rewards</div>

      <div>
        <ul className=" mt-3">
          <li>
            <div className={classes.para}>You must hold 5000 PWAR.</div>
          </li>
          <li>
            <div className={classes.para}>
              You will get 1 chance per 5000 PWAR, for example if you hold
              21,000 PWAR you will get 4 chances to spin.
            </div>
          </li>{" "}
          <li>
            <div className={classes.para}>
              Results will be annouces after 3 days of event start.
            </div>
          </li>{" "}
          <li>
            <div className={classes.para}>
              There will be 10 Winner tickets with rewards of upto 500UST per
              ticket.
            </div>
          </li>{" "}
          <li>
            <div className={classes.para}>You must hold 5000 PWAR.</div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
