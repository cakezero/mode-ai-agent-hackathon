import { Tool } from "@goat-sdk/core";
import { memeParams, addETHParams, addUSDCParams, swapMemeETHParams, swapMemeUSDCParams, swapUSDCParams, swapETHParams } from './parameters';
import { parseEther, WalletClient } from 'viem';
import { erc20Prop } from './ercProp/erc20Prop'
import { mode, sepolia } from "viem/chains";
import { publicClient } from "./viemClient/client";
import { EVMWalletClient } from "@goat-sdk/wallet-evm"
import { memeProp } from './ercProp/memeProp'

const MEME_TOKEN_ADDRESS: `0x${string}`[] = []
export class MemeService {
    private memeTokenFactoryAddress: `0x${string}`
    private memeTokenAddress: `0x${string}`

    constructor() {}

    @Tool({
        name: "create-meme",
        description: "create a meme token",
    })
    async create_token(walletClient: WalletClient, parameters: memeParams): Promise<`0x${string}` | string | undefined> {
        try {
            const [account] = await walletClient.getAddresses();
            const args = [parameters.tokenName, parameters.tokenSymbol, parameters.tokenSupply]
            // const hash = await walletClient.deployContract({
            //     ...erc20Prop,
            //     args,
            //     account,
            //     chain: sepolia
            // })

            // if (!hash) return "Wallet couldn't deploy contract"
            // console.log(`Transaction Hash: ${hash}`)

            // const receipt = await publicClient.waitForTransactionReceipt({hash})
            // const contractAddress = receipt.contractAddress;

            // this.memeTokenAddress = contractAddress as `0x${string}`;

            const FactoryHash = await walletClient.deployContract({
                ...memeProp,
                args,
                account,
                chain: sepolia
            })

            if (!FactoryHash) return "Wallet couldn't deploy contract"
            console.log(`Transaction Hash: ${FactoryHash}`)
            const factoryReceipt = await publicClient.waitForTransactionReceipt({hash: FactoryHash})
            MEME_TOKEN_ADDRESS.push(factoryReceipt.contractAddress as `0x${string}`)

            this.memeTokenFactoryAddress = factoryReceipt.contractAddress as `0x${string}`;

            return contractAddress as `0x${string}`;
        } catch (error) {
            throw new Error('error creating meme token:', error);
        }
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
    async buyMemeETH(walletClient: EVMWalletClient, parameter: swapETHParams): Promise<`0x${string}` | string | undefined> {
        try {
            const receipt = await walletClient.sendTransaction({
                to: this.memeTokenFactoryAddress,
                functionName: "swapETHForMeme",
                abi: memeProp.abi,
                value: parseEther((parameter.ETHAmount).toString()),
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
    async SwapMemeETH(walletClient: EVMWalletClient, parameter: swapMemeETHParams): Promise<`0x${string}` | undefined | string> {
        try {
            const args = [parameter.MemeAmount]
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
