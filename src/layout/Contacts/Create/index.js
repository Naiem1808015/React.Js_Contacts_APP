import React, {useRef} from 'react'
import Header from "../../../components/Header"
import { Grid, Segment, Container, Image, Header as SemanticHeader, Card, Icon, Select, Form, Button } from 'semantic-ui-react'
import "./index.css"
import countries from "../../../utils/countries"
import {Prompt} from "react-router-dom"

const CreateContact = ({onImageChange, tempFile, onChange, formIsHalfFilled, loading, formInvalid, onSubmit}) => {

    const imagePickRef = useRef(null);

    const choseImage = () => {
        if (imagePickRef.current) {
          imagePickRef.current.click();
        }
    };

    return (
                <div>
                    <Prompt 
                        when={formIsHalfFilled} 
                        message={JSON.stringify({
                            header: "Confirm", 
                            content:"You have unsaved changes, Are you sure to leave?"
                        })}
                    />
                    <Header />
                    <div className="responsiveCreateDesktop">
                    <Grid centered>
                        <Grid.Column className="form-column">
                            <SemanticHeader>Create Contact</SemanticHeader>
                            <Card fluid>
                                <Card.Content>
                                <Form unstackable>
                                    <input
                                        onChange={onImageChange}
                                        ref={imagePickRef}
                                        type="file"
                                        accept="images/*"
                                        hidden
                                    />

                                    <div className="image-wrapper">
                                    {tempFile && <Image className="contactPicture" src={tempFile}/>}
                                    {!tempFile && (
                                        <div onClick={choseImage} className="contactPictureWhenNoImage">
                                            <span>Choose Picture</span>
                                        </div>
                                    )}

                                    <Icon name="pencil" onClick={choseImage} />
                                    </div>

                                    <Form.Group widths={2}>
                                    <Form.Input 
                                        label='First name' 
                                        placeholder='First name' 
                                        name="firstName"
                                        onChange={onChange}
                                    />
                                    <Form.Input 
                                        label='Last name' 
                                        placeholder='Last name' 
                                        name="lastName"
                                        onChange={onChange}
                                    />
                                    </Form.Group>
                                    <Form.Group widths={2}>
                                    <Form.Input 
                                        label='Country' 
                                        placeholder='Country' 
                                        control={Select}
                                        options={countries}
                                        name="countryCode"
                                        onChange={onChange}
                                    />
                                    <Form.Input 
                                        label='Phone number' 
                                        placeholder='Phone Number' 
                                        name="phoneNumber"
                                        onChange={onChange}
                                    />
                                    </Form.Group>
                                    <Form.Checkbox
                                        name="isFavorite"
                                        onChange={(e, data) => {
                                            onChange(e, { name: "isFavorite", value: data.checked });
                                        }}
                                        label="Add to favorites"
                                    />
                                    <Button disabled={formInvalid || loading} loading={loading} onClick={onSubmit} primary type='submit'>Submit</Button>
                                </Form>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                    </div>





                    <div className="responsiveCreateMobile">
                    <Container style={{marginTop: "15px"}}>
                    <Form>
                                <input
                                        onChange={onImageChange}
                                        ref={imagePickRef}
                                        type="file"
                                        accept="images/*"
                                        hidden
                                />

                                <div className="image-wrapper">
                                    {tempFile && <Image className="contactPicture" src={tempFile}/>}
                                    {!tempFile && (
                                <div onClick={choseImage} className="contactPictureWhenNoImage">
                                <span>Choose Picture</span>
                                </div>
                            )}

                            <Icon name="pencil" onClick={choseImage} />
                        </div>


                        <Form.Input 
                            label='First name' 
                            placeholder='First name' 
                            name="firstName"
                            onChange={onChange}
                        />
                        <Form.Input 
                            label='Last name' 
                            placeholder='Last name' 
                            name="lastName"
                            onChange={onChange}
                        />
                        <Form.Input 
                            label='Country' 
                            placeholder='Country' 
                            control={Select}
                            options={countries}
                            name="countryCode"
                            onChange={onChange}
                        />
                        <Form.Input 
                            label='Phone number' 
                            placeholder='Phone Number' 
                            name="phoneNumber"
                            onChange={onChange}
                        />

                        <Form.Checkbox
                            name="isFavorite"
                            onChange={(e, data) => {
                                onChange(e, { name: "isFavorite", value: data.checked });
                            }}
                            label="Add to favorites"
                        />
                        <Button disabled={formInvalid || loading} loading={loading} onClick={onSubmit} primary type='submit'>Submit</Button>
                    </Form>
                    </Container>
                    </div>
                </div>
    )
}

export default CreateContact
