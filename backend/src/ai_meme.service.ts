import { Tool } from "@goat-sdk/core";
import { memeParams, addETHParams, swapMemeETHParams, swapETHParams, tokenParam } from './parameters';
import { parseEther } from 'viem';
import { mode, modeTestnet } from "viem/chains";
import { getPublicClient } from "./viemClient/client";
import { EVMWalletClient } from "@goat-sdk/wallet-evm"
import { memeProp } from './ercProp/memeProp'
import { z } from "zod";

const MEME_TOKEN_ADDRESS: `0x${string}`[] = []

const publicClient = getPublicClient();
export class MemeService {
    private memeTokenFactoryAddress: `0x${string}`
    private memeTokenAddress: `0x${string}`
    private walletClient;

    constructor(wallet) {
        this.walletClient = wallet;
    }

    @Tool({
        name: "create-meme",
        description: "create a meme token",
    })
    async create_meme_token(parameters: memeParams): Promise<`0x${string}` | string | undefined> {
        console.log('hi')
        try {
            const [account] = await this.walletClient.getAddresses();
            const args: [string, string, bigint] = [parameters.tokenName, parameters.tokenSymbol, parameters.tokenSupply]

            const FactoryHash = await this.walletClient.deployContract({
                ...memeProp,
                args,
                account,
                chain: modeTestnet
            })

            if (!FactoryHash) return "Wallet couldn't deploy contract"
            console.log(`Transaction Hash: ${FactoryHash}`)

            const factoryReceipt = await publicClient!.waitForTransactionReceipt({hash: FactoryHash})
            const factoryContract = factoryReceipt.contractAddress as `0x${string}`;
            MEME_TOKEN_ADDRESS.push(factoryContract)

            const result = await publicClient!.readContract({
                ...memeProp,
                address: factoryContract,
                functionName: "getTokenAddress"
            })

            this.memeTokenAddress = result

            this.memeTokenFactoryAddress = factoryContract;

            // return contractAddress as `0x${string}`;
            return factoryReceipt.transactionHash;
        } catch (error) {
            throw new Error('error creating meme token:', error);
        }
    }

    @Tool({
        name: "get token address",
        description: "get the address of the deployed meme"
    })
    async getMemeAddress(parameters: tokenParam) {
        if (!this.memeTokenAddress) return "You don't have any deployed meme tokens"
        return this.memeTokenAddress
    }

    @Tool({
        name: "add-liqudity",
        description: "add ETH liquidity to the meme token generated",
    })
    async addLiquidityETH(walletClient: EVMWalletClient, parameters: addETHParams): Promise<`0x${string}` | string | undefined> {
        const args = [parameters.MemeAmount]
        try {
            const receipt = await walletClient.sendTransaction({
                to: this.memeTokenFactoryAddress,
                abi: memeProp.abi,
                functionName: 'addLiquidityETH',
                args,
                value: parseEther((parameters.ETHAmount).toString()),
            })

            if (!receipt) return "Wallet couldn't add ETH liqudity to the meme contract"
            console.log(`Transaction Hash: ${receipt.hash}`)

            return receipt.hash;
        } catch (error) {
            throw new Error('error adding ETH liquidity:', error);
            
        }
    }

    @Tool({
        name: 'buy-meme-eth',
        description: "Swap ETH to meme token",
    })
    async buyMemeETH(walletClient: EVMWalletClient, parameters: swapETHParams): Promise<`0x${string}` | string | undefined> {
        try {
            const receipt = await walletClient.sendTransaction({
                to: this.memeTokenFactoryAddress,
                functionName: "swapETHForMeme",
                abi: memeProp.abi,
                value: parseEther((parameters.ETHAmount).toString()),
            })

            if(!receipt) return "Wallet couldn't buy meme token with ETH"

            console.log(`Transaction Hash: ${receipt}`)

            return receipt.hash;
        } catch (error) {
            throw new Error('error buying meme token with ETH:', error)
        }
    }

    @Tool({
        name: "swap-meme-eth",
        description: "Swap meme token to ETH"
    })
    async SwapMemeETH(walletClient: EVMWalletClient, parameters: swapMemeETHParams): Promise<`0x${string}` | undefined | string> {
        try {
            const args = [parameters.MemeAmount]
            const receipt = await walletClient.sendTransaction({
                to: this.memeTokenFactoryAddress,
                functionName: "swapMemeForETH",
                abi: memeProp.abi,
                args
            })

            if (!receipt) return "Wallet couldn't swap meme to ETH"

            return receipt.hash
        } catch (error) {
            throw new Error("error swapping meme token to ETH:", error)
        }
    }
}
