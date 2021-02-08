import { FC } from 'react';

interface RepositoryProps {
  owner: string;
  ownerUrl: string;
  avatar: string;
  name: string;
  description: string;
  stars: number;
  repositoryUrl: string;
}

const Repository: FC<RepositoryProps> = ({ name, description, stars }) => (
  <div>
    <p>{name}</p>
    <p>{description}</p>
    <p>
      {stars}
      stars
    </p>
  </div>
);

export default Repository;
