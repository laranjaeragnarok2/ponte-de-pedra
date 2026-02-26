"use client";

import { useState, useEffect } from 'react';

interface SimpleUser {
  uid: string;
}

export function useAnonymousAuth() {
  const [user, setUser] = useState<SimpleUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initAuth = async () => {
      try {
        const { getFirebaseAuth } = await import('@/lib/firebase');
        const { auth, signInAnonymously } = await getFirebaseAuth();

        if (!auth) {
          setLoading(false);
          return;
        }

        unsubscribe = auth.onAuthStateChanged((authUser: any) => {
          if (authUser) {
            setUser({ uid: authUser.uid });
            setLoading(false);
          } else {
            signInAnonymously(auth)
              .then((userCredential: any) => {
                setUser({ uid: userCredential.user.uid });
                setLoading(false);
              })
              .catch(() => {
                setUser(null);
                setLoading(false);
              });
          }
        });
      } catch {
        setLoading(false);
      }
    };

    initAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return { user, loading };
}
