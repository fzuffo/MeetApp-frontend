import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateMeetupSuccess,
  meetupSelected,
  cancelMeetupSuccess,
} from './actions';

import history from '~/services/history';

function* updateMeetupRequest({ payload }) {
  try {
    const {
      title,
      description,
      date,
      location,
      file_id,
    } = payload.data.dataUpdate;

    const meetupData = payload.data.data;

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

function* createMeetupRequest({ payload }) {
  try {
    const { title, description, date, location, file_id } = payload.data;

    const response = yield call(api.post, `meetups/`, {
      title,
      description,
      date,
      location,
      file_id,
    });

    yield put(updateMeetupSuccess(response.data));
    toast.success('Meeup cancelado com sucesso.');
  } catch (err) {
    toast.error('Falha na atualização dos dados, favor verifique novamente.');
  }
}

function* cancelMeetupRequest({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `meetups/${id}`);

    yield put(cancelMeetupSuccess());

    toast.success('Meetup atualizado com sucesso.');

    setTimeout(function() {
      history.push('/');
    }, 1000);
  } catch (err) {
    toast.error('Falha ao cancelar, favor verifique novamente.');
  }
}

export default all([
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetupRequest),
  takeLatest('@meetup/UPDATE_MEETUP_SUCCESS', meetupSuccess),

  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetupRequest),
  takeLatest('@meetup/CREATE_MEETUP_SUCCESS', meetupSuccess),

  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetupRequest),
]);
