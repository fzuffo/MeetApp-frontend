// import produce from 'immer';
const initialState = {};

export default function meetupSelected(state = initialState, action) {
  switch (action.type) {
    case '@meetup/SELECTED':
      return action.meetup;
    default:
      return state;
  }
}
