import useCollectionSubscriber from '../hooks/useCollectionSubscriber';
import LinkService from '../services/link.service';
import { firestore } from '../utils/firebase';

const Home = () => {
  const links = useCollectionSubscriber({
    queries: [firestore.collection('links')],
  });

  return (
    <div>
      <p>🔥 GitHub SuperLinks</p>
      <button
        type="button"
        onClick={() => {
          LinkService.createLink({
            username: 'facebook',
            repository: 'react',
            iconId: '1',
            color: '#000000',
          });
        }}
      >
        Create link
      </button>
      {links && (
        <ul>
          {links.map((l) => (
            <li key={l.id}>{JSON.stringify(l, null, 2)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
