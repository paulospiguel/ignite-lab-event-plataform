import { gql } from "@apollo/client";

export const CREATE_SUBSCRIBE = gql`
  mutation CreateSubscribe($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;
