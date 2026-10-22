import axios from "axios";

async function UseFetchCurrency({currency}) {
        let xx = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        let data = await xx.json();

        return data;

}

export default UseFetchCurrency;

