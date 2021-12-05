import { gql } from "@apollo/client";

export const GET_CV = gql`
  query {
    resume {
      id
      Name
      Header
      Summary
      Skills
      CreatedAt
    }
  }
`;

export const GET_CV_BY_ID = gql`
  query ($id: Int!) {
    resume_by_pk(id: $id) {
      CreatedAt
      Summary
      Skills
      Header
      Name
      id
    }
  }
`;

export const ADD_HEADER = gql`
  mutation ( $Name: String) {
    insert_resume_one(object: { Name: $Name }) {
      Summary
      Skills
      Header
      Name
      CreatedAt
      id
    }
  }
`;

export const UPDATE_HEADER = gql`
  mutation ($id: Int!, $Header: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Header: $Header }) {
      id
      Header
      Name
      Summary
      Skills
      CreatedAt
    }
  }
`;


export const UPDATE_SUMMARY = gql`
  mutation ($id: Int!, $Summary: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Summary: $Summary }) {
      id
      Header
      Name
      Summary
      Skills
      CreatedAt
    }
  }
`;

export const UPDATE_SKILLS = gql`
  mutation ($id: Int!, $Skills: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Skills: $Skills }) {
      id
      Header
      Name
      Summary
      Skills
      CreatedAt
    }
  }
`;

export const DELETE_CV = gql`
  mutation ($id: Int!) {
    delete_resume_by_pk(id: $id) {
      CreatedAt
      Details
      Header
      Name
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($id: Int!, $phone: String!, $name: String!, $lastname: String!, $email: String!, $date_of_birth: date!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { date_of_birth: $date_of_birth, email: $email, lastname: $lastname, name: $name, phone: $phone }) {
      date_of_birth
      email
      lastname
      name
      phone
      id
    }
  }
`;
