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
    backgroundColor: "rgba(41, 42, 66, 0.5)",
    // background:
    // //   "radial-gradient(160% 150% at 108% -9%, rgb(41, 231, 232) 0%, rgb(101, 31, 255) 100%)",
    // background:
    //   "radial-gradient(160% 150% at 108% -9%, #ffffff 0%, #757575 100%)",
    border: "1px solid #212121",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    [theme.breakpoints.down("sm")]: {
      minHeight: 120,
      minWidth: 240,
      width: "100%",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: theme.palette.pwar.blackLight,
    color: "white",
  },

  tokenTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
    // color: theme.palette.pwar.blackLight,
    color: "white",
  },
  earn: {
    textAlign: "center",
    // color: theme.palette.pwar.black,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Work Sans",
    color: "white",
  },
}));
function UserTickets({ account }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}>
      <div className={classes.title}>Your Tickets</div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            backgroundColor: "#C80C81",
            borderRadius: "50%",
            height: "5px",
            width: "5px",
            marginRight: 5,
          }}
        ></div>
        <div className={classes.earn}>Chances of winning are 12%</div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <div className={classes.tokenTitle}>324</div>
        </div>
        <div className="col-3">
          <div className={classes.tokenTitle}>324</div>
        </div>
        <div className="col-3">
          <div className={classes.tokenTitle}>324</div>
        </div>
        <div className="col-3">
          <div className={classes.tokenTitle}>324</div>
        </div>
      </div>
    </Card>
  );
}

UserTickets.propTypes = {
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(UserTickets);
