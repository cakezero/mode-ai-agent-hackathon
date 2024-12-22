import { createToolParameters } from '@goat-sdk/core';
import { z } from 'zod'

export class memeParams extends createToolParameters( 
    z.object({
        tokenName: z.string().describe("The name of the meme token"),
        tokenSymbol: z.string().describe("The symbol of the meme token"),
        tokenSupply: z.number().describe("The total amount of token to be in circulation")
    })
) {}

export class addETHParams extends createToolParameters(
    z.object({
        ETHAmount: z.number().describe("The amount of ETH to add to the liquidity pool"),
        MemeAmount: z.number().describe("The amount of meme token to add to the liquidity pool")
    })
) {}

export class swapETHParams extends createToolParameters(
    z.object({
        ETHAmount: z.number().describe("The amount of Eth to be swapped to meme token")
    })
) {}

export class swapMemeETHParams extends createToolParameters(
    z.object({
        MemeAmount: z.number().describe("The amount of meme token to swap")
    })
) {}
