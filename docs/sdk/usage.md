# SDK Usage Guide

### Authentication

You need an API key to use the SDK.

```ts
const sdk = new EasyWallet('your-api-key');
```

### Fetch Token Balances

```ts
const balances = await sdk.getBalances('0xUserAddress');
```

### Fetch NFTs

```ts
const nfts = await sdk.getNFTs('0xUserAddress');
```

### Fetch Token Prices

```ts
const prices = await sdk.getPrices();
```

And more to come!
