import express from "express";

const app = express();
app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Missing fields");
  }

  const user = {
    id: Date.now(),
    name,
    email,
  };

  users.push(user);

  res.send(user);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.send(user);
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users.splice(index, 1);

  res.send("User deleted");
});

app.listen(3000, () => console.log("Server running"));
