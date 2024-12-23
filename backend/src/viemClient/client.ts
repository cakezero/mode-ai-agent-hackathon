import {
  createWalletClient,
  createPublicClient,
  http,
  type WalletClient,
  type PublicClient,
} from "viem";
import { mode, modeTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

let publicClientInstance: PublicClient | undefined;
let walletClientInstance: WalletClient | undefined;

export const getWalletClient = () => {

    if (walletClientInstance) {
        return walletClientInstance;
    }

    const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);

  walletClientInstance = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL as `https://${string}`),
    chain: modeTestnet
  });

  return walletClientInstance;
};

export const getPublicClient = () => {

    if (publicClientInstance) {
        return publicClientInstance;
    }

  publicClientInstance = createPublicClient({
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: modeTestnet,
  }) as PublicClient;

  return publicClientInstance;
};
