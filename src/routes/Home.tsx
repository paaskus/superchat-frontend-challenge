import React from 'react';
import styled from 'styled-components';

import LinkCreator from '../components/LinkCreator';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
  box-sizing: border-box;
`;

const Home = () => (
  // const links = useCollectionSubscriber<LinkDefinition>({
  //   queries: [firestore.collection('links')],
  // });

  <Wrapper>
    <h1>🔥 GitHub SuperLinks</h1>
    <LinkCreator />
  </Wrapper>
);
export default Home;
