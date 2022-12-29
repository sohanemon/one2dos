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

## ! in Typescript

`!` is used as non-null assertion and definite assignment assertion

```js
let s = e!.name;  // Assert that e is non-null and access name
```

```js
let x!: number; // Assert that x is defined

console.log(x + x); // No error!
```

## Using `as` in Typescript

```js
<MenuItem
  onClick={(e) =>
    setPriority((e.target as HTMLElement).innerText)
  }
>
  Low
</MenuItem>
```

Where it is

```js

(e.target as HTMLElement).innerText
// is equal to
let x = e.target as HTMLElement
x.innerText
```

it asserts the `target` as a `HTMLElement` type

## Awesome refetching way! No SWR, React Query

```js
const [seed, setSeed] = useState(1);
const reset = () => {
  setSeed(Math.random());
}
<Component key={seed}/>
<Button onClick={reset}>Reset</Button>
```
