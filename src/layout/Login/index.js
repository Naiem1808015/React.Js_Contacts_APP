import React, {useEffect} from "react";
import {
  Form,
  Button,
  Grid,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const LoginUI = ({
  form: { onChange, form, loginFormValid, onSubmit, error, loading , autoName, autoPassword}
}) => {
  // console.log("CheckLast:>>",autoName,autoPassword)

  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20, }}>
          <SemanticHeader style={{marginLeft: "15px"}}>Login to your account</SemanticHeader>

          <Segment style={{margin: "10px"}}>
            <Form>
                {error && <Message content={error?.detail} negative></Message>}
              <Form.Field>
                <Form.Input
                  value={ form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={  form.password || ""}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  // fitted="true"
                  
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Submit
              </Button>
            </Form>

            <Segment>
              Need a new account? <Link to="/auth/register">Register</Link>.
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginUI;