import { BsDot } from "react-icons/bs"
import { IoExitOutline } from "react-icons/io5"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    infoOuterDiv: {
        backgroundColor: "#1877f2",
        borderRadius: "10px",
        height: "50px",
    },
    infoInnerDiv: {
        width: "100%",
        height: "inherit",
        display: "flex",
        alignItems: "center",
    },
    exit: {

        marginLeft: "20px",
    },
    dot: {
        color: "green",
        fontSize: "70px",
    }
})
const InfoBar = ({ room, name }) => {
    const classes = useStyles();
    return (
        <div className={classes.infoOuterDiv}>
            <div className={classes.infoInnerDiv}>
                <span ><BsDot className={classes.dot} /></span>
                <span style={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}>{room}</span>
                <div className={classes.exit}>
                    <a style={{ float: "right" }} href="/"><IoExitOutline /></a>
                </div>
            </div>

        </div>
    );
}
export default InfoBar;