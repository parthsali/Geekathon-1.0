const users = [];

const addUser = ({ id, name }) => {
    console.log("addUser", id, name);
    name = name.trim().toLowerCase();
    const existingUser = users.find((user) => user.name === name);
    if (existingUser) {
        return { error: "Username is taken" };
    }
    const user = { id, name };
    users.push(user);
    return { user };
};

const removeUser = (id) => {
    console.log("removeUser", id);
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => {
    console.log("getUser", id);
    return users.find((user) => user.id === id);
};

const getUsers = () => {
    console.log("getUsers");
    return users;
};

module.exports = { addUser, removeUser, getUser, getUsers };
