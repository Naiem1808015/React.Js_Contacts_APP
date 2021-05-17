import React, { useState, useContext, useEffect } from "react";
import createContact from '../../context/actions/contacts/createContact'
import clearCreateContact from '../../context/actions/contacts/clearCreateContact'
import CreateContact from "../../layout/Contacts/Create"
import {useHistory} from "react-router-dom"
import { GlobalContext } from "../../context/Provider";

const CreateContactContainer = () => {
    const {
        contactsDispatch,
        contactsState: {
          // addContact: { loading, error, data },
          addContact
        },
      } = useContext(GlobalContext);

    const [form, setForm] = React.useState({});
    // console.log("FORM:>>>", form)

    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }
    const onChange = (e, {name, value}) => {
        setForm({
            ...form,
            [name]: value
        })
    }

    const history = useHistory();
    useEffect(() => {
        if (addContact?.data) {
          history.push("/");
        }
        return () => {
          clearCreateContact()(contactsDispatch);
        };
      }, [addContact?.data]);

      const [tempFile, setTempFile] = useState(null)

      const onImageChange = (e) => {
        e.persist();
        const fileURL = e.target.files[0];
        setForm({
          ...form,
          contactPicture: fileURL
        })

        if(fileURL){
          setTempFile(URL.createObjectURL(fileURL))
        }
      }

    
    const formIsHalfFilled = Object.values(form).filter(item => item && item !== "")?.length > 0 && !addContact?.data;

    const formInvalid = !form.firstName?.length || !form.lastName?.length || !form.countryCode?.length || !form.phoneNumber?.length;


    return <CreateContact tempFile={tempFile} onImageChange={onImageChange} formIsHalfFilled={formIsHalfFilled} loading={addContact?.loading} formInvalid={formInvalid} onSubmit={onSubmit} onChange={onChange} form={form} />
}

export default CreateContactContainer



