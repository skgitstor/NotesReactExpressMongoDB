import Express from "express"
import mongoose from "mongoose";
import cors from "cors"
import bcrypt from "bcrypt"
import session from "express-session";
const app = Express();

app.use(Express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: function (req) {
        var match = req.url.match(/^\/([^/]+)/);
        return {
            //   path: match ? '/' + match[1] : '/',
            httpOnly: true,
            //   secure: req.secure || false,
            maxAge: 60000
        }
    }
}))



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






app.post("/userRagister", async function (req, res) {
    const { name, email, Password } = req.body;
    const myPlaintextPassword = Password;
    //-------------------------------------------------------------
    //Async mathod................(recomended.)
    try {
        let saltRound = 10; // variable to remember the concept..
        const hash = await bcrypt.hash(myPlaintextPassword, saltRound);
        const newUser = await User({ name, email, password: hash })
        const saved = await newUser.save();

        req.session.user = {
            id: saved._id,
            username: saved.name,
            email: saved.email
        };


        res.status(201).json({
            success: true,
            message: 'User registered successfully!',
            userId: saved._id,
            user:req.session.user
        })
        console.log(newUser._id)
    } catch (err) { console.log("there is some error") }
    //-------------------------------------------------------------
})
app.post('/userLogin', async (req, res) => {
    const { email, Password } = req.body;
    console.log(`${email} is loggin in`)
    try {
        const user = await User.findOne({ email: email });

        // console.log(user)

        if (!user) {
            res.status(404).json({
                message: "User not found"
            })
        } else {
            const dbname = user.name;
            const dbemail = user.email;
            const dbhash = user.password


            const match = await bcrypt.compare(Password, dbhash);
            console.log(match)
            if (match == true) {
                res.json(`${dbname} logged in successfully...`);
            } else {
                res.send("Wrong Password...")
            }
        }

    } catch (err) {
        console.log(err);
        res.send(`There is some error for ${email}`)
    }
})
app.listen(5000, () => {
    console.log("Server is running at http://localHost:5000")
});