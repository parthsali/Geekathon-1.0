// Team.js
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    teamOuterContainer: {
        backgroundColor: "#18191B",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
    },
    teamInnerContainer: {
        border: "2px solid grey",
        borderRadius: "10px",
        padding: "10%",
        height: "40%",
        backgroundColor: "#2C2D2F",
        [theme.breakpoints.down('sm')]: {
            padding: "20px",
        },
    },
    member: {
        fontSize: "larger",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "white",
    },
    nav: {
        width: "100%",
        height: "10vh",
        position: "absolute",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        textAlign: "center",
        padding: "10px",
    },
    logoname: {
        fontSize: "30px",
        marginLeft: "50px",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
        },
        textDecoration: "none",
        fontWeight: "bold",
    },
    goBackLink: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "10px",
        color: "#167DFF",
    },
}));

export const Team = () => {
    const classes = useStyles();

    return (
        <div className={classes.teamOuterContainer}>
            <div className={classes.nav}>
                <Link to="/" className={classes.logoname}>
                    QuantumCure
                </Link>
            </div>
            <div className={classes.teamInnerContainer}>
                <div className={classes.member}>Team Members:</div>
                <div className={classes.member}>1. Gaurav Patil (Team Lead) </div>
                <div className={classes.member}>2. Gaurav Sonwane</div>
                <div className={classes.member}>3. Atharva Waghchoure</div>
                <div className={classes.member}>4. Parth Sali</div>
                <Link to="/" className={classes.goBackLink}>
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};
