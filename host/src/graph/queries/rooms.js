import {gql} from 'apollo-boost';

export const GET_ROOMS = gql`
  {
    rooms {
      id
      deposit

    }
  }
`;
