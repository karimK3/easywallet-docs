# React SDK Usage

## `useEasyWallet` Hook

```tsx
const { login, logout, isAuthenticated, user } = useEasyWallet();
```

### Login

```tsx
<button onClick={login}>Login</button>
```

### Logout

```tsx
<button onClick={logout}>Logout</button>
```

### Access User

```tsx
if (isAuthenticated) {
  console.log(user);
}
```
