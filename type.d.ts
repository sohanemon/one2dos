type auth = {
  user: User | null;
  googleLogin?: Function;
};

type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: [
    {
      providerId: string;
      uid: string;
      displayName: string;
      email: string;
      phoneNumber: null;
      photoURL: string;
    }
  ];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};
