This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Firebase User Type For Typescript

```js
type User = {
  uid: string,
  email: string,
  emailVerified: boolean,
  displayName: string,
  isAnonymous: boolean,
  photoURL: string,
  providerData: [
    {
      providerId: string,
      uid: string,
      displayName: string,
      email: string,
      phoneNumber: null,
      photoURL: string,
    }
  ],
  stsTokenManager: {
    refreshToken: string,
    accessToken: string,
    expirationTime: number,
  },
  createdAt: string,
  lastLoginAt: string,
  apiKey: string,
  appName: string,
};
```
