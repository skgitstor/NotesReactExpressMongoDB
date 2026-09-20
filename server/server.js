import Express from "express"
import cors from "cors"
const app = Express();
const corsOptions = {
    "origin": "http://localhost:5173",
    "credentials": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOptions))
app.get("/", function (req, res) {
    res.json({ name: "HelloServer" })
})

app.listen(5000, () => {
    console.log("Server is running at http://localHost:5000")
});