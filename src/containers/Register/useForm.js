import { useContext, useEffect, useState } from "react"
import { register } from "../../context/actions/auth/register";
import {GlobalContext} from '../../context/Provider';
import {useHistory} from "react-router-dom"

export default () => {
    const {authDispatch, authState:{auth:{loading, error, data}}} = useContext(GlobalContext);

    // console.log("ERROR:>>>", error)
    // console.log("DATA:>>>", data)

    const history = useHistory();

    const [form, setForm] = useState({})
    const [fieldErrors, setFieldErrors] = useState({})

    const onChange=(e, {name, value}) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    // console.log("FORM:>>>>>", form)

    useEffect(() => {
        if(error){
            for(const item in error){
                setFieldErrors({
                    ...fieldErrors,
                    [item]: error[item][0]
                })
            }
        }
    },[error])

    // useEffect(()=>{
    //     if(data){
    //         history.push("/auth/login")
    //     }
    // },[data])

    useEffect(()=>{
        if(data){
            history.push({
                    pathname: "/auth/login",
                    form: form
            })
        }
    },[data])

    // this.props.
    // })

    const registerFormValid =   !form.username?.length 
                                || !form.firstName?.length 
                                || !form.lastName?.length 
                                || !form.email?.length 
                                || !form.password?.length


    const onSubmit = () => {
        setFieldErrors({})
        register(form)(authDispatch);
    }

    return {form, onChange, fieldErrors, loading, registerFormValid, onSubmit}
}