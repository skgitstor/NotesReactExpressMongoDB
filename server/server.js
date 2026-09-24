import Express from "express"
import mongoose from "mongoose";
import cors from "cors"
import bcrypt from "bcrypt"

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
app.post("/userRagister", async function (req, res) {
    // console.log(`req : ${req.body.Password}`)

    const { name, email, Password } = req.body;
    // console.log(`extracted : ${name}, ${email}, ${Password}`)

    const myPlaintextPassword = Password;
    const saltRounds = 10;

    // res.json(req.body)

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {

            
            try {
                
                const newUser = User.create({ name, email, password: hash })
                // newUser.save();
                res.status(201).json({
                    success: true,
                    message: 'User registered successfully!',
                    userId: newUser._id
                });
                console.log(`user :  ${name} is incerted..`)

            } catch (err) {
                res.send(err);
            }


        });
    });








})
app.post('/userLogin', (req, res) => {
    const hash = `$2b$10$x97rfAjV37rgFZQinxz8Wubc8AwrxUb8wQlqXzn5dnieK5AiFx4Uy`
    console.log(`Logged in...`)
    bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
        // result == true
        console.log(`Result: ${result}`)
    });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
    //     // result == false
    // });



})

app.listen(5000, () => {
    console.log("Server is running at http://localHost:5000")
});