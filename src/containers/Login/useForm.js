import { useContext, useEffect, useState } from "react"
// import { register } from "../../context/actions/auth/register";
import {GlobalContext} from '../../context/Provider';
import {useHistory} from "react-router-dom"
import { login } from "../../context/actions/auth/login";

export default () => {
    const {authDispatch, authState:{auth:{loading, error, data}}} = useContext(GlobalContext);

    const history = useHistory();

    const [form, setForm] = useState({})

    const onChange=(e, {name, value}) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    const loginFormValid =   !form.username?.length 
                                || !form.password?.length


    const onSubmit = () => {
        login(form)(authDispatch);
    }


    useEffect(() => {
        if(data){
            if(data.user){
                history.push("/");
            }
        }
    },[data])

    return {form, onChange, loading, loginFormValid, error, onSubmit}
}