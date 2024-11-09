import { GraphQLClient, gql } from 'graphql-request';

const URL = process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT;
const graphqlAPI = new GraphQLClient(URL, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export const fetchCertifications = async () => {
  const query = gql`
    query GetCertifications {
  certifications {
    id
    certificationTitle
    certificationDetails
    certificationIssuedBy
    certificationIssuedDate
    certificationTags
    certificationShortDescription
    certificationUrl
  }
    }
  `;

  try {
    const result = await graphqlAPI.request(query);
    return result.certifications;
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }
};
export const fetchCertificationById = async (id) => {
  const query = gql`
    query GetCertificationById($id: ID!) {
      certification(where: { id: $id }) {
        id
        certificationTitle
        certificationDetails
        certificationIssuedBy
        certificationIssuedDate
        certificationTags
        certificationShortDescription
        certificationUrl
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query, { id }); // Pass `id` variable correctly
    return result.certification;
  } catch (error) {
    console.error("Error fetching certification by id :", error);
    return null; // Return null if there's an error
  }
};


export const fetchAllProjects = async () => {
  const query = gql`
    query GetAllProjects {
      projects {
        id
        projectTitle
        projectDate
        projectDetails
        projectShortDescription
        projectTags
        publishedAt
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query);
    return result.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchProjectById = async (id) => {
  const query = gql`
    query GetProjectById($id: ID!) {
      project(where: { id: $id }) {
        id
        projectTitle
        projectDate
        projectDetails
        projectShortDescription
        projectTags
        publishedAt
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query, { id });
    return result.project;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
};

