const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1> Hello, world! </h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Gustavo Gouvea",
      email: "gustgouvea@email.com",
    },
    {
      name: "Julia Luz",
      email: "juluz@email.com",
    },
  ];

  res.status(200).json(users)
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
