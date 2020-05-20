import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const addCourses = createAction('addCourses')
const currentCourse = createAction('currentCourse')
const actions = {addCourses,currentCourse};


const initialState = {

    courses: [],
    currentCourseName: '',
    currentCourseData: [],
    currentID: ''


}

const reducer = createReducer(initialState, {
    [addCourses]: (state, action) => {
        console.log('asfsaffaf',action.payload[0].assignments)
        return { ...state, courses: action.payload,currentCourseName: action.payload[0].courseName,currentCourseData:action.payload.assignments  }

    },
    [currentCourse]: (state, action) => {

        console.log('IS THIS THE ID?' +action.payload.assignments)
        console.log('the arrat of assigs',state)
        return { ...state, currentCourseName: action.payload.courseName,currentCourseData:action.payload.assignments,currentID:action.payload._id }

    }
})

export { actions, reducer };
