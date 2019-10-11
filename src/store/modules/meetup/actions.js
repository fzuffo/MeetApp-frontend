export function meetupSelected(meetup) {
  return {
    type: '@meetup/SELECTED',
    meetup,
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    meetup,
  };
}

// export function updateMeetupFailure() {
//   return {
//     type: '@meetup/UPDATE_MEETUP_FAILURE',
//   };
// }
