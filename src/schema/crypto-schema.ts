import { z } from "zod";

export const currencySchema = z.object({
    code: z.string().min(3).max(3),
    name: z.string().min(1).max(50),
});

export const cryptoCurrencyResponseSchema = z.object({
        CoinInfo: z.object({
            Name: z.string(),
            Fullname: z.string(),
        })
    })

export const cryptoCurrenciesSchema = z.array(cryptoCurrencyResponseSchema)
