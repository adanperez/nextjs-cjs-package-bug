This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Next.js seems to be including server code when compiling the client code for the browser.

For a CJS module package, the Next.js build is ignoring the `typeof window === 'undefined'` check when compiling the client code. Code is located here: [local_modules/cjs-module/dist/Manager.js](./local_modules/cjs-module/dist/Manager.js)


You will see the following node prefix import error if you go to [http://localhost:3000/cjs](http://localhost:3000/cjs) where that package is being used.

```
Build Error
Failed to compile

node:assert
Module build failed: UnhandledSchemeError: Reading from "node:assert" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
```

The same code local to the project will work fine [http://localhost:3000/local](http://localhost:3000/local).