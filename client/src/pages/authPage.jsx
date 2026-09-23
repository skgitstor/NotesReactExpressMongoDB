import { Route, Link, Routes } from 'react-router-dom'
import Loginform from '../components/Login-form'
import Ragisterform from '../components/SignUp-form'

const Login = () => {
    return (
        <>
            <Routes>
                <Route path='/Login' element={<Loginform/>} />
                <Route path='/signup' element={<Ragisterform/>} />
            </Routes>
            

        </>
    );
}
export default Login;