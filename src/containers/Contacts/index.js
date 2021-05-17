import React,{useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import deleteContact from '../../context/actions/contacts/deleteContact'
import getContacts from '../../context/actions/contacts/getContacts'
import starUnstar from '../../context/actions/contacts/starUnstar'
import {GlobalContext} from '../../context/Provider'
import ContactListUI from "../../layout/Contacts/List/index"

function ContactsContainer() {
    const {contactsDispatch, contactsState} = useContext(GlobalContext)
    // console.log("Context: ", context)

    const history = useHistory();

    const {contacts:{data}} = contactsState;

    const handleDeleteContact=id=>{
        // console.log("ID:>>>", id)
        deleteContact(id)(contactsDispatch);
    }

    const handleStarUnstarContact=(id, is_favorite)=>{
        starUnstar(id, !is_favorite)(contactsDispatch)
    }

    useEffect(() => {
        if(data.length === 0) {
            getContacts(history)(contactsDispatch);
        }
    }, [])
    

    return <ContactListUI state={contactsState} starUnstarContact={handleStarUnstarContact} deleteContact={handleDeleteContact} />

}

export default ContactsContainer
