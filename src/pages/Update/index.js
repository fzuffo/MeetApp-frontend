import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, BannerInput, Content } from './styles';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

export default function Update() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup);

  function handleSubmit(dataUpdate) {
    dispatch(updateMeetupRequest({ dataUpdate, data }));
  }

  return (
    <Container>
      <Content>
        <Form initialData={data} onSubmit={handleSubmit}>
          {/* <BannerInput name="banner_id" /> */}
          <Input type="text" name="file_id" />

          <Input name="title" placeholder="Titulo" />
          <Input name="description" placeholder="Descrição completa" />
          <Input name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />

          <button type="submit">Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
