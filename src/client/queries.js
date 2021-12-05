import { gql } from "@apollo/client";

export const GET_CV = gql`
  query {
    resume {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const GET_CV_BY_ID = gql`
  query ($id: Int!) {
    resume_by_pk(id: $id) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const ADD_HEADER = gql`
  mutation ( $Name: String) {
    insert_resume_one(object: { Name: $Name }) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
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
      Experiences
      Education
      Certificates
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
      Experiences
      Education
      Certificates
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
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const UPDATE_EDUCATION = gql`
  mutation ($id: Int!, $Education: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Education: $Education }) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const UPDATE_EXPERIENCES = gql`
  mutation ($id: Int!, $Experiences: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Experiences: $Experiences }) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const UPDATE_CERTIFICATES = gql`
  mutation ($id: Int!, $Certificates: jsonb) {
    update_resume_by_pk(pk_columns: { id: $id }, _set: { Certificates: $Certificates }) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;

export const DELETE_CV = gql`
  mutation ($id: Int!) {
    delete_resume_by_pk(id: $id) {
      id
      Header
      Name
      Summary
      Skills
      Experiences
      Education
      Certificates
      CreatedAt
    }
  }
`;


