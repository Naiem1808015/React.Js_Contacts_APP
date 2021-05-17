import {
    ADD_CONTACT_LOAD,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_ERROR,
  } from "../../../constants/actionTypes";
  import axiosInstance from "../../../helpers/axios";
  import { CONNECTION_ERROR } from "../../../constants/api";
  import { storage } from "../../../helpers/firebase";
  import { FIREBASE_IMAGE_REF } from "../../../constants/firebase";
  import uuid from 'react-uuid'
  
  export default ({
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    countryCode: country_code,
    contactPicture: contact_picture,
    isFavorite: is_favorite ,
  }) => (dispatch) => {
    const saveToBackend = (url = null) => {
      axiosInstance()
        .post("/contacts/", {
          first_name,
          last_name,
          phone_number,
          country_code,
          contact_picture: url,
          is_favorite
        })
        .then((res) => {
  
          dispatch({
            type: ADD_CONTACT_SUCCESS,
            payload: res.data,
          });
          console.log("PAYLOAD:>>>", res.data)
        })
        .catch((err) => {
          dispatch({
            type: ADD_CONTACT_ERROR,
            payload: err.response ? err.response.data : CONNECTION_ERROR,
          });
        });
    };
  
    dispatch({
      type: ADD_CONTACT_LOAD,
    });
  
    if (contact_picture) {
      const imageName = uuid()+contact_picture.name;
      storage
        .ref(`${FIREBASE_IMAGE_REF}/${imageName}`)
        .put(contact_picture)
        .on(
          "state_changed",
          (snapshot) => {},
          async (error) => {},
          async () => {
            const url = await storage
              .ref(FIREBASE_IMAGE_REF)
              .child(imageName)
              .getDownloadURL();
            saveToBackend(url);
          }
        );
    } else {
      saveToBackend();
    }
  };