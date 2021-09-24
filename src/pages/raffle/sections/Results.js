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
    background:
      "radial-gradient(160% 150% at 108% -9%, #ffffff 0%, #757575 100%)",
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #212121",
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
    color: theme.palette.pwar.blackLight,
  },
  logoWrapper: {
    height: 30,
    width: 30,
  },
  logo: {
    height: 30,
    width: 30,
  },
  tokenTitle: {
    fontWeight: 400,
    padding: 0,
    paddingLeft: 10,
    fontSize: 18,
    color: theme.palette.pwar.blackLight,
  },

  tokenAmount: {
    fontWeight: 400,
    padding: 0,
    paddingLeft: 10,
    fontSize: 14,
    color: theme.palette.pwar.blackLight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  earn: {
    textAlign: "center",
    color: theme.palette.pwar.black,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Work Sans",
  },
}));
function Results({ account }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}>
      <div className="d-flex justify-content-center align-items-center">
        <div className={classes.logoWrapper}>
          <img src="images/ticket.png" className={classes.logo} />
        </div>
        <div className={classes.title}>Winning Tickets</div>
      </div>
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

        <div className={classes.earn}>10 Winners</div>
      </div>
      <div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
          <div>
            <div className={classes.tokenTitle}>324</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

Results.propTypes = {
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(Results);
