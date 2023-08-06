import express from 'express';
import {dirname} from "path";
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
// import Search from '/Public/main';

const app = express()
// const router = express.Router()
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url))
// const input = Search();

app.use(express.static("./Static"))
app.use(express.static("./Public"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// app.use('/',router)

app.get('/',(req,res)=>{
    res.render(__dirname + "/index.html")
})

// app.post('/Info', (req, res) => {
//     const name = req.body.pokemonName;
//     if (!name) {
//         return res.status(400).json({ error: 'Name not provided' });
//     }
//     res.sendFile(__dirname + "/Public/Pokemon.html");
//     // console.log(input.name)
// });

app.listen(port, ()=>{
    console.log("Server is running on "+port)
})