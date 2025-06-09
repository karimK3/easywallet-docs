# Quick Start

Welcome to **EasyWallet**! This guide will get you up and running in just a few minutes.

## Install the Packages

```bash
pnpm add @easywallet/react @easywallet/server
```

## Frontend Usage

```tsx
import { useEasyWallet } from '@easywallet/react';

function MyComponent() {
  const { login, logout, isAuthenticated } = useEasyWallet();

  return isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login with EasyWallet</button>
  );
}
```

## Backend Usage

```ts
import { createServerAuth } from '@easywallet/server';

const auth = createServerAuth({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});
```

## You're all set! 🚀
