// Chat.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import queryString from "query-string";
import InfoBar from "../Info/Info";
import { makeStyles } from "@material-ui/core";
import Messages from "../Messages/Messages";
import { encryptMessage, decryptMessage } from "../../services/encryptDecryptService";

const useStyles = makeStyles((theme) => ({
  chatOuterContainer: {
    backgroundColor: "#18191B",  // Match join page outer container background color
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },
  chatInnerContainer: {
    border: "2px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    width: "100%", // Adjusted width for smaller screens
    maxWidth: "400px", // Maximum width for larger screens
    justifyContent: "space-between",
    height: "75%",
    overflow: "auto",
    backgroundColor: "#2C2D2F",  // Match join page inner container background color
    margin: "20px",
  },
  chat: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: "initial",
  },
  chatTextInput: {
    width: "80%",
    display: "inline",
    padding: "16px",
    outline: "none",
    border: "1px solid #167DFF",  // Match join page button color
    color: "black",
  },
  sendButton: {
    backgroundColor: "#167DFF",  // Match join page button color
    border: "none",
    padding: "16px",
    width: "20%",
    color: "white",

    fontWeight: "bold",
    cursor: "pointer",
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

let socket;

export const Chat = ({ location }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const ENDPOINT = "https://geekathonbackend.onrender.com";

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);

    socket.emit("join", { name }, (error) => {

      if (error) {
        console.error(error);
      }
    });

    return () => {
      console.log("disconnect");
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {

      console.log({ user: message.user, text: message.text });

      const decryptedMessage = decryptMessage(message.text);

      setMessages((messages) => [...messages, { ...message, text: decryptedMessage }]);
    });

    socket.on("users", (users) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log("message", message);

      let encryptedMessage = encryptMessage(message);

      encryptedMessage = encryptedMessage.toString();

      setMessage(encryptedMessage);

      console.log({ user: name, text: encryptedMessage });

      socket.emit("sendMessage", message, () => {
        setMessage("")
      });
    }
  };

  return (
    <div className={classes.chatOuterContainer}>
      <div className={classes.nav}>
        <Link to="/" className={classes.logoname}>
          QuantumCure
        </Link>
      </div>
      <div className={classes.chatInnerContainer}>
        <InfoBar name={name} />
        <Messages messages={messages} name={name} />

        <div className={classes.chat}>
          <input
            className={classes.chatTextInput}
            value={message}
            placeholder="Type a Message"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
          <button
            className={classes.sendButton}
            onClick={(e) => sendMessage(e)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
