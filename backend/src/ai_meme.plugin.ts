import { type Chain, PluginBase } from "@goat-sdk/core";
import type { EVMWalletClient } from "@goat-sdk/wallet-evm";
import { MemeService } from "./ai_meme.service";
import { sepolia } from "viem/chains";

const SUPPORTED_CHAINS = [sepolia];
export class CreateMeme extends PluginBase<EVMWalletClient> {
  constructor() {
    // Import the tools we created in the previous step here
    super("createMeme", [new MemeService()]);
  }

  supportsChain = (chain: Chain) =>
    chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id);
}

export const createMeme = () => new CreateMeme();
