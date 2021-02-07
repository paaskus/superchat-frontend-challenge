import { useParams } from 'react-router-dom';

const Link = () => {
  const { linkId } = useParams<{ linkId: string }>();

  return (
    <p>
      Displaying link
      {linkId}
    </p>
  );
};

export default Link;
