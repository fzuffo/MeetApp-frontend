import React from 'react';

import { Container, Content } from './styles';
import banner from '~/assets/banner.svg';

export default function Details() {
  return (
    <Container>
      <Content>
        <div className="meetupHeader">
          <strong>Meetup de React Native</strong>
          <div>
            <button className="editButton" type="button">
              Editar
            </button>
            <button className="cancelButton" type="button">
              Cancelar
            </button>
          </div>
        </div>

        <div>
          <img src={banner} alt="Meetup Banner" />
          <strong>
            O Meetup de React Native é um evento que reúne a comunidade de
            desenvolvimento mobile utilizando React a fim de compartilhar
            conhecimento. Todos são convidados.
            <br />
            <br />
            Caso queira participar como palestrante do meetup envie um e-mail
            para organizacao@meetuprn.com.br.
          </strong>
        </div>
        <div id="dateLocation">
          <span>24 de Junho, às 20h</span>
          <span>Rua Gembala, 260</span>
        </div>
      </Content>
    </Container>
  );
}
