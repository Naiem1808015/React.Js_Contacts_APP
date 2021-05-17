// import React from 'react'
// import { Button, Icon, Checkbox, Form, Grid, Segment, Header as SemanticHeader } from 'semantic-ui-react'
// import Header from "../../components/Header"

// const RegisterUI = ({form:{form, loading, onChange, registerFormValid, onSubmit}}) => {
//   return(
//     <div className="">
//         <Header />


//         <Grid centered>
//             <Grid.Column style={{maxWidth:"550px", marginTop: "20px"}}>
//                 <SemanticHeader>Signup Here</SemanticHeader>

//                 <Segment>
//                 <Form>
//                     <Form.Field>
//                     {/* <label>Username</label>
//                     <input 
//                         name="username" 
//                         value={form.username || ""}
//                         onChange={onChange}
//                         placeholder='Username...' 
//                     /> */}
//                     <Form.Input 
//                         name="username" 
//                         label="Username"
//                         value={form.username || ""}
//                         onChange={onChange}
//                         placeholder='Username...' 
//                     />
//                     </Form.Field>

//                     <Form.Field>
//                     <Form.Input 
//                         label="First Name"
//                         name="firstName"
//                         value={form.firstName || ""}
//                         onChange={onChange} 
//                         placeholder='First Name...' 
//                     />
//                     </Form.Field>

//                     <Form.Field>
//                     <Form.Input 
//                         label="Last Name"
//                         name="lastName"
//                         value={form.lastName || ""}
//                         onChange={onChange} 
//                         placeholder='Last Name...' 
//                     />
//                     </Form.Field>

//                     <Form.Field>
//                     <Form.Input 
//                         label="Email"
//                         name="email" 
//                         value={form.email || ""}
//                         onChange={onChange}
//                         type="email" 
//                         placeholder='Email...' 
//                     />
//                     </Form.Field>

//                     <Form.Field>
//                     <Form.Input 
//                         label="Password"
//                         name="password" 
//                         type="password"
//                         value={form.password || ""}
//                         onChange={onChange}
//                         placeholder='Password' 
//                     />
                    
//                     </Form.Field>

//                     {/* <Form.Field>
//                     <Checkbox label='I agree to the Terms and Conditions' />
//                     </Form.Field> */}
                    
//                     <Button 
//                         disabled={registerFormValid || loading} 
//                         fluid 
//                         primary 
//                         type='submit'
//                         loading={loading}
//                         onClick={onSubmit}
//                     >
//                         Submit
//                     </Button>
//                 </Form>
//                 </Segment>
//             </Grid.Column>
//         </Grid>

        
//     </div>
//   )
//   }

// export default RegisterUI



import React from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const RegisterUI = ({
  form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors },
}) => {
  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>

          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                  error={
                    fieldErrors.username && {
                      content: fieldErrors.username,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstName || ""}
                  onChange={onChange}
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  error={
                    fieldErrors.first_name && {
                      content: fieldErrors.first_name,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastName || ""}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  error={
                    fieldErrors.last_name && {
                      content: fieldErrors.last_name,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                disabled={registerFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Submit
              </Button>
            </Form>

            <Segment>
              Already have an account? <Link to="/auth/login">Login</Link>.
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterUI;