/*const {MongoClient} = require('mongodb');
const express = require('express');

const port = 3000;
const host = "localhost";

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/frontend");
app.use(express.static(__dirname + "/frontend/public"));

app.get("/", (req, res) => {
    res.render("index");
});

async function mongo() {
    const uri = "mongodb+srv://helamabbur:Amigo13562@cluster0.o2lxlqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        //await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

mongo().catch(console.error);

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
});*/

const env = require("dotenv").config();

const express = require("express");

const app = express();
const port = env.PORT;
const host = env.HOST;

app.use("/", require("./routes"));

app.listen(port, () => {
    console.log(`Server is running at http://${host}:${port}`);
})
