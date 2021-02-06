/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { collectionData } from 'rxfire/firestore';
import { combineLatest } from 'rxjs';

import WithId from '../types/WithId';
import { firebase } from '../utils/firebase';

interface UseCollectionSubscriberParams {
  queries: firebase.firestore.Query[];
  idField?: string;
  deps?: ReadonlyArray<any>;
}

const flatten = <T>(twoDimensionalArray: T[][]): T[] =>
  twoDimensionalArray.reduce((acc, arr) => [...acc, ...arr]);

const useCollectionSubscriber = <T>({
  queries,
  idField = 'id',
  deps = [],
}: UseCollectionSubscriberParams) => {
  const [documents, setDocuments] = useState<WithId<T>[]>([]);

  const subscribeToCollection = () => {
    const getDocuments$ = combineLatest(
      queries.map((query) => collectionData<WithId<T>>(query, idField))
    );
    const subscription = getDocuments$.subscribe((observedDocuments) =>
      setDocuments(flatten(observedDocuments))
    );

    return () => subscription.unsubscribe();
  };

  useEffect(subscribeToCollection, deps);

  return documents;
};

export default useCollectionSubscriber;
