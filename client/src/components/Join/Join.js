import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiSnapchatLine } from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const useStyles = makeStyles((theme) => ({
    joinInput: {
        width: "250px",
        margin: "20px",
        backgroundColor: "#818284",
        color: "white",
        outline: "none",
        borderRadius: "5px",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
            margin: "10px",
        },
    },
    joinOuterContainer: {
        backgroundColor: "#18191B",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        padding: "10px",
    },
    joinInnerContainer: {
        border: "2px solid grey",
        borderRadius: "10px",
        padding: "5%",
        height: "50%",
        backgroundColor: "#2C2D2F",
        [theme.breakpoints.down('sm')]: {
            padding: "20px",
        },
    },
    joinButton: {
        backgroundColor: "#167DFF",
        border: "none",
        padding: "16px",
        width: "50%",
        color: "white",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    Logo: {
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

export const Join = () => {
    const [name, setName] = useState('');
    const [targetUser, setTargetUser] = useState('');
    const classes = useStyles();

    return (
        <div className={classes.joinOuterContainer}>
            <div className={classes.nav}>
                <Link to="/" className={classes.logoname}>
                    QuantumCure
                </Link>
            </div>
            <div className={classes.joinInnerContainer}>
                <div className={classes.heading}>
                    <span ><RiSnapchatLine className={classes.Logo} /></span>
                    <div className={classes.heading}>Welcome To Chat Room</div>
                    <div>
                        <TextField
                            margin="dense"
                            placeholder='Enter Your Name'
                            required
                            size="medium"
                            className={classes.joinInput}
                            variant="outlined"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            margin="dense"
                            placeholder='Enter Target User'
                            required
                            size="medium"
                            className={classes.joinInput}
                            variant="outlined"
                            onChange={(e) => setTargetUser(e.target.value)}
                        />
                    </div>
                    <Link
                        onClick={event => (!name || !targetUser) ? event.preventDefault() : null}
                        to={`/chat?name=${name}&targetUser=${targetUser}`}
                    >
                        <button className={classes.joinButton} type="submit">Start Chat</button>
                    </Link>
                </div>
            </div>
        </div >
    )
};
