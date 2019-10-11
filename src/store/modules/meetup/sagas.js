import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateMeetupSuccess, meetupSelected } from './actions';

import history from '~/services/history';
import { timeout } from 'q';

function* meetupRequest({ payload }) {
  try {
    const {
      title,
      description,
      date,
      location,
      file_id,
    } = payload.data.dataUpdate;
    const meetupData = payload.data.data;
    // console.tron.log('payload', payload.data);

    const response = yield call(api.put, `meetups/${meetupData.id}`, {
      title,
      description,
      date,
      location,
      file_id,
    });

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Falha na atualização dos dados, favor verifique novamente.');
  }
}

function* meetupSuccess({ meetup }) {
  const response = yield call(api.get, `meetups/${meetup.id}`);

  yield put(meetupSelected(response.data));
  toast.success('Meetup atualizado com sucesso.');

  setTimeout(function() {
    history.push('/meetup/details');
  }, 3800);
}

export default all([
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', meetupRequest),
  takeLatest('@meetup/UPDATE_MEETUP_SUCCESS', meetupSuccess),
]);
