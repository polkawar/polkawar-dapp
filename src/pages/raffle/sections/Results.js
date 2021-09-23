import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 320,
    width: "100%",
    padding: 20,
    borderRadius: 30,
    background:
      "radial-gradient(160% 150% at 108% -9%, rgb(41, 231, 232) 0%, rgb(101, 31, 255) 100%)",
    backgroundColor: "rgba(41, 42, 66, 0.3)",
    border: "1px solid #212121",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    [theme.breakpoints.down("sm")]: {
      minHeight: 200,
      height: "100%",
    },
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: theme.palette.pwar.blackLight,
  },
  logoWrapper: {
    height: 36,
    width: 36,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 35,
    width: 35,
  },
  tokenTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 18,
    color: theme.palette.pwar.blackLight,
  },

  tokenAmount: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
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
      <h6 className={classes.title}>Winning Tickets</h6>
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
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>463</div>
            </div>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>753</div>
            </div>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>324</div>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div className={classes.logoWrapper}>
              <img src="images/win.png" className={classes.logo} />
            </div>
            <div>
              <div className={classes.tokenTitle}>932</div>
            </div>
          </div>
        </div>{" "}
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
