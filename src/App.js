import React, { useState } from "react";
import NavBar from "./components/nav-bar/navBar";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import Student from "./components/student/studentMain";
import Teacher from "./components/teacher/teacherMain";
import LogIn from "./components/logIn/logIn";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import {useSelector, useDispatch} from "react-redux"
import {actions} from './features/menu'
function App() {
  const [visible, setVisible] = useState(false);
  const [showLogIn, setShow] = useState(true);
  const [cat, setCat] = useState("");
  const [username, setUsername] = useState("")

  function hamburger(click) {
    setVisible(click);
  }

  function showOne(choice) {
    setShow(false);
    setCat(choice);
  }
  const dispatch = useDispatch();
  
  

  return (
    <div className="App">
      <header className="App-header">
        {showLogIn ? null : <NavBar username={username} sideNav={(click) => hamburger(click)} />}
      </header>

      <main>
        {showLogIn ? (
          <LogIn username={username} studentList={studentList} setStudentList={setStudentList} setUsername={setUsername} datafromLogIn={(choice) => showOne(choice)} />
        ) : null}
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="slide along"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            {cat === "Teacher" ? (
              <div>
                <Menu.Item
                onClick={()=>dispatch(actions.changeMenu('students'))}
                as="a">
                  <Icon name="user" />
                  Students
                </Menu.Item>
                <Menu.Item
                 onClick={()=>dispatch(actions.changeMenu('courses'))}
                as="a">
                  <Icon name="clipboard list" />
                  Courses
                </Menu.Item>
                <Menu.Item as="a" className="remove-border">
                  <Icon name="add" />
                  New Course
                </Menu.Item>
              </div>
            ) : (
              <div>
                <Menu.Item as="a">
                <Icon name="home" />
                  Home
                </Menu.Item>
                <Menu.Item as="a">
                  Schedule
                </Menu.Item>
              </div>
            )}
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              {cat === "Student" ? <Student username={username} /> : null}
              {cat === "Teacher" ? <Teacher username={username} /> : null}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </main>
      <footer>Hej</footer>
    </div>
  );
}

export default App;
