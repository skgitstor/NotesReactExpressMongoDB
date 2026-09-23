import { Route, Link, Routes } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from 'react'



const Ragisterform = () => {
    const [res, setRes] = useState('hello');

    const showPassword = (e) => {
        if (e.target.checked) {

            NewPasswordC.type = 'text'
        } else {
            NewPasswordC.type = 'password'
        }
    }
    const newSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target)
            const userobj = {
                "name": formData.get('newName'),
                "email": formData.get('newEmail'),
                "Password": formData.get('NewPassword')
            }
            const data = await axios.post("http://localHost:5000/userRagister", userobj);
            setRes(data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (res) {
            console.log(res);
        }
    }, [res])


    return (
        <>
            <div className="container">
                <div className="login-form">
                    <form onSubmit={(e) => { newSubmit(e); }}>
                        <div className="login-details d-flex flex-col">

                            <label htmlFor="newName">Name</label>
                            <input id='newName' type="text" name="newName" placeholder='Enter Your Name' />

                            <label htmlFor="newEmail">Email</label>
                            <input id='newEmail' type="text" name="newEmail" placeholder='Enter Email' />

                            <label htmlFor="NewPassword">Password</label>
                            <input id='NewPassword' type="password" name="NewPassword" placeholder='Password' />

                            <label htmlFor="NewPasswordC">Confirm Password</label>
                            <input id='NewPasswordC' type="password" name="NewPasswordC" placeholder='Password' />

                        </div>

                        <div className='d-flex item-between justify-between'>
                            <div className='d-flex showpassword '>
                                <input onChange={(e) => { showPassword(e); }} type="checkbox" id="showpassword" name="showpassword" />
                                <label htmlFor="showpassword">show password</label>
                            </div>
                            <Link to="/Login/Recovery">Forgott Password</Link>
                        </div>
                        <div className="formbuttons">
                            <input id='signInButton' type="submit" />
                            <Link id='signUpOption' to="/authPage/Login">Have Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Ragisterform;