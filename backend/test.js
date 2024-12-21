import { xai } from "@ai-sdk/xai";
import { generateText } from "ai";
import readline from 'node:readline';

import { createWalletClient, http, getAddress } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mode } from "viem/chains";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { PEPE, USDC, erc20 } from "@goat-sdk/plugin-erc20";

import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";

import dotenv from 'dotenv';
dotenv.config();

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY);

const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: mode,
});

// const check = getAddress('0xA0b86991C6218B36c1D19D4a2e9Eb0cE3606eB48')

const messages = []

const instance = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompter = () => {
    instance.question("Enter prompt (type q or quit to end the prompt): ", async (message) => {
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

const handlePrompt = async (prompt) => {
    const tools = await getOnChainTools({
        wallet: viem(walletClient),
        plugins: [sendETH(), erc20({ tokens: [USDC, PEPE] })],
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