import { ADD_REMOVE_START_ERROR, ADD_REMOVE_START_LOADING, ADD_REMOVE_START_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axios"

export default (id, is_favorite) => (dispatch) => {
    dispatch({
        type: ADD_REMOVE_START_LOADING,
        payload: id,
    })

    axiosInstance().patch(`/contacts/${id}`, {is_favorite})
    .then(res => {
        dispatch({
            type: ADD_REMOVE_START_SUCCESS,
            payload: res.data
        })
    })
    .catch(err =>{
        dispatch({
            type: ADD_REMOVE_START_ERROR,
            payload: err.response ? err.response.data : "CONNECTION ERROR"
        })
    })
}