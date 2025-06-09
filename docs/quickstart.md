# Quickstart

Welcome to EasyWallet! Get started in minutes.

## Installation

Install the packages:

```bash
pnpm add @easywallet/react @easywallet/sdk @easywallet/server
```

## Frontend Integration

```tsx
import { useEasyWallet } from "@easywallet/react";

function Login() {
  const { login, logout, isAuthenticated, user } = useEasyWallet();

  return isAuthenticated ? (
    <>
      <p>Welcome, {user?.email}!</p>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <button onClick={login}>Login with EasyWallet</button>
  );
}
```

## Backend Setup

```ts
import { createSession } from "@easywallet/server";

app.post("/auth/callback", async (req, res) => {
  const session = await createSession(req);
  res.cookie("session", session.token);
  res.redirect("/dashboard");
});
```