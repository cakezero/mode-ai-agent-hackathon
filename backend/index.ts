// export * from "./ai_meme.plugin";
import { createMeme } from "./src/ai_meme.plugin";
import { xai } from "@ai-sdk/xai";
import { generateText } from "ai";
import readline from 'node:readline';

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { PEPE, USDC, erc20 } from "@goat-sdk/plugin-erc20";

import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";
import { getWalletClient } from './src/viemClient/client';

import * as dotenv from 'dotenv';
dotenv.config();

const messages: {role: string, content: string}[] = []

const instance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompter = () => {
    instance.question("\nEnter prompt (type q or quit to end the prompt): ", async (message: string) => {
        // console.log(`Message recieved: ${message}`);
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
    const wallet = getWalletClient();
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
    console.log(`\nAi Response: ${result.text}\n`);
}

prompter();
