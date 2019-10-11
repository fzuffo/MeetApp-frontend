export function meetupSelected(meetup) {
  return {
    type: '@meetup/SELECTED',
    meetup,
  };
}

export function clearMeetupSelected() {
  return {
    type: '@meetup/CLEAR_MEETUP_SELECTED',
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

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    meetup,
  };
}
