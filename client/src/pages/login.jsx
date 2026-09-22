import { Route, Link, Routes } from 'react-router-dom'

const showPassword = (e) => {
    if(e.target.checked){

        loginPassword.type = 'text'
    }else{
        loginPassword.type = 'password'
    }
}
const LoginSubmit = (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target)
        console.log(`Email : ${formData.get('loginEmail')}`)
        console.log(`Password : ${formData.get('loginPassword')}`)
        console.log(`Show : ${formData.get('showpassword')}`)
    } catch (err) {
        console.log(err)
    }
}

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="login-form">
                    <form onSubmit={(e) => { LoginSubmit(e); }}>
                        <div className="login-details d-flex flex-col">
                            <label htmlFor="loginEmail">Email</label>
                            <input id='loginEmail' type="text" name="loginEmail" />

                            <label htmlFor="loginPassword">Password</label>
                            <input id='loginPassword' type="password" name="loginPassword" />
                        </div>

                        <div className='d-flex item-between justify-between'>
                            <div className='d-flex showpassword '>
                                <input onChange={(e)=>{showPassword(e);}} type="checkbox" id="showpassword" name="showpassword" />
                                <label htmlFor="showpassword">show password</label>
                            </div>
                            <Link to="/Login/Recovery">Forgott Password</Link>
                        </div>
                        <div className="formbuttons">
                            <input id='signInButton' type="submit" />
                            <Link id='signUpOption' to="/SignUp">Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;