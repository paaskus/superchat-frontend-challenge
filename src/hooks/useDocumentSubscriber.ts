/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { docData } from 'rxfire/firestore';
import { take } from 'rxjs/operators';

import WithId from '../types/WithId';
import { firebase } from '../utils/firebase';

interface UseDocumentSubscriberOptions {
  subscribe?: boolean;
  deps?: ReadonlyArray<any>;
}

// Polyfill
if (!Object.entries) {
  Object.entries = (obj: any) => {
    const ownProps = Object.keys(obj);
    let i = ownProps.length;
    const resArray = new Array(i); // preallocate the Array
    while (i) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
      i -= 1;
    }

    return resArray;
  };
}

const isEmpty = (obj: any) =>
  !obj || (Object.entries(obj).length === 0 && obj.constructor === Object);

const useDocumentSubscriber = <T>(
  docRef: firebase.firestore.DocumentReference | null,
  options: UseDocumentSubscriberOptions = {
    subscribe: true,
    deps: [],
  }
): WithId<T> | null => {
  const [document, setDocument] = useState<WithId<T> | null>(null);

  const subscribeToDocument = () => {
    if (docRef) {
      const getDocument$ = docData<T>(docRef);
      const subscription = getDocument$
        .pipe(options.subscribe !== false ? (_) => _ : take(1))
        .subscribe((observedDocument) => {
          const documentToSet = isEmpty(observedDocument)
            ? null
            : {
                ...observedDocument,
                ...{ id: docRef.id },
              };
          setDocument(documentToSet);
        });
      const unsubscribeFn = () => subscription.unsubscribe();
      if (options.subscribe !== false) return unsubscribeFn;

      return undefined;
    }
    return undefined;
  };

  useEffect(subscribeToDocument, [
    // ignore linting here: these dependencies are just as intended ;)
    docRef ? docRef.path : null,
    ...(options.deps ?? []),
    options.subscribe,
  ]);

  return document;
};

export default useDocumentSubscriber;
