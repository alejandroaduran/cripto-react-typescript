import { create } from "zustand"
import axios from "axios"
import { cryptoCurrenciesSchema, cryptoCurrencyResponseSchema } from "./schema/crypto-schema"
import { cryptoCurrency } from "./types"

type CryptoStore = {
    cryptoCurrencies: cryptoCurrency[],
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios.get(url)
    /* console.log(Data) */
    const result = cryptoCurrenciesSchema.safeParse(Data)
    /* console.log(result) */
    if (result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptoCurrencies: [],

    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        /*         console.log(cryptoCurrencies)*/
        set(() => ({
            cryptoCurrencies
        }))
    }

}))