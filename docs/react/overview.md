# React SDK Overview

The React SDK provides plug-and-play hooks for authentication and session management.

## Features

- Google + Wallet Authentication
- Session persistence
- Access user profile info

## Installation

```bash
npm install @easywallet/react
```

## Usage

```tsx
import { useEasyWallet } from '@easywallet/react';

function Dashboard() {
  const { user, login, logout } = useEasyWallet();

  if (!user) {
    return <button onClick={login}>Sign In</button>;
  }

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```
