import React from 'react';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div>
        <strong>Meus meetups</strong>
        <button type="button">Novo meetup</button>
      </div>
    </Container>
  );
}
