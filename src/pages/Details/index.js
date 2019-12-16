import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoMdCalendar } from 'react-icons/io';
import { MdLocationOn, MdEdit, MdDeleteForever } from 'react-icons/md';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, Content } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState([]);

  const { meetupId } = match.params;

  // const {
  //   match: {
  //     params: { meetupId },
  //   },
  // } = props;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/user`);

      const data = response.data.map(m => ({
        ...m,
        dateFormatted: format(
          parseISO(m.date),
          "d 'de' MMMM 'de' yyyy', às' H'h'",
          {
            locale: pt,
          }
        ),
        url: m.File.url,
      }));

      const newData = data.find(element => element.id === Number(meetupId));

      setMeetup(newData);
    }
    loadMeetup();
  }, [meetupId]);

  function handleCancelMeetup(id) {
    dispatch(cancelMeetupRequest(id));
  }
  // redirecting to /dashboard after delete - in sagas function

  return (
    <Container>
      {!meetup ? (
        <div id="infoNotFound">
          <span>Meetup não encontrado para esse usuário.</span>
        </div>
      ) : (
        <Content>
          <div className="meetupHeader">
            <strong>{meetup.title}</strong>
            <div>
              <Link to={`/meetup/${meetup.id}/update`}>
                <button className="editButton" type="button">
                  <MdEdit size={20} color="#fff" />
                  <span>Editar</span>
                </button>
              </Link>

              <button
                onClick={() => handleCancelMeetup(meetup.id)}
                className="cancelButton"
                type="button"
              >
                <MdDeleteForever size={20} color="#fff" />
                Cancelar
              </button>
            </div>
          </div>

          <div className="descriptionDiv">
            <div id="backgroundBanner">
              <img src={meetup.url} alt="Meetup Banner" />
            </div>
          </div>
          <strong id="description">{meetup.description}</strong>
          <div id="dateLocation">
            <span>
              <IoMdCalendar />
              {meetup.dateFormatted}
            </span>

            <span>
              <MdLocationOn />
              {meetup.location}
            </span>
          </div>
        </Content>
      )}
    </Container>
  );
}
