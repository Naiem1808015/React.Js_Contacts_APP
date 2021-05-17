import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, ADD_REMOVE_START_SUCCESS, CLEAR_ADD_CONTACT, CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS, SEARCH_CONTACTS } from "../../constants/actionTypes";

const contacts = (state, {payload, type}) => {
    switch (type) {
        case CONTACTS_LOADING:{
            return {
                contacts:{
                    ...state.contacts,
                    loading: true,
                }
            }
        }
        case CONTACTS_LOAD_SUCCESS:{
            return {
                contacts:{
                    ...state.contacts,
                    loading: false,
                    data: payload,
                }
            }
        }
        case CONTACTS_LOAD_ERROR:{
            return {
                contacts:{
                    ...state.contacts,
                    loading: false,
                    error: payload
                }
            }
        }
        case ADD_CONTACT_LOAD: {
            return {
              ...state,
              addContact: {
                ...state.addContact,
                error: null,
                loading: true,
              },
            };
          }
      
          case ADD_CONTACT_ERROR: {
            return {
              ...state,
              addContact: {
                ...state.addContact,
                loading: false,
              },
            };
          }
      
          case ADD_CONTACT_SUCCESS: {
            return {
              ...state,
              addContact: {
                ...state.addContact,
                loading: false,
                data: payload,
              },
      
              contacts: {
                ...state.contacts,
                loading: false,
                data: [payload, ...state.contacts.data],
              },
            };
          }

        case CLEAR_ADD_CONTACT: {
            return {
              ...state,
              addContact: {
                ...state.addContact,
                error: null,
                loading: false,
                data: null,
              },
            };
          }
        case SEARCH_CONTACTS:{
          return {
            contacts: {
              ...state.contacts,
              loading: false,
              isSearchActive: !!payload.length > 0 || false,
              foundContacts: state.contacts.data.filter(item=>{
                console.log("item: ", item)
                  try {
                    return(
                      item.first_name.toLowerCase().search(payload?.toLowerCase()) !== -1 ||
                      item.last_name.toLowerCase().search(payload?.toLowerCase()) !== -1 ||
                      item.phone_number.toLowerCase().search(payload?.toLowerCase()) !== -1
                    )
                  } catch (error) {
                    return [];
                  }
                
              })
            },
          }
        }
        case DELETE_CONTACT_LOADING: {
          return {
            ...state,
            contacts: {
              ...state.contacts,
              loading: false,
              data: state.contacts.data.map((item) => {
                if (item.id === payload) {
                  return { ...item, deleting: true };
                }
                return item;
              }),
            },
          };
        }

        
      case DELETE_CONTACT_SUCCESS: {
        return {
          ...state,
          contacts: {
            ...state.contacts,
            loading: false,
            data: state.contacts.data.filter((item) => item.id !== payload),
          },
        };
      }

      case ADD_REMOVE_START_SUCCESS:{
        return{
          ...state,
          contacts:{
            ...state.contacts,
            data: state.contacts.data.map((item) =>{
              if(item.id === payload.id){
                return payload
              }
              else{
                return item
              }
            })
          }
        }
      }

      default:
            return state;
    }
}
export default contacts;