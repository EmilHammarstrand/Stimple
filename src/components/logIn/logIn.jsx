
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Radio, Modal, Icon, Input } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux"
import {actions} from '../../features/menu'


const LogIn = ({setUsername, username}) => {
    const dispatch = useDispatch();
    const [regTeacher, setRegTeacher] = useState("");
    const [pw, setPw] = useState("");
    const [modalState, setModalState] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showErrorAll, setShowErrorAll] = useState(false);
    const [showErrorUsername, setShowErrorUsername] = useState(false);
    const detailButton = <Button className='sign-up-btn' content='Sign up' icon='signup' size='big' onClick={()=> setModalState(true)}></Button>

    const handleChangePw = event => {
      setPw(event.target.value);
    };

    const handleChangeRegTeacher = event => {
      setRegTeacher(event.target.value);
    };

    const handleChangeUsername = event => {
      localStorage.setItem("username", event.target.value)
      setUsername(event.target.value);
    };

    const ErrorMessage = () => (
      <span className="ErrorMsg"> No whitespaces allowed! </span>
    )

    const ErrorMessageUsername = () => (
      <span className="ErrorMsg"> You need to type a username! </span>
    )

    const ErrorMessageAll = () => (
      <span className="ErrorMsg"> You must fill the required fields! </span>
    )

    const handleLoginBtn = () => {
        if(regTeacher === "a" && !username.includes(" ") && pw && username )
          dispatch(actions.LoggedIn('Teacher'))
        else if (pw && username && !username.includes(" "))
          dispatch(actions.LoggedIn('Student'))
        else if (username.includes(" ")){
          setShowError(true)
          ErrorMessage()
        }
        else if(!username && !pw){
          setShowErrorAll(true)
          ErrorMessageAll()
        }
        else if(!username){
          setShowErrorUsername(true)
          ErrorMessageUsername()
        }
    }

    const registerBtn = () => {
      if(regTeacher === "a" && !username.includes(" ") && pw && username)
          dispatch(actions.LoggedIn('Teacher'))
        else if (pw && username && !username.includes(" "))
          dispatch(actions.LoggedIn('Student'))
        else if (username.includes(" ")){
          setShowError(true)
          ErrorMessage()
        }
        else if(!username && !pw){
          setShowErrorAll(true)
          ErrorMessageAll()
        }
        else if(!username){
          setShowErrorUsername(true)
          ErrorMessageUsername()
        }
   }

return (
  <Segment placeholder className="loginForm">
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='* Username'
            onChange={handleChangeUsername}
          />
          {showErrorUsername ? <ErrorMessageUsername /> : null}
          {showError ? <ErrorMessage /> : null}

          <Form.Input
            icon='lock'
            iconPosition='left'
            label='* Password'
            type="password"
            onChange={handleChangePw}
          />

          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Teacher-key'
            onChange={handleChangeRegTeacher}
          />

        <Button className='login-btn' content='Login' onClick={handleLoginBtn} primary  />

        {showErrorAll ? <ErrorMessageAll /> : null}

        <Divider horizontal>Or</Divider>

        <Modal
            trigger={detailButton}
            basic size='small'
            open={modalState}
            onClose={()=>setModalState(false)}>
           <Modal.Content>
             <div className="registerForm">
                <Form.Input className="regForm" type="email" placeholder="Email... (optional)"  icon="mail" iconPosition="left"></Form.Input>
                <Form.Input className="regForm" type="text" placeholder="Username..." required icon="user" iconPosition="left" onChange={handleChangeUsername} ></Form.Input>
                <div className="ErrorMsg"> {showErrorUsername ? <ErrorMessageUsername /> : null} </div>
                <div className="ErrorMsg"> {showError ? <ErrorMessage /> : null} </div>
                <Form.Input className="regForm" type="password" placeholder="Password..." required icon="lock" iconPosition="left" onChange={handleChangePw} ></Form.Input>
                <label className="regForm asd">To sign up as a Teacher you will need a key from your workplace!</label>
                <Form.Input className="regForm" type="text" placeholder="Teacher key... (optional)" icon="lock" iconPosition="left" onChange={handleChangeRegTeacher}></Form.Input>
              </div>
           </Modal.Content>
            <Modal.Actions className="asd">
                <Button color='green'   inverted  onClick={registerBtn}  >
                    <Icon name='sign in' /> Sign up and Log in!
                </Button>
            </Modal.Actions>
            <div className="ErrorMsg-All"> {showErrorAll ? <ErrorMessageAll /> : null} </div>
        </Modal>
        </Form>
  </Segment>
)
}


export default LogIn;


