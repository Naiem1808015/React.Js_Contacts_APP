import React, {useContext} from 'react'
// import {Link} from 'react-router-dom'
import {GlobalContext} from '../../context/Provider';
import LoginUI from '../../layout/Login'
import useForm from './useForm'

function LoginContainer() {
    const {authDispatch, authState:{auth:{loading, error, data}}} = useContext(GlobalContext);
    return (
        // <div>
        //     <h1>{data ? `Welcome ${data?.first_name} ${data?.first_name}` : 'LOGIN' }</h1>
        //     <Link to='/auth/register'>Register Here</Link>
        // </div>

<div>
<LoginUI form={useForm()}/>
</div>
    )
}

export default LoginContainer
