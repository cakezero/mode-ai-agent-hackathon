import { Tool, WalletClientBase } from "@goat-sdk/core";
import { z } from 'zod';
import {memeParams} from './parameters'

export class MyTools {
    @Tool({
        name: "create-meme",
        description: "create a meme token",
    })
    async signMessage(walletClient: WalletClientBase, parameters: z.infer<typeof parameters>) {
        const originalMessage: string = parameters.message;
        const prefixedMessage = `BAAAA${originalMessage}`;
        const signed = await walletClient.signMessage(prefixedMessage);
        return signed.signature;
    }
}
