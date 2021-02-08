import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';

import Repository from './Repository';

const GET_REPOSITORY = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      stargazerCount
      url
      createdAt
      owner {
        avatarUrl
        url
      }
    }
  }
`;

interface RepositoryData {
  repository: {
    name: string;
    description: string;
    stargazerCoint: number;
    url: string;
    createdAt: string;
    owner: {
      avatarUrl: string;
      url: string;
    };
  };
}

interface RepositoryContainerProps {
  owner: string;
  name: string;
}

const RepositoryContainer: FC<RepositoryContainerProps> = ({ owner, name }) => {
  const { loading, error, data } = useQuery<
    RepositoryData,
    RepositoryContainerProps
  >(GET_REPOSITORY, {
    variables: { owner, name },
  });

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && (
        <Repository
          stars={data.repository.stargazerCoint}
          description={data.repository.description}
          name={data.repository.name}
          repositoryUrl={data.repository.url}
          owner={owner}
          ownerUrl={data.repository.owner.url}
          avatar={data.repository.owner.avatarUrl}
        />
      )}
    </>
  );
};

export default RepositoryContainer;
