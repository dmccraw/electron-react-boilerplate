// import { combineReducers } from 'redux';
// // /////////////////////////////////////
// // TODO App
// import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
// const { SHOW_ALL } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//   case SET_VISIBILITY_FILTER:
//     return action.filter;
//   default:
//     return state;
//   }
// }

// function todos(state = [], action) {
//   // console.log(state);
//   switch (action.type) {
//   case ADD_TODO:
//     return [...state, {
//       text: action.text,
//       completed: false
//     }];
//   case COMPLETE_TODO:
//     return [
//       ...state.slice(0, action.index),
//       Object.assign({}, state[action.index], {
//         completed: true
//       }),
//       ...state.slice(action.index + 1)
//     ];
//   default:
//     return state;
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });

// export default todoApp;
import { combineReducers } from 'redux';

// /////////////////////////////////////
// Reddit App

import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from './actions';

function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_REDDIT:
    return action.reddit;
  default:
    return state;
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
    return Object.assign({}, state, {
      didInvalidate: true
    });
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

function postsByReddit(state = {}, action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    // let nextState = {};
    // nextState[action.reddit] = posts(state[action.reddit], action);
    // return Object.assign({}, state, nextState)
    return Object.assign({}, state, {
      [action.reddit]: posts(state[action.reddit], action)
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
});

export default rootReducer;

