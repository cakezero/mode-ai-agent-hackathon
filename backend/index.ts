// export * from "./ai_meme.plugin";
import { createMeme } from "./src/ai_meme.plugin";
import { xai } from "@ai-sdk/xai";
import { generateText } from "ai";
import readline from 'node:readline';

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { PEPE, USDC, erc20 } from "@goat-sdk/plugin-erc20";

import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";
// import { wallet } from './viemClient/client';
import { createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import  * as dotenv from 'dotenv';
dotenv.config();

console.log('\n',{pri: process.env.WALLET_PRIVATE_KEY}, '\n')

const account = privateKeyToAccount('0x1080844a63f7b1a13ae0b976dc6eae09ac0e664ae0559582d758f9b39ae8fb5f' as `0x${string}`);

const wallet = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL as `https://${string}`),
    chain: sepolia
});

const messages: {role: string, content: string}[] = []

const instance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompter = () => {
    instance.question("\nEnter prompt (type q or quit to end the prompt): ", async (message: string) => {
        console.log(`Message recieved: ${message}`);
        // if (message === 'quit' || "q") {
        //     instance.close();
        //     return;
        // }

        await handlePrompt(message);
        // instance.close();
        prompter();
    })
}

const handlePrompt = async (prompt: string) => {

    const tools = await getOnChainTools({
        wallet: viem(wallet),
        plugins: [sendETH(), createMeme(), erc20({ tokens: [USDC, PEPE] })],
    });
    
    messages.push({role: 'user', content: prompt});

    const result = await generateText({
        model: xai("grok-beta"),
        tools: tools,
        maxSteps: 5,
        messages: messages,
        system: "you are a crypto wallet agent, use the tools provided to determine the user's actions to be carried out",
    });

    // console.dir(result.steps, {depth: Infinity});
    console.log(`Ai Response: ${result.text}` );
}

prompter();
