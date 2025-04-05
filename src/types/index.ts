import { z } from "zod";
import { currencySchema, cryptoCurrencyResponseSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof currencySchema>;
export type cryptoCurrency = z.infer<typeof cryptoCurrencyResponseSchema>;