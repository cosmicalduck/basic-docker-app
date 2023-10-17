import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.Model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();

mongoose.connect(
  "mongodb://pato:password@monguito:27017/myapp?authSource=admin"
);

app.get("/", async (req, res) => {
  console.log("listing all ducks...");
  try {
    const animals = await Animal.find();
    return res.send(animals);
  } catch (error) {
    return res.send("No es posible listar a los animales actualmente");
  }
});

app.get("/create", async (req, res) => {
  console.log("creating a new duck...");
  try {
    await Animal.create({
      tipo: "Patito",
      estado: "Feliz",
    });
    return res.send("El animal ha sido creado");
  } catch (error) {
    return res.send("El animal no ha podido ser creado :(");
  }
});

async function main() {
  try {
    app.listen(3000);
    console.log("Sever is listening on port", 3000);
  } catch (error) {
    console.log(error.message);
  }
}

main();
