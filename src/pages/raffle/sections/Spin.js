import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 400,
    width: "100%",
    padding: 20,
    paddingBottom: 25,
    borderRadius: 30,
    backgroundColor: "rgba(41, 42, 66, 0.3)",
    // background:
    //   "radial-gradient(160% 150% at 108% -9%, #ffffff 0%, #757575 100%)",
    // background:
    //   "radial-gradient(128% 331% at 118% 0%, rgb(214, 240, 30) 0%, rgb(5, 225, 189) 100%)",
    border: "1px solid #212121",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    [theme.breakpoints.down("sm")]: {
      minHeight: 200,
      minWidth: 240,
      width: "100%",
      padding: 10,
      paddingBottom: 20,
    },
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: theme.palette.pwar.greyLight,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  logoWrapper: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  tokenTitle: {
    fontWeight: 500,
    padding: 0,
    paddingLeft: 10,
    fontSize: 14,
    paddingBottom: 3,
    color: "#e5e5e5",
  },
  tokenSubtitle: {
    fontWeight: 300,
    padding: 0,
    paddingLeft: 10,
    fontSize: 12,
    color: "#bdbdbd",
  },
  tokenAmount: {
    fontWeight: 700,
    padding: 0,
    paddingLeft: 10,
    fontSize: 18,
    color: "#C80C81",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "transparent",
    border: "1px solid #f9f9f9",
    padding: 12,
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
  },
  earn: {
    textAlign: "center",
    color: "#f9f9f9",
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Work Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  desktop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buyNow: {
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    color: "white",
    width: "fit-content",
    height: 40,
    textTransform: "none",
    fontSize: 15,
    borderRadius: 40,
    "&:hover": {
      background: "rgba(224, 7, 125, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 120,
      fontSize: 15,
    },
  },
  playButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,yellow, orange)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    marginTop: 5,
    marginLeft: 10,
    color: "black",
    padding: "12px 16px 12px 16px",
    fontWeight: 300,
    fontSize: 18,
    textTransform: "none",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      padding: "8px 26px 8px 26px",
      fontSize: 16,
    },
  },
  jackpot: {
    width: "100%",
    padding: 5,
    marginTop: 10,
    backgroundColor: "black",
    borderRadius: 7,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  jackpotImage: {
    width: "100%",
  },
}));
export default function Spin({}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={10}>
      <div>
        {" "}
        <div>
          <h6 className={classes.title}>Play and Win</h6>
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
            <div className={classes.earn}>
              Win upto 500 USDT per winning ticket
            </div>
          </div>
          <div className={classes.jackpot}>
            <img
              src="images/jackpot_static.png"
              className={classes.jackpotImage}
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="text-center mt-3">
            <Button variant="contained" className={classes.playButton}>
              Click and Play
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
