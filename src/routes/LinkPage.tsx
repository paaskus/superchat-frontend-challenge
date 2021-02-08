import { useParams } from 'react-router-dom';

import RepositoryContainer from '../components/RepositoryContainer';
import useDocumentSubscriber from '../hooks/useDocumentSubscriber';
import LinkDefinition from '../types/LinkDefinition';
import { firestore } from '../utils/firebase';

const LinkPage = () => {
  const { linkId } = useParams<{ linkId: string }>();
  const link = useDocumentSubscriber<LinkDefinition>(
    linkId ? firestore.collection('links').doc(linkId) : null
  );

  if (!link) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {link && (
        <RepositoryContainer
          owner={link.username}
          name={link.repository}
          color={link.color}
          icon={link.icon}
        />
      )}
    </>
  );
};

export default LinkPage;
