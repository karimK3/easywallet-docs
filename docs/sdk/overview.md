# SDK Overview

The EasyWallet Core SDK simplifies interaction with user wallets.

## Features

- Fetch ETH and ERC-20 balances
- Access NFT metadata
- Manage user authentication sessions
- Fetch transaction history

## Installation

```bash
npm install @easywallet/sdk
```

## Usage

```ts
import { EasyWallet } from '@easywallet/sdk';

const wallet = new EasyWallet('your-api-key');
const balances = await wallet.getBalances('0xUserAddress');
console.log(balances);
```
