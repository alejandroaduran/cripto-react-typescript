import { z } from "zod";

export const currencySchema = z.object({
    code: z.string().min(3).max(3),
    name: z.string().min(1).max(50),
    });