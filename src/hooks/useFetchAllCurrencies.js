import { useDispatch } from "react-redux";
import { addCurrencies } from "../features/currency/currencySlice";
import axios from "axios";

async function UseFetchAllCurrencies() {
  const dispatch = useDispatch();

  axios
    .get(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json",
    )
    .then((dt) => {
        console.log(...Object.entries(dt.data));
        dispatch(addCurrencies(Object.entries(dt.data)));
    })
    .catch((e) => {
      console.log(e);
    });

}

export default UseFetchAllCurrencies;

