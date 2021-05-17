import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";
import contactsInitialState from "../initialstates/contactsInitialState";

const auth = (state, {payload, type}) => {
    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return{
                ...state,
                auth:{
                    ...state,
                    loading: true,
                }
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                auth:{
                    ...state,
                    loading: false,
                    data: payload
                }
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                auth:{
                    ...state,
                    loading: false,
                    error: payload
                }
            }
        case LOGOUT_USER:{
            return{
                ...state,
                contactsInitialState
            }
        }
        default:
            return state;
    }
}
export default auth;