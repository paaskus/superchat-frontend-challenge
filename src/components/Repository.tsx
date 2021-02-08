/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import styled from 'styled-components';

import Link from './Link';

const Wrapper = styled.section<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  background-color: ${({ background }) => background};
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 1px 10px 1px;
  border-radius: 0.5rem;
  max-width: 900px;
  width: 90%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Avatar = styled.img`
  height: 5rem;
  border-radius: 509%;
`;

interface RepositoryProps {
  owner: string;
  ownerUrl: string;
  avatar: string;
  name: string;
  description: string;
  stars: number;
  repositoryUrl: string;
  color: string;
  icon: string;
}

const Repository: FC<RepositoryProps> = ({
  owner,
  name,
  description,
  stars,
  color,
  avatar,
  icon,
  repositoryUrl,
}) => (
  <Wrapper background={color}>
    <a style={{ fontSize: '1.5rem', margin: '1rem 0' }} href="/">
      🏚
    </a>
    <Card>
      <h1>
        <span>{icon}</span>{' '}
        <strong>
          <Link color={color} href={repositoryUrl}>
            {name}
          </Link>
        </strong>
      </h1>
      <p>by</p>
      <Avatar alt={owner} src={avatar} />
      <p>
        <strong>{owner}</strong>
      </p>
      {description && <p>{description}</p>}
      <p style={{ color, fontSize: '1.5rem' }}>{stars} stars</p>
    </Card>
  </Wrapper>
);

export default Repository;
