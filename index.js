const express = require("express");
const app = express();

app.use(express.json()); // middleware

const users = [
  {
    name: "Anh",
    id: 1,
  },
  {
    id: 2,
    name: "Em",
  },
  {
    id: 3,
    name: "Ut",
  },
];

//get all user
app.get("/api/user", (req, res) => {
  res.send(users);
});

//get user by id
app.get("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return res.status(404).send("Not found");
  }
  return res.send(user);
});

//create user
app.post("/api/user", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.send(user);
});

//update user
app.put("/api/user/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  user.name = req.body.name;
  return res.send(user);
});

//delete user
app.delete("/api/user/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

app.listen(3000, () => {
  console.log("xin chao trinh hoang vy");
});
