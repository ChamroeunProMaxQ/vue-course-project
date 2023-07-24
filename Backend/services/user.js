const readFile = require("../util/readFile");
const writeFile = require("../util/writeFile");
const signToken = require("../auth/signToken");

const createUser = async (req, res, next) => {

  const { email, password } = req.body;

  try {
    const data = readFile();
    const users = data.users;
    const id = "u".concat(parseInt(users[users.length - 1].id[1]) + 1);
    const newUser = {
      id: id,
      email: email,
      password: password,
    };

    //check if email is exited
    const valid_email = users.find((user) => user.email === email);
    if (valid_email) {
      return res.status(400).json({ message: "user already exited" });
    }

    users.push(newUser);
    data.users = users;
    writeFile(data);
    const token = signToken(newUser);
    res.status(201).json({
      access_token: token,
      coach: newUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {

  const { email, password } = req.body;

  try {
    const data = readFile();
    const users = data.users;
    // find email in array of user obj
    const valid_email = users.find((user) => user.email === email);
    if (!valid_email) {
      return res.status(404).json({ message: "user not found " });
    }
    const valid_pass = valid_email.password === password;
    if (!valid_pass) {
      return res.status(404).json({ message: "invalid password" });
    }
    const token = signToken(valid_email);
    return res.status(200).json({
      access_token: token,
      user: { ...valid_email },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUser,
};
