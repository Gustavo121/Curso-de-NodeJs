const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//  if (error) {
//    return console.log("Erro: ", error);
//  }

//  console.log("Pasta criada com sucesso!");
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "text.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);

// Adicionar á um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("Arquivo modificado com sucesso!")
  }
)