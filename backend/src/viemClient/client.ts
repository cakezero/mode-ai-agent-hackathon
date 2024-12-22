import { createWalletClient, createPublicClient, http, type WalletClient, type PublicClient } from 'viem';
import { mode, sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import dotenv from 'dotenv'

dotenv.config()

export const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);


export const wallet: WalletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL as `https://${string}`),
    chain: sepolia
});

export const publicClient = createPublicClient({
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: mode
})