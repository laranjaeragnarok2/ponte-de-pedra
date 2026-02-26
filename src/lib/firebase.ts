// Firebase is lazy-loaded to prevent server-side localStorage errors
// Only access via getFirebaseAuth() in client components

let _authPromise: Promise<{ auth: any; signInAnonymously: any }> | null = null;

export function getFirebaseAuth() {
  if (typeof window === 'undefined') {
    return Promise.resolve({ auth: null, signInAnonymously: null });
  }

  if (!_authPromise) {
    _authPromise = (async () => {
      const { initializeApp, getApps, getApp } = await import("firebase/app");
      const { getAuth, signInAnonymously } = await import("firebase/auth");

      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key",
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-auth-domain",
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id",
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-storage-bucket",
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "your-messaging-sender-id",
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "your-app-id",
      };

      if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your-api-key') {
        const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
        const auth = getAuth(app);
        return { auth, signInAnonymously };
      }

      return { auth: null, signInAnonymously: null };
    })();
  }

  return _authPromise;
}
