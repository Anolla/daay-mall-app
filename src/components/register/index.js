import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Login from './login';
import SignUp from './signup';
import Button from 'react-bootstrap/Button';
import './auth.css';
import { useHistory } from 'react-router-dom';

function Auth(props) {
  const history = useHistory();
  const [body, setBody] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    props.signUpRemoteUser(body.username, body.email, body.password, history);
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    // history.push('/');
    props.loginRemoteUser(body.email, body.password, history);
  }

  function handelChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div id="authcontainer">
        <Login
          handelChange={handelChange}
          body={body}
          handleSubmitLogin={handleSubmitLogin}
        />
        <SignUp
          handelChange={handelChange}
          body={body}
          handleSubmit={handleSubmit}
        />
      </div>
      <hr></hr>
      <div id="authbuttons">
        <h3 id="or">OR</h3>
        <hr></hr>
        <Button className="authbuttons" variant="primary">
          FACEBOOK
        </Button>{' '}
        <Button className="authbuttons" variant="danger">
          GOOGLE
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  loginRemoteUser: (email, password, history) =>
    dispatch(actions.loginRemoteUser(email, password, history)),
  signUpRemoteUser: (username, email, password, history) =>
    dispatch(actions.signUpRemoteUser(username, email, password, history)),
});
export default connect(mapStateToProps, actionCreater)(Auth);