"use client";

import { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';
import { auth, signInAnonymously } from '@/lib/firebase';

export function useAnonymousAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
      } else {
        signInAnonymously(auth)
          .then((userCredential) => {
            setUser(userCredential.user);
            setLoading(false);
          })
          .catch(error => {
            console.error("Anonymous sign-in error", error);
            setUser(null);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
