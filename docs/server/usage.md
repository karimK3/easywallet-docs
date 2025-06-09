# Server SDK Usage

## Initialize

```ts
const auth = createServerAuth({...});
```

## Routes

```ts
app.get('/auth/google', auth.googleLogin);
app.get('/auth/callback', auth.googleCallback);
```

## Validate Session

```ts
app.get('/profile', auth.protectedRoute, (req, res) => {
  res.json(req.user);
});
```
