import { createWalletClient, createPublicClient, http, type WalletClient, type PublicClient } from 'viem';
import { mode, sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

console.log('\n',{pri: process.env.WALLET_PRIVATE_KEY}, '\n')

// const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);
// export const wallet = createWalletClient({
//     account: account,
//     transport: http(process.env.RPC_PROVIDER_URL as `https://${string}`),
//     chain: sepolia
// });

export const publicClient = createPublicClient({
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: sepolia
})
