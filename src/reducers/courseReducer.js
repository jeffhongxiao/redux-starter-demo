import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // use immutable
      return [...state,
        Object.assign({}, action.course)
      ];

    case types.LOAD_COURSE_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
