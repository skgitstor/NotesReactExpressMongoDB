import Express from "express"
import mongoose from "mongoose";
import cors from "cors"
const app = Express();
app.use(Express.json())
mongoose.connect("mongodb://localhost:27017/MERN_notes_db").then(() => {
    console.log("mongodbConnected...")
}).catch((err) => {
    console.log(`error : ${err}`)
})

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // 'User' model se relation link karta hai
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
}, { timestamps: true }); // created_at aur updated_at apne aap add ho jayenge
const Note = mongoose.model('Note', noteSchema);

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Do users same email use nahi kar sakte
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);


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
app.post("/userRagister", function (req, res) {
    console.log(`req : ${req}`)
    res.json(req.body)
})

app.listen(5000, () => {
    console.log("Server is running at http://localHost:5000")
});