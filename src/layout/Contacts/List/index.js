import React from 'react'
import {Placeholder, Segment, Button, Icon, Header, List, Container} from "semantic-ui-react";
import AppHeader from '../../../components/Header';
import ImageThumb from "../../../components/ImageThumb/index";
import Favorites from '../Favourites';
// import avatarImage from '../../../assets/images/avatar.png';


const ContactListUI = ({deleteContact, starUnstarContact,
    state: {contacts: {loading, error, data, isSearchActive, foundContacts},
}}) => {
    console.log("DATA:>>>", data)

    const currentContact = isSearchActive ? foundContacts : data
    return (
        <div>
            <AppHeader />
            <Container>
             
            <Header style={{marginTop:"15px"}}>STARTED</Header>

            <Favorites
            favorites={currentContact.filter((item) => item.is_favorite)}
            loading={loading}
            />

            <Header>ALL</Header>

            {loading && 
                <div>
                    <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>

                    <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>

                    <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                </div>
            }

            {!loading && currentContact.length === 0 && 
            <div style={{marginTop: "30px"}}>
                <h2 style={{color: "#2ECC71",}}>
                "No contact item to show"
                </h2>
                {/* <Message
                    content='You have no contacts yet.'
                /> */}
            </div>
            }



            <div className="responsiveListItemDesktop">
            <List>
                {currentContact.length>0 && currentContact.map((contact) => (
                    <List.Item key={contact.id} disabled={contact.deleting}> 
                    <Segment> 
                    <List.Content floated="right">
                        <span>{contact.country_code}{"   "}</span>
                        <span>{contact.phone_number}</span>
                        {"  "}


                        {contact.is_favorite ?  
                          <Button size="tiny" color="green" onClick={()=>{starUnstarContact(contact.id, contact.is_favorite)}} style={{color:"white"}}>
                            <Icon name="like" />
                          </Button>
                          :
                          <Button size="tiny" color="grey" onClick={()=>{starUnstarContact(contact.id, contact.is_favorite)}} style={{color:"white"}}>
                            <Icon name="like" />
                        </Button>
                        }

                        <Button size="tiny" color="red" onClick={()=>{deleteContact(contact.id)}} style={{color:"white"}}>
                            <Icon name="trash" />
                        </Button>
                    </List.Content>
                    <List.Content style={{display: 'flex', alignItems: 'center'}}>
                    <ImageThumb
                        circular
                        firstName={contact.first_name}
                        lastName={contact.last_name}
                        src={contact.contact_picture}
                        style={{ width: 45, height: 45 }}
                    />
                        <span>
                            {contact.first_name}  
                            {contact.last_name}{"   "}
                            {contact.is_favorite && <Icon color="red" name="heart"/>}
                        </span>
                    </List.Content>
                    </Segment>
                    </List.Item>

                ))                    
            }
            </List>
            </div>

            <div className="responsiveListItemMobile">
            <List>
           
                {currentContact.length>0 && currentContact.map((contact) => (

                    <List.Item key={contact.id} disabled={contact.deleting}>  
                    

                    <Segment.Group>
                    <Segment>
                        <List.Content style={{display: 'flex', alignItems: 'center'}}>
                        <ImageThumb
                            circular
                            firstName={contact.first_name}
                            lastName={contact.last_name}
                            src={contact.contact_picture}
                            style={{ width: 45, height: 45 }}
                        />
                            <span>
                                {contact.first_name}  {"  "}
                                {contact.last_name}{"   "}
                                {contact.is_favorite && <Icon color="red" name="heart"/>}
                            </span>
                            
                        </List.Content>
                    </Segment>
                    <Segment >
                        <List.Content >
                            <span>{contact.country_code}{"   "}</span>
                            <span>{contact.phone_number}</span>
                        </List.Content>
                        <List.Content floated="right">
                            {contact.is_favorite ?  
                            <Button size="tiny" color="green" onClick={()=>{starUnstarContact(contact.id, contact.is_favorite)}} style={{color:"white"}}>
                                <Icon name="like" />
                            </Button>
                            :
                            <Button size="tiny" color="grey" onClick={()=>{starUnstarContact(contact.id, contact.is_favorite)}} style={{color:"white"}}>
                                <Icon name="like" />
                            </Button>
                            }
                            <Button size="tiny" color="red" onClick={()=>{deleteContact(contact.id)}} style={{color:"white"}}>
                            <Icon name="trash" />
                            </Button>
                        </List.Content>
                        
                        </Segment>
                        
                        
                    </Segment.Group>    
                    
                    </List.Item>

                ))                    
            }
            </List>
            </div>



            
            </Container>
        </div>
    )
}

export default ContactListUI
