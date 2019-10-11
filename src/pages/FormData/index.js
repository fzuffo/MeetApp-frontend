import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container, Content } from './styles';
import {
  updateMeetupRequest,
  createMeetupRequest,
} from '~/store/modules/meetup/actions';

export default function FormData() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup);
  console.tron.log(data);

  function handleSubmitUpdate(dataUpdate) {
    dispatch(updateMeetupRequest({ dataUpdate, data }));
  }

  function handleSubmitNew(newData) {
    dispatch(createMeetupRequest(newData));
  }

  return (
    <Container>
      <Content>
        <Form
          initialData={data}
          onSubmit={data === null ? handleSubmitNew : handleSubmitUpdate}
        >
          <BannerInput name="banner" />

          <Input name="title" placeholder="Titulo" />
          <Textarea name="description" placeholder="Descrição completa" />
          <Input name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />

          <button type="submit">Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
