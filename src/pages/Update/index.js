import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import { Container, Content } from './styles';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  date: Yup.date().required('Campo obrigatório'),
  location: Yup.string().required('Campo obrigatório'),
  file_id: Yup.string().required('Campo obrigatório'),
});

export default function Update() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.meetup);

  function handleSubmitUpdate(dataUpdate) {
    dispatch(updateMeetupRequest({ dataUpdate, data }));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={data} onSubmit={handleSubmitUpdate}>
          <BannerInput name="file_id" />

          <Input name="title" placeholder="Titulo" />
          <Input
            multiline
            name="description"
            placeholder="Descrição completa"
          />
          <Input name="date" placeholder="Data do meetup" />
          <Input name="location" placeholder="Localização" />

          <button type="submit">Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
