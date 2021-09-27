import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 150,
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 30,
    // background:
    //   "radial-gradient(128% 331% at 118% 0%, rgb(214, 240, 30) 0%, rgb(5, 225, 189) 100%)",
    // background:
    //   "radial-gradient(160% 150% at 108% -9%, #ffffff 0%, #757575 100%)",
    // backgroundColor: "rgba(41, 42, 66, 0.3)",
    backgroundColor: "rgba(41, 42, 66, 0.5)",
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
    // color: theme.palette.pwar.blackLight,
    color: "white",
  },
  logoWrapper: {
    height: 30,
    width: 30,
    borderRadius: "50%",
  },
  logo: {
    height: 30,
    width: 30,
  },
  tokenTitle: {
    fontWeight: 400,
    padding: 0,
    paddingLeft: 10,
    fontSize: 15,
    // color: theme.palette.pwar.blackLight,
    color: "white",
  },

  tokenAmount: {
    fontWeight: 500,
    padding: 0,
    fontSize: 20,
    // color: theme.palette.pwar.blackLight,
    color: "white",
  },
  earn: {
    textAlign: "center",
    color: theme.palette.pwar.black,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Work Sans",
    color: "white",
  },
}));
function Chances({ account }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}>
      <div className={classes.title}>Your Chances</div>
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
        <div className={classes.earn}>8932 PWAR</div>
      </div>
      <div>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/total.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>Total chances</div>
            </div>
          </div>

          <div className={classes.tokenAmount}>32</div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/raffles.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>Total chances</div>
            </div>
          </div>

          <div className={classes.tokenAmount}>12</div>
        </div>{" "}
      </div>
    </Card>
  );
}

Chances.propTypes = {
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(Chances);
