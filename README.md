This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Type.d.ts

Create `type.d.ts` and put all type definition there to get awesome typing suggestion without importing or exporting any type

example

```js
type auth = {
  user: User | null,
  googleLogin?: Function,
};
```

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
