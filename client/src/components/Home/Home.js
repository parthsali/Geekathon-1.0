// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { RiSnapchatLine } from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    homeOuterContainer: {
        backgroundColor: "#18191B",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
    },
    homeInnerContainer: {
        border: "2px solid grey",
        borderRadius: "10px",
        padding: "5%",
        height: "40%",
        backgroundColor: "#2C2D2F",
        [theme.breakpoints.down('sm')]: {
            padding: "20px",
        },
    },
    homeButton: {
        backgroundColor: "#167DFF",
        border: "none",
        padding: "16px",
        width: "50%",
        color: "white",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
        margin: "20px auto",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
    },
    logo: {
        width: "100px",
        height: "100px",
        color: "black",
    },
    heading: {
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
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.homeOuterContainer}>
            <div className={classes.nav}>
                <Link to="/" className={classes.logoname}>
                    QuantumCure
                </Link>
            </div>
            <div className={classes.homeInnerContainer}>
                <div className={classes.heading}>
                    <span ><RiSnapchatLine className={classes.logo} /></span>
                    <div className={classes.heading}>Designing a Secure Communication Channel with Diffie-Hellman and AES-cbc</div>
                    <div>
                        <Link to="/join" className={classes.homeButton}>Join Chat</Link>
                    </div>
                    <div>
                        <Link to="/team" className={classes.homeButton}>Meet the Team</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
