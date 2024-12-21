import { createToolParameters } from '@goat-sdk/core';
import { z } from 'zod'

export class memeParams extends createToolParameters( 
    z.object({
        tokenName: z.string().describe("The name of the meme token"),
        tokenSymbol: z.string().describe("The symbol of the meme token"),
        tokenSupply: z.string().describe("The total amount of token to be in circulation")
    })
) {}