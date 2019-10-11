import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      border-radius: 4px;

      mix-blend-mode: normal;
      max-width: 940px;
      height: 300px;
      background: rgba(0, 0, 0, 0.4);
    }

    input {
      display: none;
    }
  }
`;
