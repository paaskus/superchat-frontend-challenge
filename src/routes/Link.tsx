import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_REPOSITORY = gql`
  query GetRepository {
    repository(owner: "facebook", name: "react") {
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

const Link = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORY);
  const { linkId } = useParams<{ linkId: string }>();

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <p>
      Displaying link
      {linkId}
      {JSON.stringify(data)}
    </p>
  );
};

export default Link;
