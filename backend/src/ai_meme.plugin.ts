import { type Chain, PluginBase } from "@goat-sdk/core";
import type { EVMWalletClient } from "@goat-sdk/wallet-evm";
import { MemeService } from "./ai_meme.service";
import { modeTestnet } from "viem/chains";

const SUPPORTED_CHAINS = [modeTestnet];
export class CreateMeme extends PluginBase<EVMWalletClient> {
  constructor(wallet) {
    // Import the tools we created in the previous step here
    super("createMeme", [new MemeService(wallet)]);
  }

  supportsChain = (chain: Chain) =>
    chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id);
}

export const createMeme = (wallet) => new CreateMeme(wallet);
