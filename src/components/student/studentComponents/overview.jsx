import React, {useState}from 'react'
import Courses from './courses'
import { Input, Menu, Label } from 'semantic-ui-react'

export default function Overview() {

    const [tab, setTab] = useState('Current');
    const [data, setData] = useState('JavaScript1')
    // const [currentCourse, setCurrentCourses] = useState([
    //   {name:'JavaScript 2', completion: 1 },
    //   {name:'JavaScript 3', completion: 2 }
    // ])
    // const [completedCourses, setCompletedCourses] = useState([
    //   {name:'JavaScript 1', completion: 3 },
    //   {name:'HTML&CSS', completion: 3 },
    //   {name:'Graphical Design', completion: 2 }
    // ])
    // const [uncomplete, setunCompleteCourses] = useState([
    //   {name:'Server Side', completion: 0 },
    //   {name:'Project Course', completion: 0 },
    //   {name:'LIA', completion: 0 }
    // ])
    function handleClick(tab,data){
        setTab(tab)
        setData(data)
        // switch(tab){
        //   case 'Current':
        //   return currentCourse;
        //   case 'Completed':
        //     return completedCourses
        //   case 'Uncomplete':
        //     return uncomplete
        // }
    }
    return (
        <div className='student-overview-container'>
           <Menu attached='top' tabular>
          <Menu.Item
            as='a'
            name='Current'
            active={tab === 'Current'}
            onClick={() => handleClick('Current','JavaScript1')}
            > Current
              <Label color='yellow' floating circular>
                1
              </Label>
            </Menu.Item>
          <Menu.Item
            as='a'
            name='Completed'
            active={tab === 'Completed'}
            onClick={() => handleClick('Completed','JavaScript2')}
          > Completed
              <Label color='teal' floating circular>
              3
            </Label>
           </Menu.Item>
          <Menu.Item
            as='a'
            name='Uncomplete'
            active={tab === 'Uncomplete'}
            onClick={() => handleClick('Uncomplete','Uncomplete')}
          >
            Incompleted

          <Label color='red' floating circular>
            22
          </Label>
    </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search courses..'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="side-border">
        <Courses sendData={data}/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
              <Courses/>
        </div>

        </div>
    )
}