"use client";

import { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';
import { auth, signInAnonymously } from '@/lib/firebase';

export function useAnonymousAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.warn("Firebase not configured. Anonymous auth is disabled. Please provide valid Firebase credentials in your environment variables.");
      setLoading(false);
      return;
    }

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
            setUser(null);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
