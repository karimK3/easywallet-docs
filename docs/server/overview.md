# Server SDK Overview

The Server SDK provides easy Google OAuth and Web3 wallet authentication handling.

## Features

- Google OAuth
- Web3 Wallet Authentication (SIWE)
- JWT Session Management

## Installation

```bash
npm install @easywallet/server
```

## Usage

```ts
import { createServerAuth } from '@easywallet/server';

const auth = createServerAuth({
  clientId: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  redirectUri: 'http://localhost:3000/callback',
});

app.get('/auth/google', auth.googleLogin);
app.get('/auth/callback', auth.googleCallback);
```
