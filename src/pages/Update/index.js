import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import BannerInput from './BannerInput';
import { Container, Content } from './styles';
import {
  updateMeetupRequest,
  meetupSelected,
  clearMeetupSelected,
} from '~/store/modules/meetup/actions';
import api from '~/services/api';

import ReactDatePicker from './ReactDatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  date: Yup.string().required('Campo obrigatório'),
  location: Yup.string().required('Campo obrigatório'),
  file_id: Yup.string().required('Campo obrigatório'),
});

export default function Update({ match }) {
  const data = useSelector(state => state.meetup);
  const dispatch = useDispatch();

  const { meetupId } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/user`);

      const meetupData = response.data.map(m => ({
        ...m,
        dateFormatted: format(
          parseISO(m.date),
          "d 'de' MMMM 'de' yyyy', às' H'h'",
          {
            locale: pt,
          }
        ),
        file_id2: m.file_id,
      }));

      const newData = meetupData.find(
        element => element.id === Number(meetupId)
      );
      console.tron.log('newdata', newData);
      if (newData) {
        dispatch(meetupSelected(newData));
      } else {
        dispatch(clearMeetupSelected());
      }
    }

    loadMeetup();
  }, [dispatch, meetupId]);

  function handleSubmitUpdate(dataForm) {
    const dataUpdate = dataForm;
    dataUpdate.date = new Date(dataForm.date);

    dispatch(updateMeetupRequest({ dataUpdate, data }));
  }

  return (
    <Container>
      {data ? (
        <Content>
          <Form
            schema={schema}
            initialData={data}
            onSubmit={handleSubmitUpdate}
          >
            <BannerInput name="file_id" />

            <Input name="title" placeholder="Titulo" />

            <Input
              multiline
              name="description"
              placeholder="Descrição completa"
            />

            <ReactDatePicker name="date" />

            <Input name="location" placeholder="Localização" />

            <button type="submit">
              <MdAddCircleOutline size={20} color="#fff" />
              Salvar meetup
            </button>
          </Form>
        </Content>
      ) : (
        <div id="infoNotFound">
          <span> Meetup não encontrado </span>
        </div>
      )}
    </Container>
  );
}
