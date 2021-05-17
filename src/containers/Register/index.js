import React, { useEffect } from 'react'
// import {Link} from 'react-router-dom'
import RegisterUI from '../../layout/Register'
import useForm from './useForm'

function RegisterContainer() {

    return (
        <div>
            <RegisterUI form={useForm()}/>
        </div>
    )
}

export default RegisterContainer
