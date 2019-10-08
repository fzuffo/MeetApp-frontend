import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* border: 1px solid #d43; */
  padding: 52px;
`;

export const Content = styled.div`
  max-width: 940px;
  margin: 0px auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #dd3; */

    strong {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      /* align-self: flex-end; */
      margin: 5px 0 0;
      height: 42px;
      width: 172px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      text-align: right;
      padding-right: 20px;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }
    }

      ul {
        margin-top: 50px;
        /* border: 1px solid #dd4; */

        li {
          display: flex;

          justify-content: space-between;
          width: 940px;
          height: 62px;
          background: rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
          border-radius: 4px;

          strong {
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            margin: auto 30px;
          }

          span {
            color: rgba(255, 255, 255, 0.6);
            font-size: 16px;
            margin: auto 74px;
          }
        }
      }
    }
  }
`;

// export const List = styled.div`
//   ul {
//     margin-top: 50px;
